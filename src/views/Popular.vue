<template>
  <div class="popular">
  	<div class="pageHeadline">LIST OF POPULAR MOVIES</div>
    <div class="cardsDeck">
    	<div class="card" v-for="(movie, index) in movies">
    		<router-link :to="`/movies/${movies[index].id}`">
	    		<div class="poster"><img :src="imgUrl + movies[index].poster_path"></div>
	    		<div class="title">{{ movies[index].title }}</div>
	    	</router-link>
    		<div class="overview">{{ movies[index].overview }}</div>
    		<div class="releaseDate">Release date : {{ movies[index].release_date }}</div>
    		<div class="voteAverage">Score : {{ movies[index].vote_average }}</div>
  			<router-link :to="`/movies/${movies[index].id}`">
    			<div class="details">View Full Details <i class="icon ion-md-link"></i></div>
    		</router-link>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name : 'PopularMovies',
	data() {
		return {
			movies : [],
			apiKey : '14e7ff9e6752283576e1930c5878068b',
			baseUrl : 'https://api.themoviedb.org/3/',
			imgUrl : 'https://image.tmdb.org/t/p/original/',
			movieID : '',
			isVisible : true
		}
	},	
	created() {
		const self = this;
		axios.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}`)
		.then((res) => {
			self.movies = res.data.results;		
		});
	}
}
</script>