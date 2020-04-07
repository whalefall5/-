<template>
  <div id="app">

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

</style>
