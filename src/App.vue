<script>
  import Header from './components/Header';    
  import Search from './components/Search';
  import axios from 'axios'; 

  export default {
    components : {
      appHeader : Header,
      appSearch : Search,     
    },
    data() {
      return {
        searchKeyBus : '',
        showTopBtn: false,
      }
    },
    methods : {
      searchKey(searchKey) {
        this.searchKeyBus = searchKey
      },
      backToTop () {
        window.scrollTo(0,0);
      },
      handleScroll (event) {
        if(window.pageYOffset >= 100) {
          this.showTopBtn = true
        } else {
          this.showTopBtn = false
        }
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<template>
  <div id="app">
    <a class="backToTopID" v-if="showTopBtn" @click="backToTop"><i class="ion-md-arrow-up"></i></a>
    <appHeader></appHeader>
    <appSearch v-on:search-results-data="searchKey($event)"></appSearch>    
    <router-view :searchKeyBus=searchKeyBus></router-view>
  </div>
</template>

<style lang="scss">
  @import "./assets/css/main.scss";
</style>
