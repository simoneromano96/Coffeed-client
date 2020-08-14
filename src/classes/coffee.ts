import { client } from "./graphClient"

/** Class representing a coffee */
export class Coffee {
  public description?: string

  /**
   * A representation of a Coffee
   * @param {string} id The coffee's ID
   * @param {string} name The coffee name
   * @param {number} price The coffee's price
   * @param {string} imageUrl Where to retrieve the coffee image
   */
  constructor(public id: string, public name: string, public price: number, public imageUrl: string) {
    this.description = ""
  }

  fetchDescription = async () => {
    // Ask for description only once
    if (!this.description) {
      try {
        // const query = `{
        //   coffee(id: "${this.id}") {
        //     description
        //   }
        // }`

        const res = await client.query({ coffee: [{ id: this.id }, { description: true }] })
        const description = res.coffee.description
        this.description = description && description.length > 0 ? description : "No description available 😥"
      } catch (error) {
        console.log(error)
      }
    }
  }
}
