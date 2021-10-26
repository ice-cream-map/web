import axios from "axios";

const URL = "http://localhost:3001/api/user";

export function getCurrentUser(apiContext = {}) {
  const { token } = apiContext;

  return new Promise(async (resolve, reject) => {
    if (token) {
      try {
        const res = await axios.get(URL, {
          headers: {
            "auth-token": token,
          },
        });
        resolve(res.data.email);
      } catch (err) {
        console.log(err);
        reject(new Error("Invalid token"));
      }
    }
  });
}
