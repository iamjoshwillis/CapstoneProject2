import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


//Class to talk to backend and API
class PotterApi {
  //Token for interacting with API stored here:
  static token;
  
  static async request(endpoint, data = {}, method = "get") {
 
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PotterApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes


  //Register for Site
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  };
  
  //Existing User Sign In
  static async login(data) {
    let res = await this.request(`auth/login`, data, "post");
    return res.token;
  };

  //Get Existing User Data
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res;
  };

  //Get professor information by id
  static async getProfessor(id) {
    let res = await this.request(`professors/${id}`);
    return res;
  };

  //Get All Professors
  static async getProfessors() {
    let res = await this.request(`professors`);
    return res;
  };


  //Get all course information
  static async getCourses() {
    let res = await this.request('courses');
    return res;
  };

  //Get all items from Hogsmeade
  static async getItems() {
    let res = await this.request('items');
    return res;
  };

  //Get all stores from Hogsmeade
  static async getStores() {
    let res = await this.request('stores');
    return res;
  };

  //Get course information by id
  static async getCourse(id) {
    let res = await this.request(`courses/${id}`);
    return res;
  };

  //Get data on all houses
  static async getHouses() {
    let res = await this.request('houses');
    return res;
  }

  static async sortingHat(data) {
    let res = await this.request('sortinghat', data, "post");
    return res;
  }

  //Edit User Profile
  static async saveProfileChanges(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default PotterApi;