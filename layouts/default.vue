<template>
  <div>
    <menus :links="links" />
    <Nuxt />
  </div>
</template>
<script>
import Menus from '@/components/Menus';
export default {
  components:{
    Menus
  },
  data(){
    return {
      links:[
        {name:"首页",link:"/"},
        {name:"关于我们",link:"/about"},
        {name:"优惠活动",link:"/activity"},
        {name:"经营发展",link:"/business"},
        {name:"新闻动态",link:"/news"},
        {name:"联系我们",link:"/contact"},
      ]
    }
  }
}
</script>
<style>
</style>
