<template>
  <div class="outer"><div class="type-nav">
    <div class="container" @mouseenter="enter" @mouseleave="leave">
      <h2 class="all" >全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="spot">
      <div class="sort" v-show="show">
        <div class="all-sort-list2" >
          <div class="item" v-for="c in CategoryList " :key="c.categoryId">
            <h3>
              <router-link :to="{name:'search',query:{category1Id:c.categoryId,categoryName:c.categoryName}}">{{c.categoryName}}</router-link>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem" v-for="c1 in c.categoryChild" :key="c1.categoryId">
                <dl class="fore">
                  <dt>
                    <router-link :to="{name:'search',query:{category2Id:c1.categoryId,categoryName:c1.categoryName}}">{{c1.categoryName}}</router-link>
                  </dt>
                  <dd>
                    <em v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <router-link :to="{name:'search',query:{category3Id:c2.categoryId,categoryName:c2.categoryName}}">{{c2.categoryName}}</router-link>
                    </em>

                  </dd>
                </dl>
              </div>
            </div>
          </div>

        </div>
      </div>
      </transition>

    </div>
  </div></div>

</template>

<script>
export default {
  name: "typenav",
  data(){
return{
  show:false

}
  },

  mounted() {
this.innit();
console.log(this.CategoryList)

  },
  computed:{
    CategoryList(){
      return this.$store.state.home.CategoryList
    }
  },
  methods:{
    innit(){
      if (this.$route.path==="/"){
        console.log(this.$route.path)
         this.show=true
      }
    },
    enter(){
      if (this.$route.path==="/search"){

        this.show=true
      }
    },
    leave(){
      if (this.$route.path==="/search"){

        this.show=false
      }
    }
  }
}
</script>

<style scoped>
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
.outer .type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}
.outer .type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.outer .type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.outer .type-nav .container .sort .all-sort-list2 .item:hover .item-list {
  display: block;
}
.outer .list-container {
  width: 1200px;
  margin: 0 auto;
}
.outer .list-container .sortList {
  height: 464px;
  padding-left: 210px;
}
.outer .list-container .sortList .center {
  box-sizing: border-box;
  width: 740px;
  height: 100%;
  padding: 5px;
  float: left;
}
.outer .list-container .sortList .right {
  float: left;
  width: 250px;
}
.outer .list-container .sortList .right .news {
  border: 1px solid #e4e4e4;
  margin-top: 5px;
}
.outer .list-container .sortList .right .news h4 {
  border-bottom: 1px solid #e4e4e4;
  padding: 5px 10px;
  margin: 5px 5px 0;
  line-height: 22px;
  overflow: hidden;
  font-size: 14px;
}
.outer .list-container .sortList .right .news h4 .fl {
  float: left;
}
.outer .list-container .sortList .right .news h4 .fr {
  float: right;
  font-size: 12px;
  font-weight: 400;
}
.outer .list-container .sortList .right .news .news-list {
  padding: 5px 15px;
  line-height: 26px;
}
.outer .list-container .sortList .right .news .news-list .bold {
  font-weight: 700;
}
.outer .list-container .sortList .right .lifeservices {
  border-right: 1px solid #e4e4e4;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.outer .list-container .sortList .right .lifeservices .life-item {
  border-left: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  margin-right: -1px;
  height: 64px;
  text-align: center;
  position: relative;
  cursor: pointer;
  width: 25%;
}
.outer .list-container .sortList .right .lifeservices .life-item .list-item {

  width: 61px;
  height: 40px;
  display: block;
}
.outer .list-container .sortList .right .lifeservices .life-item .service-intro {
  line-height: 22px;
  width: 60px;
  display: block;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(1) .list-item {
  background-position: 0px -5px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(2) .list-item {
  background-position: -62px -5px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(3) .list-item {
  background-position: -126px -5px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(4) .list-item {
  background-position: -190px -5px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(5) .list-item {
  background-position: 0px -76px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(6) .list-item {
  background-position: -62px -76px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(7) .list-item {
  background-position: -126px -76px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(8) .list-item {
  background-position: -190px -76px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(9) .list-item {
  background-position: 0px -146px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(10) .list-item {
  background-position: -62px -146px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(11) .list-item {
  background-position: -126px -146px;
}
.outer .list-container .sortList .right .lifeservices .life-item:nth-child(12) .list-item {
  background-position: -190px -146px;
}
.outer .list-container .sortList .right .ads {
  margin-top: 5px;
}
.outer .list-container .sortList .right .ads img {
  opacity: 0.8;
  transition: all 400ms;
}
.outer .list-container .sortList .right .ads img:hover {
  opacity: 1;
}
 .spot-enter{
 height: 0px;
 }
.spot-enter-to{
  height: 461px;
}
.spot-enter-active{
  transition:all,.5s,linear ;
}
</style>
