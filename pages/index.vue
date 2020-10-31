<template>
  <div class="container">
    <!-- <swiper-cpt /> -->
    <swiperTest :banners="list" />
    <swiperTest :banners="list" />
  </div>
</template>

<script>
// import swiperCpt from '@/components/swiperCpt';
import swiperTest from "@/components/swiperTest";
export default {
  components:{
    swiperTest
  },
  data(){
    return {
      list:['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg']
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
