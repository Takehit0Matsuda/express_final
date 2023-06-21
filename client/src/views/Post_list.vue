<template>
  <div className="outbody">
    <h1 className="Pagetitle">Book Reviews</h1>
    <div class="messages" v-if="this.message">
      {{ this.message }}
    </div>
    <div class="post_list">
      <div class="post" v-for="post in this.posts" :key="post._id">
        <ul>
          <li>Date: {{ post.date }}</li>
          <li>Reviewer: {{ post.reviewer_name }}</li>
          <li>Title: {{ post.title }}</li>
          <li>Rate: {{ post.rate }}</li>
          <li>Comment: {{ post.comment }}</li>
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
      posts: [],
      message: "loading Posts",
    };
  },
  mounted() {
    console.log("load Posts Here.");
    if (this.$store.getters.loggedIn) {
      const token = this.$store.getters.token;
      console.log(token);
      PostService.getPosts(token)
        .then((data) => {
          this.posts = data;
          this.message = null;
        })
        .catch((err) => {
          console.log("Error getting posts: ", err);
          this.message = "Error getting posts";
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
