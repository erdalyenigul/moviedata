<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				trailerID : this.$route.params.trailerID,
				videoKey : [],
				videoTitle : [],
				videoTrailerKey : ''
			}
		},
		created() {			
			const self = this;
      axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.trailerID}/videos?api_key=14e7ff9e6752283576e1930c5878068b`)
      .then((res) => {
      	self.videoKey = res.data.results;
      	setTimeout(() => {            		
      		for(let i = 0; i < self.videoKey.length; i++) {      			
	      		if (self.videoKey[i].type === 'Trailer') {
	      			self.videoTrailerKey = self.videoKey[i].key;
	      			break;
	      		}
      		}
      	},2000)
      });

      axios.get(`http://api.themoviedb.org/3/movie/${this.$route.params.trailerID}?&api_key=14e7ff9e6752283576e1930c5878068b`)
      .then((res) => {
      	self.videoTitle = res.data.title;
      });  
      this.ifTrailer();
		},
		methods : {
			ifTrailer() {
				
			}
		}
	}
</script>

<template>
	<div class="trailerIframe">
		<div class="banner banner728">
			<img src="https://www.justgothere.com/images/728x90_web_banner_example-004.jpg">
		</div>
		<div class="trailerIframeContent">
			<div class="pageHeadline">{{ videoTitle }}</div>
			<iframe width="100%" height="550" :src="`https://www.youtube.com/embed/${this.videoTrailerKey}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>		
		</div>
	</div>
</template>