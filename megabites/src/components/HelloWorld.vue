<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="7">
      <v-row class="text-center mt-2 pinks pa-3">
      <v-col cols="12" lg="2" md="2" v-for="item in menu" :key="item.id" class="menu-bar mr-1 press">
        <v-icon dark small class="full">{{item.icon}}</v-icon>
        <router-link :to="item.id" class="linked small"> {{item.message}} </router-link>
      </v-col>
      <v-col cols="12" lg="6" md="6">
        <p class="small linked">Please sign in to access any features of this page. If you dont have an account then please get <u class="press">signed up</u> by an administrator.</p>
      </v-col>
      <v-row class=" mt-2 pa-5 text-center pattern">
        <v-row class="pa-5">
          <v-col cols="12" lg="12">
            <h1>Daily Updates</h1>
          </v-col>
        </v-row> <br>
        <v-row class="pa-5 center full">
          <v-col cols="12" lg="4" md="4" class=" pa-5 small circle" v-for="data in poultry" :key="data.id">
            <v-row class="pa-5 text-center"> {{data.id}} </v-row> <v-divider class="divide"></v-divider>
            <v-row class="pa-5"> <h3 class="text-center full">{{data.amount}}</h3> </v-row>
          </v-col>
        </v-row>
      <v-row class="pa-5 pinky rounded mt-3">
        <h3 class=" full text-center">Progress </h3>
        <v-progress-linear stream color="white" buffer-value="0" reverse class="ml-5 mt-2 full"></v-progress-linear>
        <p class="full small pa-2">Note: Sign in to check on your progress.</p>
      </v-row>
      <v-row class="pa-5 text-center full mt-5">
        <h3>News and Tips </h3>
        <v-col cols="12" lg="12" class="pa-5 full the-pink">
          <p class="full small text-center pa-5">Are you Signed In? News and Tips is enabled for those with accounts</p>
        </v-col>
      </v-row>
      <p class="small mt-5 full">For more information and inquiries, please contact the administartion at <span class="final">MegaBites</span> here below and get immediate assistance. This is the Megabirds Records and Database.</p>
      <p class="full text-center mt-3 rounded pinks pa-2 press">Help Line</p>
      <p class="pa-5">Social Media Accounts 
      </p>
        <v-row class=" pa-5">
          <v-col cols="12" lg="1" md="2" class="ml-1 text-center" v-for="icons in social" :key="icons.icon"> <a :href="icons.link" class="icon"
          ><v-icon small>{{icons.icon}}</v-icon></a> </v-col>
        </v-row>
      </v-row>
    </v-row>
    </v-col>
    <v-col cols=12 lg="6" md="5" class=" pa-5">
      <v-row class=" pa-5 text-center">
        <v-img src="src/assets/2.png" class="full" width="250" height="230"></v-img>
        <h2 class="linked heading pa-5 rounded menu-bar full mt-5">Mega<span class="final">Bites</span> & Bake Shop</h2>
        <v-row class="pinks pa-5">
          <h3 class="full">MegaBirds Records Keeping</h3>
          <p class="small">Welcome to the Control Panel. <br> This panel is for Administrators only and other authorised personnel. Donot try to access any features without permission as this could lead to disabling of the account.</p>
        </v-row>
        <p class="pa-5 linked full menu-bar"> &copy;Copyright - {{new Date().getFullYear()}} <span ></span></p>
        <v-img src="src/assets/chicken.png" class="full"></v-img>
      </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  data () {
    return {
      social: [
        {
          icon: "mdi-facebook",
          link: "https://facebook.com/@patriciagift",
        },
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/@patriciagift",
        },
        {
          icon: "mdi-whatsapp",
          link: "tel:+256772971878",
        },
        {
          icon: "mdi-google",
          link: "mailto:giramiapatricia61@gmail.com",
        },
      ],
      menu: [
        {
          id: "/signin",
          message: "Sign In",
          icon: "mdi-account-circle"
        },
        {
          id: "/welcome",
          message: "Sign Up",
          icon: "mdi-account-plus"
        }
      ],
      poultry: [
        {
          id: "Total number of birds in store",
          amount: "0"
        },
        {
          id: "Total amount from sales",
          amount: "0"
        },
        {
          id: "Total balance from Sales",
          amount: "0"
        }
      ]
    }
  },
  created() {
    document.title = "MegaBites & Bake Shop"
  }
})
</script>
<style lang="css" scoped>
.heading{
  font-size: 40px;
  font-weight: lighter;
}
.pin{
  background-color: rgb(255, 0, 0);
  border-radius: 50%;
  width: 25%;
  height: 30%;
  color: rgba(255, 0, 0, 0);
}
.icon{
  color: white;
  text-decoration: none;
}
.icon:hover{
  color: #e91e629a;
}
.change{
  width: 30%;
  height: 20%;
}
.chicken{
  background-image: url("src/assets/chicken.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}
.logo{
  background-image: url("src/assets/1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}
.pinkish{
  color: aliceblue;
  width: 100%;
}
.half{
  border-radius: 50%;
}
.circle{
  border-radius: 15%;
  border: 3px solid white !important;
}
.pattern{
  background-color: rgb(27, 27, 27);
  color: white;
}
.nice{
  background-image: url("src/assets/1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.final{
  color: #e91e63;
}
</style>