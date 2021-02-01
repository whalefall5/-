<template>
  <div class="container">
      <h2 v-rainbow>{{title}}</h2>
      <article>{{content}}<br><el-tag class="el-tag" type="warning">{{author}}</el-tag>
<el-tag class="el-tag1" type="danger">{{category}}</el-tag></article>
     
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
     title:'',
     content:'',
     author:'',
     category:''
    };
  },
 
  components: {},
  mounted:function ()  {
      this.title=this.$route.params.msg
      this.content=this.$route.params.msgs
      this.author=this.$route.params.author
      this.category=this.$route.params.category
      console.log(this.$route.params.test)
  },
  methods: {}
}
</script>

<style  scoped>
.container{
  margin: 30px auto;
  width: 60%;
  height: auto;
  text-align: center;
}
article{
  height: auto;
  max-height: auto;
  padding: 20px 20px 20px 20px;
  max-width: 500px;
  background:#7bed9f ;
  color: #fff;
  text-align: left;
  margin: 10px auto;

}
.el-tag{


margin-top: 20px;
margin-left: 350px;

}
.el-tag1{

bottom: 10px;
right: 20px;
margin-left: 5px;
}
</style>