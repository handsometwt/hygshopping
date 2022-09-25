<template>
<div class="outer">
<typenav></typenav>
  <div class="bread">
    <ul class="fl sui-breadcrumb">
      <li>
        <a href="#">全部结果</a>
      </li>
    </ul>
    <ul class="fl sui-tag">
      <li class="with-x" v-show="$route.query.categoryName">{{$route.query.categoryName}}</li>
      <li class="with-x"v-show="$route.query.keyword">{{ $route.query.keyword }}<i @click="deleteKeywords">×</i></li>
      <li class="with-x"v-show="params.trademark">{{params.trademark.split(":")[1]}}<i @click="deleteBrand">×</i></li>
    </ul>
  </div>
  <SearchSelecter :searchData="goodList.data.attrsList" :trademarkList="goodList.data.trademarkList" @brand="father"></SearchSelecter>
  <div class="details clearfix">
    <div class="sui-navbar">
      <div class="navbar-inner filter">
        <ul class="sui-nav">
          <li class="active">
            <a  :class="{orderActive:params.order.includes('1')}" @click="zonhhe(1)">综合 <span :class="{activer:params.order.includes('asc')&&params.order.includes('1')}" @click="zasc('asc')">⬆</span> <span :class="{activer:params.order.includes('desc')&&params.order.includes('1')}" @click="zdesc('desc')">⬇</span></a>
          </li>

          <li>
            <a @click="price(2)" :class="{orderActive:params.order.includes('2')}">价格<span :class="{activer:params.order.includes('2')&&params.order.includes('asc')}" @click="zasc('asc')">⬆</span> <span :class="{activer:params.order.includes('2')&&params.order.includes('desc')}" @click="zdesc('desc')">⬇</span></a>
          </li>

        </ul>
      </div>
    </div>
    <div class="goods-list">
      <ul class="yui3-g">
        <li class="yui3-u-1-5" v-for="i in goodList.data.goodsList" :key="i.id">
          <div class="list-wrap">
            <div class="p-img">
              <router-link  :to="{name:'detail',query:{gid:i.id}}" ><img :src="i.defaultImg" /></router-link>
            </div>
            <div class="price">
              <strong>
                <em>¥</em>
                <i>{{i.price}}</i>
              </strong>
            </div>
            <div class="attr">
              <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" v-html="i.title"></a>
            </div>
            <div class="commit">
              <i class="command">已有<span>2000</span>人评价</i>
            </div>
            <div class="operate">
              <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
              <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
            </div>
          </div>
        </li>

      </ul>
    </div>
    <pagination></pagination>
  </div>
</div>
</template>

<script>
import SearchSelecter from "@/views/search/SearchSelecter/SearchSelecter";
import pagination from "@/components/page/pagination"
import search from "@/store/home/search";
export default {
  name: "search",
  components:{SearchSelecter,pagination},
  data(){

    return{
      params:{
        category1Id:"",
        category2Id:"",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:asc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: ""
      }
    }
  },
  methods:{
    getList(){
      this.params.category1Id=this.$route.query.category1Id
      this.params.category2Id=this.$route.query.category2Id
      this.params.category3Id=this.$route.query.category3Id
      this.params.categoryName=this.$route.query.categoryName
      this.params.keyword=this.$route.query.keyword
      this.$store.dispatch("GetList",this.params)
      //console.log(this.params)


    },
    deleteKeywords(){
    this.$bus.$emit("keyword")
      this.getList()
    },
    father(value){
      //console.log(value.tmId+":"+value.tmName)
      this.params.trademark=value.tmId+":"+value.tmName
      this.getList()
    },
    deleteBrand(){
      this.params.trademark="";
      this.getList()
    },
    zonhhe(value){

     let second=this.params.order.split(":")[1]
      this.params.order=1+':'+second
      this.getList()

    },
    price(value){
      let second=this.params.order.split(":")[1]
      this.params.order=value+':'+second
      this.getList()
    },
    zasc(value){
      let first=this.params.order.split(":")[0]
      this.params.order=first+':'+value

    },
    zdesc(value){
      let first=this.params.order.split(":")[0]
      this.params.order=first+':'+value
    }

  },
computed:{
  goodList(){
    return this.$store.state.s.totalList
  }
},
mounted() {
  this.$store.dispatch("GetCategoryList")
 this.getList()




},
  watch:{
    $route:{
      handler(n,o){
       console.log("路有变化了")
        this.getList()

      }
    }
  }


}
</script>

<style scoped>
.orderActive{
  background-color: red;
}
.activer{

  color: gold;
}
.sui-nav span{
  font-size: 20px;
}
.outer{
  width: 1200px;
  margin: 0 auto;
}
.bread {
  width: 1200px;
  margin-bottom: 5px;
  overflow: hidden;
}
.bread .sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
  font-weight: 400;
  border-radius: 3px;
  float: left;
}
 .bread .sui-breadcrumb li {
  display: inline-block;
  line-height: 18px;
}
.bread .sui-breadcrumb li a {
  color: #666;
  text-decoration: none;
}
 .bread .sui-breadcrumb li a:hover {
  color: #4cb9fc;
}
.bread .sui-tag {
  margin-top: -5px;
  list-style: none;
  font-size: 0;
  line-height: 0;
  padding: 5px 0 0;
  margin-bottom: 18px;
  float: left;
}
.bread .sui-tag .with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  overflow: hidden;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.bread .sui-tag .with-x i {
  margin-left: 10px;
  cursor: pointer;
  font: 400 14px tahoma;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.bread .sui-tag .with-x:hover {
  color: #28a3ef;
}
.details {
  margin-bottom: 5px;
}
.details .sui-navbar {
  overflow: visible;
  margin-bottom: 0;
}
.details .sui-navbar .filter {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  padding-left: 0;
  border-radius: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.details .sui-navbar .filter .sui-nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}
.details .sui-navbar .filter .sui-nav li {
  float: left;
  line-height: 18px;
}
.details .sui-navbar .filter .sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px;
  color: #777;
  text-decoration: none;
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav li.active a {
  background: #e1251b;
  color: #fff;
}
.details .goods-list {
  margin: 20px 0;
}
.details .goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.details .goods-list ul li {
  height: 100%;
  width: 20%;
  margin-top: 10px;
  line-height: 28px;
}
.details .goods-list ul li .list-wrap .p-img {
  padding-left: 15px;
  width: 215px;
  height: 255px;
}
.details .goods-list ul li .list-wrap .p-img a {
  color: #666;
}
.details .goods-list ul li .list-wrap .p-img a img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.details .goods-list ul li .list-wrap .price {
  padding-left: 15px;
  font-size: 18px;
  color: #c81623;
}
.details .goods-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.details .goods-list ul li .list-wrap .price strong i {

}
.details .goods-list ul li .list-wrap .attr {
  padding-left: 15px;
  width: 85%;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.details .goods-list ul li .list-wrap .attr a {
  color: #333;
  text-decoration: none;
}
.details .goods-list ul li .list-wrap .commit {
  padding-left: 15px;
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
.details .goods-list ul li .list-wrap .commit span {
  font-weight: 700;
  color: #646fb0;
}
.details .goods-list ul li .list-wrap .operate {
  padding: 12px 15px;
}
.details .goods-list ul li .list-wrap .operate .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
}
.details .goods-list ul li .list-wrap .operate .btn-bordered {
  min-width: 85px;
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
}
.details .goods-list ul li .list-wrap .operate .btn-bordered:hover {
  border: 1px solid #666;
  color: #fff !important;
  background-color: #666;
  text-decoration: none;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .operate .btn-danger {
  border: 1px solid #e1251b;
  color: #e1251b;
}
 .details .goods-list ul li .list-wrap .operate .btn-danger:hover {
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: white!important;
  text-decoration: none;
}
.details .page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
}
.details .page .sui-pagination {
  margin: 18px 0;
}
.page .sui-pagination ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 490px;
  float: left;
}
.details .page .sui-pagination ul li {
  line-height: 18px;
  display: inline-block;
}
.details .page .sui-pagination ul li a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
.details .page .sui-pagination ul li.active a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
.details .page .sui-pagination ul li.prev a {
  background-color: #fafafa;
}
.details .page .sui-pagination ul li.disabled a {
  color: #999;
  cursor: default;
}
.details .page .sui-pagination ul li.dotted span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
.details .page .sui-pagination ul li.next a {
  background-color: #fafafa;
}
.page .sui-pagination div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 241px;
}

</style>
