import axios from "axios";

const URL = "http://localhost:8080/api/v1";

export function signin(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL + "/admin/auth/login", formData);
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
  });
}
