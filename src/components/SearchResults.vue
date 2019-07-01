<script>
	export default {
		data() {
			return {
				searchResults : false
			}
		},
		props : {
			searchResults : {
				type : Array
			}
		}	,
		data() {
			return {
				imgUrl : 'https://image.tmdb.org/t/p/original/',
			}
		}
	}
</script>

<template>
  <div class="popular">
  	<div class="pageHeadline">Search Results</div>
    <div class="cardsDeck">
    	<div class="card" v-for="(movie, index) in searchResults">
    		<router-link :to="`/movies/${searchResults[index].id}`">
	    		<div class="poster"><img :src="imgUrl + searchResults[index].poster_path"></div>
	    		<div class="title">{{ searchResults[index].title }}</div>
	    	</router-link>
    		<div class="overview">{{ searchResults[index].overview }}</div>
    		<div class="releaseDate">Release date : {{ searchResults[index].release_date }}</div>
    		<div class="voteAverage">Score : {{ searchResults[index].vote_average }}</div>
  			<router-link :to="`/movies/${searchResults[index].id}`">
    			<div class="details">View Full Details <i class="icon ion-md-link"></i></div>
    		</router-link>
    	</div>
    </div>
  </div>
</template>