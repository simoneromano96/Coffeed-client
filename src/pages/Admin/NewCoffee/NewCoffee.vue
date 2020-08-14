<template>
  <div class="container">
    <h1>tus-js-client demo - File Upload</h1>

    <p>
      This demo shows the basic functionality of the tus protocol. You can select a file using the controls below and
      start/pause the upload as you wish.
    </p>

    <p>
      For a prettier demo please go to the
      <a href="http://tus.io/demo.html">tus.io</a> website. This demo is just here to aid developers.
    </p>

    <br />

    <table>
      <tr>
        <td>
          <label for="endpoint">
            Upload endpoint:
          </label>
        </td>
        <td>
          <input type="text" id="endpoint" name="endpoint" value="https://master.tus.io/files/" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="chunksize">
            Chunk size (bytes):
          </label>
        </td>
        <td>
          <input type="number" id="chunksize" name="chunksize" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="paralleluploads">
            Parallel upload requests:
          </label>
        </td>
        <td>
          <input type="number" id="paralleluploads" name="paralleluploads" value="1" />
        </td>
      </tr>
    </table>

    <br />

    <input type="file" @change="onFileChange" />

    <br />
    <br />

    <div class="row">
      <div class="span8">
        <div class="progress progress-striped progress-success">
          <div class="bar" style="width: 0%;"></div>
        </div>
      </div>
      <div class="span4">
        <button class="btn stop" id="toggle-btn" @click="onUpload">{{ toggleText }}</button>
      </div>
    </div>

    <hr />
    <h3>Uploads</h3>
    <p id="upload-list">
      Succesful uploads will be listed here. Try one!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { Upload, UploadOptions } from "tus-js-client"
import * as tus from "tus-js-client"

// var toggleBtn = document.querySelector("#toggle-btn")
// var input = document.querySelector("input[type=file]")
// var progress = document.querySelector(".progress")
// var progressBar = progress.querySelector(".bar")
// var alertBox = document.querySelector("#support-alert")
// var uploadList = document.querySelector("#upload-list")
// var chunkInput = document.querySelector("#chunksize")
// var parallelInput = document.querySelector("#paralleluploads")
// var endpointInput = document.querySelector("#endpoint")

@Component
export default class NewCoffee extends Vue {
  private upload?: Upload
  private uploading = false
  private toggleText = "Start upload"
  private files: File[] = []
  private endpoint = "http://localhost:8083/files/"

  onFileChange(e) {
    this.files = e.target.files
  }

  onUpload() {
    const { upload, uploading, files } = this

    if (upload) {
      if (uploading) {
        upload.abort()
        this.toggleText = "resume upload"
        this.uploading = false
      } else {
        upload.start()
        this.toggleText = "pause upload"
        this.uploading = true
      }
    } else {
      if (files.length > 0) {
        this.startUpload()
      } else {
        // Dunno
        // input.click()
      }
    }
  }

  async startUpload() {
    const { files, endpoint } = this
    const file = files[0]

    var options: UploadOptions = {
      endpoint: endpoint,
      retryDelays: [0, 1000, 3000, 5000],
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onError: (error) => {
        console.error(error)
        // if (error.originalRequest) {
        //   if (window.confirm("Failed because: " + error + "\nDo you want to retry?")) {
        //     upload.start()
        //     uploadIsRunning = true
        //     return
        //   }
        // } else {
        //   window.alert("Failed because: " + error)
        // }
        // reset()
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
        // progressBar.style.width = percentage + "%"
        console.log(bytesUploaded, bytesTotal, percentage + "%")
      },
      onSuccess: function () {
        // var anchor = document.createElement("a")
        // anchor.textContent = "Download " + upload.file.name + " (" + upload.file.size + " bytes)"
        // anchor.href = upload.url
        // anchor.className = "btn btn-success"
        // uploadList.appendChild(anchor)
        // reset()
        console.log("Success", upload)
        console.log(upload.url)
      },
    }

    const upload = new tus.Upload(file, options)
    const prevUploads = await upload.findPreviousUploads()

    // askToResumeUpload(previousUploads, upload)
    upload.start()

    this.upload = upload
    this.uploading = true
  }
}
</script>

<style lang="scss"></style>
