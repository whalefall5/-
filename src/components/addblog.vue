<template>
  <div class="add-blog">
    <h2 class="title">添加博客</h2>
    <form action="post" v-if="issubmit">
      <input  class="blogtitle" v-model="blog.title" placeholder="请输入标题"><br>
      <mavon-editor class="blogcontent" type="textarea" :rows="5" v-model="blog.content"  placeholder="请输入内容"></mavon-editor><br>
        <label for="" class="category">分类：</label>
        <el-radio class="category-item" v-model="blog.category" label="vue.js">vue.js</el-radio>
        <el-radio class="category-item" v-model="blog.category" label="js">js</el-radio>
        <el-radio class="category-item" v-model="blog.category" label="react.js">react.js</el-radio>
        <el-radio class="category-item" v-model="blog.category" label="Peacelove">Peacelove</el-radio>
        <el-radio class="category-item" v-model="blog.category" label="tourist">tourist</el-radio><br>
        <el-select class="author" v-model="blog.author" placeholder="请选择作者">
    <el-option
      v-for="item in authors"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <input @click="test" type="file" id="avatar-upload" />
   <input type="text" v-model="blog.year" placeholder="年">
   <input type="text" v-model="blog.month" placeholder="月">
   <input type="text" v-model="blog.day" placeholder="日">
    </form>
    <el-button @click.prevent="post" v-if="issubmit" class="btn" type="primary" plain @click="addblog">添加博客</el-button>
 
    <div id="show">
      <h2 class="show-title">博客标题：{{blog.title}}</h2>
      <p class="show-content">博客内容：{{blog.content}}</p>
      <p class="show-category">分类：{{blog.category}}</p>
      <p class="show-author">作者：{{blog.author}}</p>

    </div>
    <h1>{{blog.url}}</h1>
  </div>
</template>

<script>
import "./../assets/css/addblog.css"
import AV from 'leancloud-storage';
import {mavonEditor} from 'mavon-editor'


var { Query, User } = AV;



AV.init({
    appId: "bIofjaBPaUttY2jKNDDCYubz-gzGzoHsz",
    appKey: "PGgSljYiUW5kogTHWyTvOLSb",
    serverURL: "https://biofjabp.lc-cn-n1-shared.com"
  });

export default {
  name: 'addblog',
  data () {
    return {
      blog:{
        title:'',
        content:'', 
        author:'',
        category:'',
        url:'',
        like:0,
        year:'',
        month:'',
        day:''


      },
      toolbars: {
              bold: true, // 粗体
              italic: true, // 斜体
              header: true, // 标题
              underline: true, // 下划线
              mark: true, // 标记
              superscript: true, // 上角标
              quote: true, // 引用
              ol: true, // 有序列表
              link: true, // 链接
              imagelink: true, // 图片链接
              help: true, // 帮助
              code: true, // code
              subfield: true, // 是否需要分栏
              fullscreen: true, // 全屏编辑
              readmodel: true, // 沉浸式阅读
              /* 1.3.5 */
              undo: true, // 上一步
              trash: true, // 清空
              save: true, // 保存（触发events中的save事件）
              /* 1.4.2 */
              navigation: true // 导航目录
            },
      issubmit:true,
     
     authors: [{
          value: 'Whalefall',
          label: 'Whalefall'
        }, {
          value: 'Tiefsee',
          label: 'Tiefsee'
        }, {
          value: 'jack',
          label: 'jack'
        }, {
          value: 'lily',
          label: 'lily'
        }, {
          value: 'tourist',
          label: 'tourist'
        }],
        author:"",
      category:""
    };
  },
  components: {},
  mounted () {},
  methods: {
    test(){
   
    },
    addblog(){
      
      this.issubmit=false;
      alert("添加成功")
    },
    post(){
      



 const avatarUpload = document.getElementById('avatar-upload');
    if (avatarUpload.files.length) {
     const localFile = avatarUpload.files[0];
      const file = new AV.File(this.blog.title+'.jpg', localFile);
      file.save().then((file) => {
  console.log(`文件保存完成。objectId：${file.id}`);
  const query = new AV.Query('_File');
query.get(`${file.id}`).then((todo) => {
  this.blog.url =todo._serverData.url
  console.log(this.blog.url)
  const todos = new blog();
todos.set('content', this.blog);
 todos.save().then((todo) => {
 
  console.log(`保存成功。objectId：${todo}`);
}, (error) => {
  
});
});
const blog = AV.Object.extend('blog');



// 构建对象

}, (error) => {
  console.log('error')
});

}
const blog = AV.Object.extend('blog');
 const blogss= new blog()

const comment = new AV.Object('Comment');
comment.set('content', '当然是必胜客啦！lalall');
comment.set('name', 'zaizai');


const post = AV.Object.createWithoutData('blogss', '5ebabd6bc9dd6e0008da42af');
comment.set('post', post);
comment.save()

    }
  }
}
</script>

<style  scoped>
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>