<template>
  <v-container>
          <v-row class="abit pa-3">
              <v-col cols="12" lg="3" class="logo"></v-col>
              <v-col cols="12" lg="3" class="text-center rounded">
                  <v-row>
                      <v-col cols="12" lg="5"><v-icon class="large-icon rounded-circle pinks">mdi-clock</v-icon></v-col>
                      <v-col cols="12" lg="7">
                          <p class="rounded menu-bar pa-1">TIME PERIOD</p>
                          <p class="full small text-left mt-2">Target Time: <span class="rounded pa-1 text-right finally full">unset</span></p>
                          <p class="full small text-left">Time Elapsed: <span class="rounded pa-1 text-right finally full">unknown</span></p>
                          <p class="full small text-left">Time Left: <span class="rounded pa-1 text-right finally ">unknown</span></p>
                      </v-col>
                  </v-row>
              </v-col>
              <v-col cols="12" lg="4" class="menu-bar rounded">
                  <v-row class="pa-3">
                      <v-col cols="12" lg="5" class="rounded text-center abit mt-4">
                          <h3 class="full">Shift 1 <p><v-btn color="pink" prepend-icon="mdi-clock"><router-link class="small linked" to="/">start</router-link></v-btn></p></h3>
                      </v-col>
                      <v-col cols="12" lg="7">
                          <p class="small full pb-2 text-center"><span class="final">Date:</span> {{new Date()}}</p>
                          <v-btn color="#303030" prepend-icon="mdi-clock"><router-link class="small linked" to="/">stop</router-link></v-btn>
                      </v-col>
                  </v-row>
              </v-col>
                      <v-col cols="12" lg="2" class="text-center">
                          <v-btn color="pink" prepend-icon="mdi-logout"><router-link class="small linked" to="/">Signout</router-link></v-btn>
                          <p class="text-center small mt-2">Need Help? see Guide</p>
                          <v-btn color="pink" prepend-icon="mdi-tools" class="mt-2"><router-link class="small linked" to="/">Guide</router-link></v-btn>
                      </v-col>
          </v-row>
      <v-row class=" pa-3">
          <v-row class="abit">
                        <v-col cols="12" lg="3" class="pinks pa-5 mt-5 fixed">
                        <v-row class="pa-5">
                        <v-row class="pa-5 rounded full menu-bar">
                            <h2 class="pa-3 full text-center">Dashboard</h2>
                            
                                <p class="small full pa-3 rounded texture press1" id="change" @click="changeColor()" v-for="item in dashboard" :key="item.id"><v-icon class="mr-2 ml-5" color="pink">{{item.icon}}</v-icon>{{item.dash}}</p>
                            
                        </v-row>
                  <v-row class="abit mt-5 pa-5 rounded full">
                  <h2 class="pa-3 mt-5 full text-center">Profile</h2>
                      <p class="small">Welcome Patricia to Megabirds Records, you are signed in as an Administrator.</p>
                      <v-row class="pa-2 mt-4 menu-bar rounded">
                          <v-avatar color="pink" right>P</v-avatar>
                        <p class="ml-5 small mt-2">Patricia Maliabu</p>
                      </v-row>
                      <p class="small pa-5 text-center full">Status: <span>Signed In</span></p>
                  </v-row>
              </v-row>
          </v-col>
          <v-col cols="12" lg="9" class="py-5 menu-bar mt-5 text-center">
            <v-row class="pa-5">
                  <v-img src="src/assets/chicken.png" class="full" height="100" width="100"></v-img>
                  <h2 class="full">Welcome to the Records</h2>
                  <p class="full">Let's get you all caught up with what's going on with the numbers</p>
                <v-row class="pa-5 mt-5">
                  <v-col cols="12" lg="4" class="rounded texture pa-5 full text-center">
                      <h2 class="full">Birds</h2>
                      <p class="small full">Total Number of Birds</p>
                      <v-avatar color="pink" class="mt-3">B</v-avatar>
                      <h1 class="border rounded pa-2 mt-2 full">0</h1>
                  </v-col>
                  <v-col cols="12" lg="4" class="rounded texture pa-5 full text-center">
                      <h2 class="full">Cash Stash</h2>
                      <p class="small full">Total amount of Ugx from the birds</p>
                      <v-avatar color="pink" class="mt-3">C</v-avatar>
                      <h1 class="border rounded pa-2 mt-2 full">0</h1>
                  </v-col>
                  <v-col cols="12" lg="4" class="rounded texture pa-5 full text-center">
                      <h2 class="full">Balance</h2>
                      <p class="small full">Amount remaining</p>
                      <v-avatar color="pink" class="mt-3">R</v-avatar>
                      <h1 class="border rounded pa-2 mt-2 full">0</h1>
                  </v-col>
                </v-row>
              </v-row>
              <v-row class="pinks pa-5 justify-content-center">
                  <v-icon class="large-icon text-center mt-5 full">mdi-book</v-icon>
                  <h2 class="full">Birds Records</h2>
                  <p class="full">Expenses</p>
                  <p class="small full">Keep Track of all your expenses to know your progress</p>
                  <v-row class="pa-5 mt-5 abit">
                      <v-col cols="12" lg="3" v-for="i in items" :key="i.head" class=" full mb-0"> <p class="rounded menu-bar pa-2">{{i.head}}</p> </v-col>
                      <v-col cols="12" lg="3"><v-avatar class="pinks press">+</v-avatar><p class="small">Add an expense</p></v-col>
                  <v-row class="full">
                          <p class="px-2 pinks rounded">
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
                          </p>
                  </v-row>
                  </v-row>
              </v-row>
          </v-col>
          </v-row>
      </v-row>
      <v-row class=" pa-1">
           <v-col cols="12" lg="1" md="2" class="ml-1 text-center" v-for="icons in social" :key="icons.icon"> <a :href="icons.link" class="icon"
           ><v-icon>{{icons.icon}}</v-icon></a> </v-col> 
        </v-row>
              <v-row class=" pa-4 text-center mt-2 pinks">
                  <p class="small full">&copy; copyright MegaBites&BakeShop {{new Date().getFullYear()}}</p>
              </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import reports from "../components/reports.vue"

export default defineComponent({
    name: "Welcome",
    props: {
        reports
    },
    data(){
        return {
        rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
            model: 'tabs',
            dialog: false,
            social: true,
            next: [
                {placeholder: "Name"},{placeholder: "amount"},{placeholder: "quantity"}
            ],
            items: [
                {head: "Name of item"},{head: "Total Amount"},{head: "Number of Items"}
            ],
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
                    icon: "mdi-bug",
                },
                {
                    dash: "Reports",
                    icon: "mdi-pen",
                }
            ],
        }
    },
    created() {
        document.title = "MegaBites & Bake Shop/Welcome"
    },
    methods: {
        changeColor(){
            document.getElementById('change').style.backgroundColor = '#e91e629a'
        }
    }
})
</script>

<style lang="css" scoped>
    .logo{
        background-image: url("src/assets/1.png");
        background-size: 90%;
        background-position: center;
    }
    .fixed{
        z-index: 1;
    }
    .finally{
        color: #272627;
    }
</style>