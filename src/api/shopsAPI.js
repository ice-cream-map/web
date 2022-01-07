import axios from "axios";
import { auth } from "../utils/auth";

const URL = "http://localhost:8080/api/v1";

export function addshop(formData) {
  const token = auth.getToken();
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL + "/shops", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "mulitpart/form-data",
        },
      });
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}
