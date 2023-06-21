<template>
  <div class="Postform">
    <div className="outbody">
      <div className="Post-container">
        <h1 className="formtitle">Post Review</h1>
        <form name="PostingForm" @submit.prevent="handleSignup">
          <div class="form_row">
            <label for="title">Book Title</label>
            <input type="text" name="title" v-model="title" />
          </div>
          <div class="form_row">
            <label for="comment">Comment</label>
            <input type="text" name="comment" v-model="comment" />
          </div>
          <div class="form_row">
            <label for="rate">Review Point</label>
            <input type="number" name="rate" v-model="rate" />
          </div>
          <div class="form_row">
            <button :disabled="submitted"><span>Post Review</span></button>
          </div>
          <div v-if="message" id="message">{{ message }}</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from "@/services/post_service";

export default {
  name: "PostReview",
  data() {
    return {
      submitted: false,
      title: "",
      comment: "",
      rate: "",
    };
  },
  methods: {
    handleSignup() {
      console.log("Post Button Pressed");
      console.log(this);
      this.submitted = true;
      if (this.comment != "" && this.title != "" && this.rate != "") {
        const token = this.$store.getters.token;
        console.log(token);
        PostService.postPost({
          jwt: token,
          title: this.title,
          comment: this.comment,
          rate: this.rate,
        })
          .then((Post_model) => {
            console.log(Post_model);
            this.message = "Post Created";
            this.$router.push("/reviews");
          })
          .catch((err) => {
            console.log(err);
            this.message = "Post Failed";
            this.submitted = false;
          });
      } else {
        this.message = "Book title, Comment and Review Point are required.";
        this.submitted = false;
      }
    },
  },
};
</script>
