<script>
	import axios from 'axios';

	export default {
		props : {
			searchKeyBus : {
				type : String
			}
		}	,
		data() {
			return {
				imgUrl : 'https://image.tmdb.org/t/p/original/',
				searchResults : []
			}
		},
		created() {
			const self = this;
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=14e7ff9e6752283576e1930c5878068b&query=${this.searchKeyBus}`)
      .then((res) => {
       	self.searchResults = res.data.results;
      }); 
		}
	}
</script>

<template>
  <div class="popular containers">
  	<div class="pageHeadline">Search Results : {{ searchKeyBus }}</div>
  	<div v-if="loading" class="loading"><img src="../assets/images/loading.gif"></div>
    <div class="cardsDeck">

    	

    	<div class="card" v-for="(movie, index) in searchResults">
    		<router-link :to="`/movies/${searchResults[index].id}`" target="_blank">
    			<div class="voteAverage">{{ searchResults[index].vote_average }}</div>
	    		<div class="poster"><img :src="imgUrl + searchResults[index].poster_path"></div>
	    	</router-link>
	    	<div class="cardRight">
	    		<router-link :to="`/movies/${searchResults[index].id}`" target="_blank">
	    			<div class="title">{{ searchResults[index].title }}</div>
	    			<div class="releaseDate">Release date : {{ searchResults[index].release_date }}</div>
	    		</router-link>
	    		<div class="overview">{{ searchResults[index].overview.slice(3,150) }}...</div>
	  			<router-link :to="`/movies/${searchResults[index].id}`" target="_blank">
	    			<div class="details">View Full Details <i class="icon ion-md-link"></i></div>
	    		</router-link>
    		</div>
    	</div>
    </div>
  </div>
</template>