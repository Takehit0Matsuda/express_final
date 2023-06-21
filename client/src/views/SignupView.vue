<!-- <template>
  <div class="signup">
    <h1>This is an signup page</h1>
  </div>
</template> -->
<template>
  <div class="SignUp">
    <div className="outbody">
      <div className="signup-container">
        <h1 className="formtitle">Signup</h1>
        <form name="signUpForm" @submit.prevent="handleSignup">
          <div class="form_row">
            <label for="username">Username</label>
            <input type="text" name="username" />
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
export default {
  name: "SignUp",
  data() {
    return {
      submitted: false,
      message: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignup() {
      console.log("Sign Up Pressed");
      this.submitted = true;
      if (this.email != "" && this.password != "") {
        this.message = "I should send data to api";
      } else {
        this.message = "Email and Password required.";
        this.submitted = false;
      }
    },
  },
};
</script>
