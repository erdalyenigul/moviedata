<template>
	<div class="search">
      <div class="container inputWrap">
        <input 
        autocomplete="off" 
        v-on:keyup.enter="searchHandle" 
        type="text" 
        name="search" 
        placeholder="Search Movie..." 
        v-model="searchKey"> 
        <a href="javascript:;" class="searchBtn" @click="searchHandle">Search</a>
      </div>
    </div>
</template>

<script>
	import axios from 'axios' 
	export default {
		data() {
      return {
        searchKey : '',
        searchResults : [],
      }
    },
		methods : {
      searchHandle() {       
        this.$emit('search-results-data', this.searchKey)
        this.$router.push('/searchResults');      
      }
    }
	}
</script>