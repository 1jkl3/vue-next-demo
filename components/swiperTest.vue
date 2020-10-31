<template>
  <div class="swiper-container-index">
    <div class="swiper-wrapper">
      <div class="swiper-slide item" :key="banner" v-for="banner in banners">
        {{ banner }}
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default: () => {
        return []
      },
    },
    swiperOption: {
      type: Object,
      default: () => ({
        init: false,
        initialSlide: 0,
        autoplay: {
          delay: 3000,
        },
        observeParents: true,
        observer: true,
        loop: true,
      }),
    },
  },
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      let $swiper = new Swiper('.swiper-container-index', this.swiperOption);
      if (this.banners) {
        if ($swiper instanceof Array) {
          $swiper.forEach((item) => {
            if (this.banners) {
              item.init();
            }
          })
        } else {
          $swiper.init();
        }
      }
    })
  },
}
</script>
<style lang="scss">
.swiper-container-index {
  width: 100%;
  height: 500px;
  overflow: hidden;
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>