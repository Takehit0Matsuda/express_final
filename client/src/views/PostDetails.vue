<template>
  <div className="outbody">
    <h1 className="Pagetitle">Book Review</h1>
    <div class="messages" v-if="this.message">
      {{ this.message }}
    </div>
    <div class="post_list">
      <div class="post">
        <ul>
          <li>Date: {{ post.date }}</li>
          <li>Reviewer: {{ post.reviewer_name }}</li>
          <li>Title: {{ post.title }}</li>
          <li>Review Point: {{ post.rate }}</li>
          <li>Comment: {{ post.comment }}</li>
          <li>PostID: {{ post._id }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from "@/services/post_service";
export default {
  data() {
    return {
      post: [],
      message: "loading Post",
    };
  },
  mounted() {
    console.log("load Posts Here.");
    if (this.$store.getters.loggedIn) {
      const token = this.$store.getters.token;
      console.log(token);
      const postId = this.$route.params.id;
      PostService.getOnePost(postId, token)
        .then((data) => {
          this.post = data;
          this.message = null;
        })
        .catch((err) => {
          console.log("Error getting post: ", err);
          this.message = "Error getting post";
        });
    } else {
      this.message = "You must login first";
    }
  },
};
</script>
<style scoped>
ul {
  display: flex;
  align-items: center;
  top: 0;
  background-color: white;
  border-bottom: 1px solid gray;
  z-index: 1;
}
li {
  list-style-type: none;
  padding: 10px;
}
</style>
