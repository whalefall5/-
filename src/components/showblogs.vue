<template>
  <div class="showblog">
    <button @click="mange">管理</button>
     <button @click="quit">退出</button>
    <input type="password" ref="pwd">
      <h2>博客总览</h2>
      <el-input
    placeholder="搜索"
    prefix-icon="el-icon-search"
    v-model="search">
  </el-input> 
    <div  class="showblog-item"  v-for="(item,key) in filterBlog" :key="key"  >
        <router-link    :to="{
          name:'blog',
          params:{
            msg:item.title,
            msgs:item.content,
            author:item.author,
            category:item.category,
            
           
          }
        }" ><h2 v-rainbow class="title" >{{item.title}}</h2>
          <article class="content">{{item.content|sinppt}}<button v-if="del">删除</button><el-tag class="el-tag" type="warning">{{item.author}}</el-tag>
<el-tag class="el-tag1" type="danger">{{item.category}}</el-tag></article></router-link>
    </div>
    <span  class="el-icon-arrow-left" ></span><span id="icon" @click="dec()" >上一页</span>
    <span id="icon1"  @click="add">下一页</span><span   class="el-icon-arrow-right"></span>
  </div>
</template>

<script>
import AV from 'leancloud-storage';
AV.init({
    appId: "bIofjaBPaUttY2jKNDDCYubz-gzGzoHsz",
    appKey: "PGgSljYiUW5kogTHWyTvOLSb",
    serverURL: "https://biofjabp.lc-cn-n1-shared.com"
  });
var { Query, User } = AV;


export default {
  name: 'showblogs',
  data () {
    return {
      test:[],
      search:'',
      result:'true',
      count:'5',
      page:'0',
      ids:[],
      check:'980517',
      del:false,
      pwd:'',
      lala:[]
      
    };
  },
  components: {},

  methods: {
   quit(){
     this.del=false
   },
   add(){
       var that = this
       that.test=[];
    var query = new AV.Query('blog');
    that.page=that.page+that.count
    var blogs =new Array
     query.skip(that.page).limit(5).select(['content']);
   query.find().then(function (blog) {
    
     for(var i=0;i<=blog.length;i++){
      that.test.push(blog[i]._serverData.content);
      that.$set(that.test[i],'id',blog[i].id)

     }
    
});
   },
  dec(){
     var that = this
       that.test=[];
    var query = new AV.Query('blog');
    that.page=that.page-that.count
    var blogs =new Array
     query.skip(that.page).limit(5).select(['content']);
   query.find().then(function (blog) {
    
     for(var i=0;i<=blog.length;i++){
      that.test.push(blog[i]._serverData.content);
      that.$set(that.test[i],'id',blog[i].id)
     }
    
});
  },
  mange(){
    console.log(this.$refs.pwd.value)
    if(this.check===this.$refs.pwd.value){
      this.del=true;
      console.log(this.pwd)
    }
  }
  },
  computed: {
      filterBlog:function(){
      return this.test.filter((test) =>{
        return test.title.match(this.search);
        
      })
     
    },
    
  
  },
  created () {
    var query = new AV.Query('blog');
    var that = this
    var blogs =new Array
     query.limit(5).select(['content']);
   query.find().then(function (blog) {
    
     for(var i=0;i<=blog.length;i++){
      that.test.push(blog[i]._serverData.content);
      that.$set(that.test[i],'id',blog[i].id)
     
     console.log(that.test)
     }
     
     
      //  that.test.push(blog[1]._serverData.content)
    //  console.log(blog)
    
});


  }
  
}
</script>
<style  scoped>
*{
    margin: 0;
    padding: 0;
}
.showblog{
    width: 70%;
    height: auto;
    margin: 20px auto;
    text-align: center;
}

h2{
    color:#747d8c;
    margin: 20px auto;
     text-decoration: none;
}
.content{
    max-width: 500px;
    height: 100px;
    text-overflow: ellipsis;
    margin: 20px auto;
    background:#7bed9f;
    padding-bottom: 30px;
    color: #fff;
    margin-top: 20px;
    font-size: 16px;
    overflow: hidden;
    list-style: none;
}  
.showblog-item{
  width: 600px;
  height: auto;
  margin: 30px auto;

  text-align: center;
 
}
article{
  padding: 20px 20px 20px 20px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
}
#icon{
  margin-right: 300px;
  cursor: pointer;
}
#icon1{
  margin-left: 300px;
  cursor: pointer;
}
#icon:hover{
  color: skyblue;
}
#icon1:hover{
  color: skyblue;
}
  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
.el-tag{
position: absolute;
bottom: 10px;
}
.el-tag1{
position: absolute;
bottom: 10px;
margin-left: 60px;
}
</style>