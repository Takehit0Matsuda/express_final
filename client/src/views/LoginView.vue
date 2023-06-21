<template>
  <div class="LoginAttempt">
    <div className="outbody">
      <div className="login-container">
        <h1 className="formtitle">Login</h1>
        <form name="LoginForm" @submit.prevent="handleLogin">
          <div class="form_row">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" />
          </div>
          <div class="form_row">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" />
          </div>
          <div class="form_row">
            <button :disabled="submitted"><span>Login</span></button>
          </div>
          <div v-if="message" id="message">{{ message }}</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginAttempt",
  data() {
    return {
      submitted: false,
      message: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      console.log("Login Pressed");
      this.submitted = true;
      if (this.email != "" && this.password != "") {
        console.log("Sending login request");
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password,
          })
          .then(() => {
            this.message = "Logged in";
            // this.$router.push("/reviews");
          })
          .catch((err) => {
            console.log(err);
            this.message = "Invalid Email/Password";
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
