<template>
  <div id="app">
<<<<<<< HEAD

    <blogheader></blogheader>
    
     <router-view></router-view>
  </div>
</template>
<script>
import addblog from './components/addblog.vue'
import showblog from './components/showblogs.vue'
import blogheader from './components/blogheader.vue'
import home from './components/home.vue'
export default {
  name: 'App',
  data () {
    return {
      
    };
  },
  components: {
   addblog,
   showblog,
   blogheader,
   home
  },
  mounted () {},
  methods: {}
}
</script>
<style>

=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
>>>>>>> 88e11add22a0a7ca5cd86d4a14f6381e13ba5b98
</style>
