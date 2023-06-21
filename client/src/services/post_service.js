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
  static postPost(token) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          API_URL,
          {
            title: token.title,
            comment: token.comment,
            rate: token.rate,
          },
          { headers: { authorization: token.jwt } }
        )
        .then((res) => {
          console.log("Service returned success");
          resolve(res.data.post);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  static getOnePost(postId, token) {
    return new Promise((resolve, reject) => {
      console.log(postId);
      console.log(`${API_URL}/${postId}`);
      axios
        .get(`${API_URL}/${postId}`, { headers: { authorization: token } })
        .then((res) => {
          console.log("Service returned success");
          console.log(res);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default PostService;
