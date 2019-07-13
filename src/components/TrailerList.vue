<script>
	import axios from 'axios';
	import {
    Hooper,
    Slide,   
    Navigation as HooperNavigation
    } from 'hooper';

	export default{
		data() {
			return {
				apiKey : '14e7ff9e6752283576e1930c5878068b',
        baseUrl : 'https://api.themoviedb.org/3/',
        imgUrl : 'https://image.tmdb.org/t/p/original/',
        youtubeLink : 'https://www.youtube.com/watch?v=',
        moviesIDs : [],
        trailersID : '',
        loading:true,
        hooperSettingsTrailer: {
        	itemsToShow : 5,
        	autoPlay : true,
        	playSpeed : 3000,
        	wheelControl : false,
        	centerMode : true,
        	infiniteScroll : true,
	        breakpoints: {
	          0: {
	            itemsToShow: 1,
	            centerMode : false
	          },
	          1000: {
	            itemsToShow: 5
	          }
	        }
	      }
			}
		},
		components : {
      Hooper,
      Slide,    
      HooperNavigation
    },
		created() {
      const self = this;
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=14e7ff9e6752283576e1930c5878068b&sort_by=popularity.desc&page=1')
      .then((res) => {
          self.moviesIDs = res.data.results;  
          self.loading = false;        
      }); 
    }
	}
</script>

<template>
	<div class="trailersWrap trailerSlider containerSmall">
		<div class="banner banner728">
			<img src="https://www.justgothere.com/images/728x90_web_banner_example-004.jpg">
		</div>
		<div v-if="loading" class="loading"><img src="../assets/images/loading.gif"></div> 
		<div class="pageHeadline">Trending Trailers</div>
		<div class="trailersContent trailerList">		
			<template v-for="(trailerLink, index) in 20">
        <router-link :to="`/trailers/${moviesIDs[index].id}`" class="trailer">	          					
					<i class="ion-md-play-circle"></i>
					<span><h1>{{ moviesIDs[index].title }}</h1></span>
					<img :src="imgUrl+moviesIDs[index].poster_path" :alt="moviesIDs[index].title" :title="moviesIDs[index].title">									
        </router-link>
      </template>
		</div>
	</div>
</template>