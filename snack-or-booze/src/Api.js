import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // New method to add an item to snacks or drinks
  static async addItem(type, itemData) {
    // Check if type is either "snacks" or "drinks"
    if (type !== "snacks" && type !== "drinks") {
      throw new Error("Invalid type. Must be 'snacks' or 'drinks'.");
    }

    // Set the id to a lowercase version of the name if it's not provided
    if (!itemData.id) {
      itemData.id = itemData.name.toLowerCase().replace(/\s+/g, "-");
    }

    // Send POST request to add item
    const result = await axios.post(`${BASE_API_URL}/${type}`, itemData);
    return result.data;
  }


}

export default SnackOrBoozeApi;
