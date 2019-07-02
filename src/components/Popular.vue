<template>
  <div class="popular">
  	<div class="pageHeadline">LIST OF POPULAR MOVIES</div>
    <div v-if="loading" class="loading"><img src="../assets/images/loading.gif"></div>
    <div class="cardsDeck" v-if="!loading">
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
    <div class="pagination">
    	<ul class="paginationBtns">
    		<li>
    			<a href="javascript:;" @click="prevPage($event)"><i class="icon ion-md-arrow-back"></i></a>
    		</li>
    		<li>
    			<a href="javascript:;">{{ this.page }}</a>
    		</li>
    		<li>
    			<a href="javascript:;" @click="nextPage($event)"><i class="icon ion-md-arrow-forward"></i></a>
    		</li>
    	</ul>
    	<div class="currentPage">
    		<div>Go to : </div>
    		<div><input type="text" name="goToPage" v-model="getPage" @keypress.enter="goToPage"></div>
    		<div>/ 1000</div>
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
			isVisible : true,
			page : 1,
			loading : true,
			getPage : '',
			totalPage : ''
		}
	},	
	methods : {
		nextPage(event) {
			this.loading = true;
			this.page+=1;
			const self = this;
			axios.get('https://api.themoviedb.org/3/discover/movie?api_key=14e7ff9e6752283576e1930c5878068b&sort_by=popularity.desc&page=' + self.page + '')
			.then((res) => {
				self.movies = res.data.results;
				self.loading = false;
			});
		}	,
		goToPage() {
			this.loading = true;
			this.page = parseFloat(this.getPage);
			const self = this;
			axios.get('https://api.themoviedb.org/3/discover/movie?api_key=14e7ff9e6752283576e1930c5878068b&sort_by=popularity.desc&page=' + self.page + '')
			.then((res) => {
				self.movies = res.data.results;
				self.loading = false;
			});
		}	
	},
	created() {	
		const self = this;
		axios.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}`)
		.then((resPage) => {
			self.movies = resPage.data.results;
			self.totalPage = resPage.data.total_pages;
			self.loading = false
		});
	}
}
</script>