import axios from "axios";

const API_URL = "http://localhost:3000/api/posts";

class PostService {
  static getPosts(token) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_URL, { headers: { authorization: token } })
        .then((res) => {
          console.log("Service returned success");
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default PostService;