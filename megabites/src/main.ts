import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

  //Line below returns error on console: 'cannot set properties of undefined so refer to where the anonymous
  // component appears then define as element in the methods.
//App.config.compilerOptions.isCustomElement = (tag: string) => tag.startsWith('form')

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')

  console.log(App.config)