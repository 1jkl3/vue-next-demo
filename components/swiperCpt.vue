<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataImage: [
        {
          imgUrl:
            'http://kexiepingtaieposter.hoohui.cn/paper_file/15908353622331590835195(1).png',
        },
        {
          imgUrl:
            'http://kexiepingtaieposter.hoohui.cn/paper_file/15908353884901590835256(1).jpg',
        },
        {
          imgUrl:
            'http://kexiepingtaieposter.hoohui.cn/paper_file/15908353884901590835256(1).jpg',
        },
      ],
      swiperOption: {
        // 配置说明直接看官网
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        lazy: {
          loadPrevNext: true,
        },
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setSwiper()
    })
  },
  methods: {
    setSwiper() {
      // this.swiperOption = 
    },
  },
}
</script>

<style lang="scss">
.swiper-pagination {
  width: 5px;
  height: 5px;
}
</style>