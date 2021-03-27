const axios = require("axios");

const API_BASE_URL = "https://www.dcard.tw/v2";

export default ({ query: { lastPostId } }, res) => {
  axios
    .get(
      `${API_BASE_URL}/posts?popular=true&` +
        (lastPostId ? `before=${lastPostId}` : "")
    )
    .then(function (response) {
      res.status(200).json(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    });
};
