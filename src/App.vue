<script>
  import Header from './components/Header';  
  import axios from 'axios';

  export default {
    components : {
      appHeader : Header
    },
    data() {
      return {
        searchKey : '',
        searchResults : []
      }
    },
    methods : {
      searchHandle() {
        const self = this;
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=14e7ff9e6752283576e1930c5878068b&query=${this.searchKey}`)
        .then((res) => {
          self.searchResults = res.data.results;
          console.log(self.searchResults)
        });  
        this.$router.push('/searchResults');      
      }
    }
  }
</script>

<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="search">
      <div class="inputWrap">
        <input v-on:keyup.enter="searchHandle" type="text" name="search" placeholder="Search Movie..." v-model="searchKey">      
          <a href="javascript:;" class="searchBtn" @click="searchHandle">Search</a>
      </div>
    </div>
    <router-view :searchResults="searchResults"></router-view>
  </div>
</template>

<style lang="scss">
  @import "./assets/css/main.scss";
</style>
