import axios from "axios";
import is from "is_js";

export const fetchData = (endpoint, method = "GET", apiData = {}) =>
  new Promise((resolve, reject) => {
    axios({
      url: endpoint,
      method: method,
      data: apiData
    })
      .then((response) => {
        const { data: responseData } = response;

        if (is.undefined(responseData) || is.empty(responseData)) {
          alert("Something went wrong");
          return reject(responseData);
        }

        return resolve(responseData);
      })
      .catch((err) => {
        alert(err.message);
        reject(err);
      });
  });
