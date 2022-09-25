<template>
  <div class="outer">
    <!-- 头部 -->
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>

            <p v-if="!u">
              <span>请</span>
              <router-link to="/login">登录</router-link>
              <router-link to="register" class="register">免费注册</router-link>
            </p>
            <p v-else>
              <a>{{u}}</a>
              <a class="register" @click="logo">退出登录</a>
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <a class="logo" title="尚品汇" href="###" target="_blank">
            <img src="./images/logo.png" alt="">
          </a>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keywords"/>
            <button class="sui-btn btn-xlarge btn-danger" type="button" @click="gosearch" >搜索</button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //响应式数据，用于收集表单元素文本内容
      keywords: "",
      username:"",
    };
  },
  created() {
console.log("头部页面刷新")
  },
  mounted() {

    this.$bus.$on("keyword",()=>{
      // console.log("调用了")
       this.keywords=""
      let qu=this.$route.query
      let searchParams={keyword:"",...qu}
      searchParams.keyword=this.keywords
      this.$router.push({name:"search",query:searchParams})
    })


  },
  methods: {

    //搜索按钮的事件处理函数，用于跳转到search路由组件当中
    gosearch() {
      //代表的是如果有query参数也带过去
      let qu=this.$route.query
      let searchParams={keyword:"",...qu}
     searchParams.keyword=this.keywords
      console.log(qu)
   this.$router.push({name:"search",query:searchParams})

    },
    //退出登录
    async logo(){
      //退出登录需要做的事情
      //1:需要发请求，通知服务器退出登录【清除一些数据：token】
      //2:清除项目当中的数据【userInfo、token】

      try {

        sessionStorage.clear()
        await  this.$store.dispatch("tuichu")
    await    this.$router.push("/login")
      }catch (e){
        alert("e")
      }

    }
  },
  watch:{
    $route:{
      handler(){
       this.$store.dispatch("getUserMessage")
      }
    }

  },

  computed:{
    //用户名信息
     u(){

       return this.$store.state.login.name
     }
  }
};
</script>

<style scoped lang="css">
.outer .header > .top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.outer .header > .top .container {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.outer .header > .top .container .loginList {
  float: left;
}
.outer .header > .top .container .loginList p {
  float: left;
  margin-right: 10px;
}
.outer .header > .top .container .loginList p .register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
.outer .header > .top .container .typeList {
  float: right;
}
.outer .header > .top .container .typeList a {
  padding: 0 10px;
}
.outer .header > .top .container .typeList a + a {
  border-left: 1px solid #b3aeae;
}
.outer .header > .bottom {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.outer .header > .bottom .logoArea {
  float: left;
}
.outer .header > .bottom .logoArea .logo img {
  width: 175px;
  margin: 25px 45px;
}
.outer .header > .bottom .searchArea {
  float: right;
  margin-top: 35px;
}
.outer .header > .bottom .searchArea .searchForm {
  overflow: hidden;
}
.outer .header > .bottom .searchArea .searchForm input {
  box-sizing: border-box;
  width: 490px;
  height: 32px;
  padding: 0px 4px;
  border: 2px solid #ea4a36;
  float: left;
}
.outer .header > .bottom .searchArea .searchForm input:focus {
  outline: none;
}
.outer .header > .bottom .searchArea .searchForm button {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  border: none;
  color: #fff;
  float: left;
  cursor: pointer;
}
.outer .header > .bottom .searchArea .searchForm button:focus {
  outline: none;
}
.outer .type-nav {
  border-bottom: 2px solid #e1251b;
}
.outer .type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.outer .type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.outer .type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}

</style>
