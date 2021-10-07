<template>
  <v-container>
          <v-row class="pinks pa-3">
              <v-col cols="12" lg="3" class="logo"></v-col>
              <v-col cols="12" lg="3" class="text-center mt-3 pl-0"><h2>MegaBites & Bake Shop</h2><p class="small border rounded-pill">"your only bake point..."</p></v-col>
              <v-col cols="12" lg="4" class="menu-bar rounded-pill">
                  <v-row class="pa-3">
                      <v-col cols="12" lg="4" class="rounded-pill text-center pinks mt-4">
                          <h3 class="full">Shift 1</h3>
                      </v-col>
                      <v-col cols="12" lg="8" class=" pa-2 text-center mt-3">
                          <p class="small full">Date: {{new Date()}}</p>
                      </v-col>
                  </v-row>
              </v-col>
                      <v-col cols="12" lg="2" class="text-center">
                          <p class="small pa-1">You can signout here anytime</p>
                          <v-btn color="pink" prepend-icon="mdi-logout"><router-link class="small linked" to="/">Signout</router-link></v-btn>
                      </v-col>
          </v-row>
      <v-row class=" pa-3">
          <v-row class="">
              <v-col cols="12" lg="3" class="pinks pa-5 mt-5">
              <v-row class="pa-5">
                  <h2 class="pa-3 border rounded full text-center">Dashboard</h2>
                  <v-row class="menu-bar pa-5 rounded full">
                      <p class="small full pa-1 rounded-pill texture press" v-for="item in dashboard" :key="item.id"><v-icon class="mr-2 ml-5" color="pink">{{item.icon}}</v-icon>{{item.dash}}</p>
                  </v-row>
                  <h2 class="pa-3 mt-5 border rounded full text-center">Profile</h2>
                  <v-row class="menu-bar pa-5 rounded full">
                      <p class="small">Welcome Patricia to Megabirds Records, you are signed in as an Administrator.</p>
                      <v-row class="pa-2 mt-4 menu-bar rounded-pill border">
                          <v-avatar color="pink" right>P</v-avatar>
                        <p class="ml-5 small mt-2">Patricia Maliabu</p>
                      </v-row>
                      <p class="small pa-5 text-center full">Status: <span>Signed In</span></p>
                  </v-row>
              </v-row>
          </v-col>
          <v-col cols="12" lg="9" class="pa-5 menu-bar mt-5 text-center">
              <v-row class="pa-5">
                  <v-img src="src/assets/chicken.png" class="full" height="100" width="100"></v-img>
                  <h2 class="full">Welcome to the Records</h2>
                  <p class="full">Let's get you all caught up with what's going on with the numbers</p>
              <v-row class="pa-5 mt-5">
                  <v-col cols="12" lg="4" class="rounded texture pa-5 full text-center">
                      <h2 class="full">Birds</h2>
                      <p class="small full">Total Number of Birds</p>
                      <v-avatar color="pink" class="mt-3">B</v-avatar>
                      <h1 class="border rounded-pill pa-2 mt-2 full">0</h1>
                  </v-col>
                  <v-col cols="12" lg="4" class="rounded texture pa-5 full text-center">
                      <h2 class="full">Cash Stash</h2>
                      <p class="small full">Total amount of Ugx from the birds</p>
                      <v-avatar color="pink" class="mt-3">C</v-avatar>
                      <h1 class="border rounded-pill pa-2 mt-2 full">0</h1>
                  </v-col>
                  <v-col cols="12" lg="4" class="rounded texture pa-5 full text-center">
                      <h2 class="full">Balance</h2>
                      <p class="small full">Amount remaining</p>
                      <v-avatar color="pink" class="mt-3">R</v-avatar>
                      <h1 class="border rounded-pill pa-2 mt-2 full">0</h1>
                  </v-col>
              </v-row>
              </v-row>
              <v-row class="rounded pa-2 text-center mt-5 pinks">
                  <p class="small full">&copy; copyright {{new Date().getFullYear()}}</p>
              </v-row>
          </v-col>
          </v-row>
      </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Welcome",
    data(){
        return {
            dashboard: [
                {
                    dash: "Home",
                    icon: "mdi-home",
                },
                {
                    dash: "Birds Records",
                    icon: "mdi-book",
                },
                {
                    dash: "Progress",
                    icon: "mdi-graph"
                },
                {
                    dash: "Errors",
                    icon: "mdi-bug"
                },
                {
                    dash: "Reports",
                    icon: "mdi-pen",
                }
            ]
        }
    },
    created() {
        document.title = "MegaBites & Bake Shop/Welcome"
    }
})
</script>

<style lang="css" scoped>
    .logo{
        background-image: url("src/assets/1.png");
        background-size: contain;
        background-position: right;
    }
</style>