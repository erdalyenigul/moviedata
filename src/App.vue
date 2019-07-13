<script>
  import axios from 'axios'; 
  import Header from './components/Header';    
  import Search from './components/Search';  
  import Footer from './components/Footer';

  export default {
    components : {
      appHeader : Header,
      appSearch : Search, 
      appFooter : Footer     
    },
    data() {
      return {
        searchKeyBus : '',
        movieKeyBus : '',
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
      <div class="container">
        <router-view :searchKeyBus=searchKeyBus></router-view>
      </div>
      <appFooter></appFooter>
  </div>
</template>

<style lang="scss">
  @import "./assets/css/main.scss";
</style>
