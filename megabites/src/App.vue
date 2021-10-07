<template>
  <v-app class="app" >
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
  methods: {
    
  }
})
</script>
<style>
.app{
  background-image: url("src/assets/wood.jpg");
  background-size: cover;
  background-attachment: fixed;
  overflow-x: hidden;
}
.texture{
  background-color: #303030;
  border: 2px solid #212121;
}
.pinky{
  background-color: #e91e63;
  color: aliceblue;
  justify-content: center;
}
.press:hover{
  background-color: #e91e62a2;
  cursor: pointer;
}
.the-pink{
  color: #ffffff;
  border: 1px solid white;
}
.small{
  font-size: small;
}
.full{
  width: 100%;
}
.divide{
  background-color: white;
}
.linked
{
  color: white !important;
  text-decoration: none;
}
.menu-bar
  {
    background-color: #212121;
    color: azure;
  }
    .border{
        border-color: aliceblue !important;
    }
.pinks{
  background-color: #e91e63;
  color: white;
}
</style>