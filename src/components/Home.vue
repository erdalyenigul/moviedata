<script>
import axios from 'axios';
import Slider from './Slider';
import reviewsJson from "./reviews.json";
import Trailers from './Trailers';

export default {
    name : 'PopularMovies',
    data() {
        return {
            apiKey : '14e7ff9e6752283576e1930c5878068b',
            baseUrl : 'https://api.themoviedb.org/3/',
            imgUrl : 'https://image.tmdb.org/t/p/original/',
            movies : [],
            isVisible : true,
            page : 1,
            loading : true,
            pageIDinc : 1,
            pageIDdec : 0,      
            getPage : '',
            reviews : [],
            reviewData : '',
            rID : ''
        }
    },  
    components : {
        appSlider : Slider,
        appTrailers : Trailers 
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
            this.pageIDinc++;
            this.pageIDdec++;
        },
        prevPage(event) {            
            this.loading = true;
            this.page-=1;
            this.pageIDdec = this.page;
            const self = this;
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=14e7ff9e6752283576e1930c5878068b&sort_by=popularity.desc&page=' + self.page + '')
            .then((res) => {
                self.movies = res.data.results;
                self.loading = false;    
            });
            this.pageIDdec--;
            this.pageIDinc--;
        },
        goToPage() {
          this.loading = true;
          this.page = parseFloat(this.getPage);
          this.pageIDdec = parseFloat(this.getPage);
              this.pageIDinc = parseFloat(this.getPage);
          const self = this;
          axios.get('https://api.themoviedb.org/3/discover/movie?api_key=14e7ff9e6752283576e1930c5878068b&sort_by=popularity.desc&page=' + self.page + '')
          .then((res) => {
              self.movies = res.data.results;
              self.loading = false;
              self.$router.push(`/page/${self.getPage}`);
          });
        }   
    },
    created() {              
      this.page = this.pageIDinc;
      const self = this;
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=14e7ff9e6752283576e1930c5878068b&sort_by=popularity.desc&page=' + self.page + '')
      .then((res) => {
          self.movies = res.data.results;
          self.loading = false;           
      });

      this.reviews = reviewsJson;  
      this.rID = this.$route.params.reviewID
      this.rID -=1;
      this.reviewData = this.reviews[this.rID];        
    }
}
</script>

<template>
  <div class="popular">
    <!-- <appSlider></appSlider> -->
    <div class="banner banner728"></div>
    <appTrailers></appTrailers>
    <div class="pageHeadline"><h1>Hundreds of pages you can discover the list of trending movies!</h1></div>    
    <div v-if="loading" class="loading"><img src="../assets/images/loading.gif" alt="Loading" title="Loading"></div> 
    <div class="pagination">
      <ul class="paginationBtns">
        <li>
            <router-link :to="`/page/${pageIDdec}`" v-show="this.page > 1" @click.native="prevPage($event)" title="Prev">
                <i class="icon ion-md-arrow-back"></i>
            </router-link> 
        </li>
        <li>
            <a href="javascript:;">{{ this.page }}</a>
        </li>
        <li>
            <router-link :to="`/page/${pageIDinc + 1}`" v-show="this.page < 1000" @click.native="nextPage($event)" title="Next">
                <i class="icon ion-md-arrow-forward"></i>
            </router-link>
        </li>
      </ul>
      <div class="currentPage">
        <div>Go to : </div>
        <div><input type="text" name="goToPage" v-model="getPage" @keypress.enter="goToPage"></div>
        <div>/ 1000</div>
        <div v-if="getPage"><a href="javascript:;" @click="goToPage"><i class="ion-md-return-right"></i></a></div>
      </div>
    </div>

    <div class="cardsDeck" v-if="!loading">
      <div class="card" v-for="(movie, index) in movies">
        <router-link :to="`/movies/${movies[index].id}`" target="_blank">
          <div class="voteAverage">{{ movies[index].vote_average }}</div>
          <div class="poster"><img :src="imgUrl + movies[index].poster_path" :alt="movies[index].title" :title="movies[index].title"></div>
        </router-link>
        <div class="cardRight">          
          <router-link :to="`/movies/${movies[index].id}`" target="_blank">
              <div class="title"><h1>{{ movies[index].title }}</h1></div>
              <div class="releaseDate">{{ movies[index].release_date }}</div>
          </router-link>
          <div class="overview"><h2>{{ movies[index].overview.slice(0,150) }}...</h2></div>
          <router-link :to="`/movies/${movies[index].id}`" target="_blank">
              <div class="details">More Info <i class="icon ion-md-link"></i></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>