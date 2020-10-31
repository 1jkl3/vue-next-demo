<template>
  <header class="menus">
    <div class="menus-container">
      <div class="menus-header"></div>
      <div class="menus-list">
        <div class="menus-logo">
          <img src="~assets/images/logo.png" alt="联投集团" />
        </div>
        <div class="menus-item" v-for="(item,index) in links" :key="index">
          <nuxt-link
            class="link"
            :class="item.link == $route.path ? 'link-active':''"
            :to="item.link"
          >{{item.name}}</nuxt-link>
        </div>
        <nuxt-link class="menus-lxh" to="/lxh">
          <img src="~assets/images/lxh.png" alt="联享会" />
        </nuxt-link>
      </div>
    </div>
    <div class="menus-occupied"></div>
  </header>
</template>
<script>
export default {
  name: "menus",
  props:{
    links:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {
      
    };
  },
  created(){
  }
}
</script>
<style lang="scss" scoped>
.menus-occupied {
  height: 120px;
  width: 100%;
}
.menus-container {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #FFF;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
}
.menus {
  width: 100%;
  background-color: #fff;
  .menus-header {
    height: 40px;
    width: inherit;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #666;
    }
  }
  .menus-list {
    height: 80px;
    line-height: 80px;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    .menus-logo {
      flex: 0 0 15%;
      height: 100%;
      margin-right: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .menus-item {
      flex: 1;
      height: 100%;
      text-align: center;
      .link {
        text-decoration: none;
        padding: 0 10px;
        font-weight: 600;
        color: #000;
        position: relative;
        height: 100%;
        display: inline-block;
        &::after {
          content: '';
          position: absolute;
          background-color: #e89215;
          bottom: 0;
          left: 0;
          width: 0;
          height: 4px;
          transition: all 0.4s ease;
        }
        &:hover {
          color: #e89215;
        }
        &:hover::after {
          content: '';
          width: 100%;
        }
      }
      .link-active {
        color: #e89215;
        &::after {
          content: '';
          width: 100%;
        }
      }
    }
    .menus-lxh {
      background-color: #866d4a;
      flex: 0 0 10%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>