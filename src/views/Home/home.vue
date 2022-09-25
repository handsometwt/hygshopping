<template>
<div>
  <typenav></typenav>
  <sp></sp>
  <recommend></recommend>
  <hot></hot>
<like></like>
  <floor v-for="(i,index) in floorList" :key="index" :list="i"></floor>

<brand></brand>
</div>

</template>

<script>
import Typenav from "@/views/Home/typenav/typenav";
import sp from "@/views/Home/sp/sp";
import recommend from "@/views/Home/Recommend/recommend";
import hot from "@/views/Home/Hot/hot";
import like from "@/views/Home/like/like";
import floor from "@/views/Home/floor/floor";
import brand from "@/views/Home/brand/brand";
import {getFloorList} from "@/api/ajax";

export default {
  name: "home.vue",
  components: {Typenav,sp,recommend,hot,like,floor,brand},
  data(){
    return{
      floorList:[]
    }
  },
  async mounted() {
    this.$store.dispatch("GetCategoryList")
 const {data:res}=  await getFloorList()
    this.floorList=res.data
    console.log("home页面")
  }
}
</script>

<style scoped>

</style>
