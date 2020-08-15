<template>
  <div class="page">
    <h1>Create a new coffee</h1>

    <form>
      <label for="coffee_name"> Coffee Name </label> <br />
      <input type="text" name="coffee_name" v-model="$v.name.$model" /> <br />
      <label for="coffee_price"> Coffee Price </label> <br />
      <input type="number" name="coffee_price" v-model="$v.price.$model" /> <br />
      <label for="coffee_description"> Coffee Description (Optional) </label> <br />
      <input type="text" name="coffee_description" /> <br />
      <label for="coffee_image"> Coffee Image (Upload this first) </label> <br />
      <input type="file" name="coffee_image" @change="onFileChange" /> <br />
    </form>

    <hr />

    <button class="btn stop" id="toggle-btn" @click="onUpload">{{ toggleText }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { validationMixin } from "vuelidate"
import { required, decimal, minValue, minLength, between } from "vuelidate/lib/validators"
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

const decimalPlaces = (decimalDigits = 2) => (value?: string) => {
  if (value) {
    const [int, dec] = value.split(".")
    return !dec || dec.length <= 2
  } else {
    return false
  }
}

@Component({
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    price: {
      required,
      decimal,
      minValue: minValue(0),
      decimalPlaces: decimalPlaces(2),
    },
  },
})
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

  reset() {
    this.upload = undefined
    this.uploading = false
    this.files = []
    this.toggleText = "Start upload"
  }
}
</script>

<style lang="scss" scoped>
.page {
}
</style>
