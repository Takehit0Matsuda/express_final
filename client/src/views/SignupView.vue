<template>
  <div class="SignUp">
    <div className="outbody">
      <div className="signup-container">
        <h1 className="formtitle">Signup</h1>
        <form name="signUpForm" @submit.prevent="handleSignup">
          <div class="form_row">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="username" />
          </div>
          <div class="form_row">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" />
          </div>
          <div class="form_row">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" />
          </div>
          <div class="form_row">
            <button :disabled="submitted"><span>Sign Up</span></button>
          </div>
          <div v-if="message" id="message">{{ message }}</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from "@/services/auth";

export default {
  name: "SignUp",
  data() {
    return {
      submitted: false,
      username: "",
      message: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignup() {
      console.log("Sign Up Pressed");
      console.log(this);
      this.submitted = true;
      if (this.email != "" && this.password != "") {
        AuthService.signup({
          username: this.username,
          email: this.email,
          password: this.password,
        })
          .then((User_model) => {
            console.log(User_model);
            this.message = "User Created";
          })
          .catch((err) => {
            console.log(err);
            this.message = "Email already taken";
            this.submitted = false;
          });
      } else {
        this.message = "Email and Password required.";
        this.submitted = false;
      }
    },
  },
};
</script>
