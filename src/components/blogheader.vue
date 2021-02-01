<template>
  <div>
      <el-menu  class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><router-link to="/showblog">博客</router-link></el-menu-item>
         <el-menu-item index="1"><router-link to="/add">写博客</router-link></el-menu-item>
       </el-menu>
  </div>
</template>

<script>
export default {
  name: 'blogheader',
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style  scoped>
</style>