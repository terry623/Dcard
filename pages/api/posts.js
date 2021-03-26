const axios = require("axios");

const API_BASE_URL = "https://www.dcard.tw/v2";

export default (req, res) => {
  axios
    .get(`${API_BASE_URL}/posts`, {
      params: {
        popular: true
      }
    })
    .then(function (response) {
      res.status(200).json(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    });
};
