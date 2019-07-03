<script>
import axios from 'axios';

export default {
	name : 'MovieDetails',
	data() {
		return {
			movieDetails : [],
			baseUrl : 'https://api.themoviedb.org/3/movie/',
			apiKey : '14e7ff9e6752283576e1930c5878068b',
			imgUrl : 'https://image.tmdb.org/t/p/original',
			movieGenres : [],
			movieTrailer : '',
			homepage : ''			
		}
	},
	created() {
		const self = this;
		axios.get(`${this.baseUrl}${this.$route.params.movieID}?api_key=${this.apiKey}`)
		.then((res) => {
			self.movieDetails = res.data;
			self.movieGenres = res.data.genres;
			self.homepage = res.data.homepage;
		});
		axios.get(`${this.baseUrl}${this.$route.params.movieID}/videos?api_key=${this.apiKey}`)
		.then((res) => {
			self.movieTrailer = res.data.results;
		});
	}
}
</script>

<template>
	<div class="movieDetails">
		aaaa
		<div class="mdBg">
			<div class="mdBgOverlay"></div>			
			<div class="mdBgImg" :style="{ backgroundImage: 'url(' + `${this.imgUrl}${this.movieDetails.backdrop_path}` + ')' }"></div>
		</div>
		<div class="movieDetailsList">
	    	<div class="content">
	    		<div class="poster"><img :src="imgUrl+movieDetails.poster_path"></div>
	    		<div class="detailsText">
	    			<div class="score">{{ movieDetails.vote_average }}</div>
	    			<div class="title">{{ movieDetails.original_title }}</div>
	    			<ul class="genres">
	    				<li>Genres : </li>
    					<li v-for="(genre, index) in movieGenres">{{ movieGenres[index].name }}<span>,</span></li>
    				</ul>
    				<div class="overview">{{ movieDetails.overview }}</div>
    				<div class="relaseDate">Release Date : {{ movieDetails.release_date }}</div>
    				<div class="imdb">
    					<a :href="`https://www.imdb.com/title/${movieDetails.imdb_id}`" target="_blank">Go to IMDB Page</a>
    				</div>
    				<div class="website" v-if="homepage">
    					Official Website : 
    					<a :href="movieDetails.homepage" target="_blank">{{ movieDetails.homepage }}</a>
    				</div>    				
	    		</div>
	    	</div>
	    	<div class="video">
	    		<div class="trailerHead">{{ movieTrailer[0].name }}}</div>
					<iframe width="100%" height="550" :src="`https://www.youtube.com/embed/${movieTrailer[0].key}`" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
	    </div>
	</div>
</template>