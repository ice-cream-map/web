import axios from "axios";
import { auth } from "../utils/auth";

const URL = "http://localhost:8080/api/v1";
const token = auth.getToken();

export function addshop(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL + "/shops", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "mulitpart/form-data",
        },
      });
      console.log(res.data);
      resolve(res.data);
    } catch (err) {
      console.log(err.response);
      reject(err);
    }
  });
}

export function myshop(token) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(URL + "/shops/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      resolve(res.data);
    } catch (err) {
      console.log(err.response);
      reject(err);
    }
  });
}

export function getimageshop(photoId) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(URL + `/photos/${photoId}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

export function addicecream(shopId, formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        URL + `/shops/${shopId}/ice-cream`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      resolve(res.data);
    } catch (err) {
      console.log(err.response);
      reject(err);
    }
  });
}
