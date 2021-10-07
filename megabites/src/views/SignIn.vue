<template>
  <v-container class="menu-bar center pa-5 mt-5">
    <v-row>
      <v-img src="src/assets/2.png" width="150" height="130" class="full"></v-img>
    </v-row>
    <v-row class=" pinks pa-5 mt-5">
      <v-col cols="12" lg="6" class=" text-center">
        <v-icon dark large>mdi-account</v-icon>
        <h1>Sign In</h1>
        <p class="pa-5 small full text-center">Sign In as either a guest or administrator with your credentials. <span>Sign Up</span> with an administrator if you dont have an account</p>
        <v-row class="pa-5 pinky full border">
            <v-col cols="12" lg="6" md="12">
              <v-form v-model="model">
                <v-text-field
                label="Username"
                :rules="userRules"
                hide-details="auto"
                class=" small"
                v-model="user"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                label="Password"
                :rules="passwordRules"
                v-model="password"
                hide-details="auto"
                class=" small"
                prepend-icon="mdi-key"
              ></v-text-field>
            <v-row>
        <p class="small rounded pa-2 menu-bar half mt-5 text-center press1">
          <v-icon dark large>mdi-checkbox-marked-circle</v-icon> 
          Sign In
        </p></v-row>
              </v-form>
            </v-col>
          <v-col cols="12" lg="6">
            <v-img src="src/assets/chicken.png" contain></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6" class="pa-5 center menu-bar">
        <v-row class="pa-5 center full">
          <v-col cols="12" lg="6" md="6" class="texture rounded-lg press1">
            <router-link to="/" class="linked">
              <v-icon class="full text-center large">mdi-home</v-icon>
            <p class="text-center">Back to Updates</p>
              </router-link>
          </v-col>
          <v-col cols="12" lg="6" md="6" class="texture rounded-lg press1">
            <v-icon class="full text-center large">mdi-account-plus</v-icon>
            <p class="text-center">Sign Up?</p>
          </v-col>
        </v-row>
        <v-row class="pa-5 rounded pinky mt-5 center" aria-disabled="disabled">
          <v-icon class="full">mdi-account-plus</v-icon>
          <h1 class="text-center full">Sign Up</h1>
          <p class="pa-5 small full text-center">Note that all fields are required and mandatory in order to successfully get signed up a new user</p>
          <v-form v-model="valid" class="full border pa-5" :rules="validRules">
            <v-row>
              <v-col cols="12" lg="6" md="12">
                <v-text-field
                  label="Username"
                  :rules="userRules"
                  v-model="user"
                  hide-details="auto"
                  class=" small"
                  prepend-icon="mdi-account-circle"
                ></v-text-field>
                <v-text-field
                  label="create Password"
                  v-model="password"
                  :rules="passwordRules"
                  hide-details="auto"
                  class=" small"
                  prepend-icon="mdi-key"
                ></v-text-field>
                <v-text-field
                  label="Repeat Password"
                  :rules="passwordRules"
                  v-model="password"
                  hide-details="auto"
                  class=" small"
                  prepend-icon="mdi-key"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" md="12">
                <v-text-field
                  label="Email"
                  :rules="emailRules"
                  v-model="email"
                  hide-details="auto"
                  class=" small"
                  required
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                  label="Phone Number"
                  v-model="phone"
                  :rules="phoneRules"
                  hide-details="auto"
                  class=" small"
                  prepend-icon="mdi-phone"
                ></v-text-field>
                <v-select
                  :items="items"
                  label="Guest"
                ></v-select>
              </v-col>
                <p class="small rounded pa-2 menu-bar half mt-5 text-center press1">
                <v-icon dark large>mdi-checkbox-marked-circle</v-icon> 
                  Sign Up
                </p>
            </v-row>
          </v-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "SignIn",
    methods: {
      validateField () {
        this.$refs.form.validate()
      },
    },
    data(){
      return {
        items: ['Administrator'],
      valid: false,
      validRules: [
        v => !!v || 'All fields are required'
      ],
      user: '',
      userRules: [
        v => !!v || 'your username is mandatory',
        v => v.length <= 10 || 'username should be less than 10 characters',
        v => String || 'your username must be characters only'
      ],
      email: "",
      emailRules: [
        v => !!v || 'Required.',
        v => /.+@.+/.test(v) || 'your email must be of a valid format',
      ],
      phone: "",
      phoneRules: [
        v => [0-9] || 'phone numbers must be numbers only',
        v => v.length <= 10 || 'phone numbers must be 10 numbers long'
      ],
      password: "",
      passwordRules: [
        v => [0-9] || 'passwords be 6 characters with atleast a number, uppercase and lowercase'
      ],
      }
    }
  })
  
</script>

<style scoped lang='css'>
.half{
  width: 50%;
  justify-content: center;
}
.press1:hover{
  background-color: #e91e62;
  cursor: pointer;
}
.border-right{
  border-right: 1px solid whitesmoke;
}
.white{
  color: aliceblue;
}
</style>