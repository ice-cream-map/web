import axios from "axios";

const URL = "http://localhost:3001/api/";

export function signin(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL + "user/login", formData);
      console.log(res.data);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function signout() {
  return new Promise((resolve) => {
    resolve();
    console.log("logout");
    /*try {
      const res = axios.post(URL + `user/logout`);
      resolve(res.data);
    } catch (error) {
      reject(error.message);
    }*/
  });
}
