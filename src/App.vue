<template>
  <div id="app">
<zz></zz>
    <router-view></router-view>
    <ff v-show="$route.meta.show"></ff>


  </div>
</template>
<script>

import zz from "@/components/Header/zz";
import ff from "@/components/Footer/ff";
export default {
  name: 'App',

  components:{
    zz,
    ff
  }
}

</script>

<style>


</style>
