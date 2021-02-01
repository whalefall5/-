<template>
  <div class="imgbox">
      <h1>Welcome</h1>
      <img src="./../assets/img/lalal.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'home',
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
.imgbox{
    margin: 100px auto;
    text-align: center;
}
.imgbox img{
    width: 300px;
    height: 300px;
    animation: move 60s infinite linear;
}
@keyframes move{
			0%{transform: rotate(0deg);}
			25%{transform: rotate(90deg);}
			50%{transform: rotate(180deg);}
			75%{transform: rotate(270deg);}
			100%{transform: rotate(360deg);}
            }
    h1{
        font-size: 150px;
        color: #57606f;
        font-weight: 500;
    }
</style>