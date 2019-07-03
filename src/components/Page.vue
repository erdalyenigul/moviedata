<template>
  <div class="popular">
    <div class="pageHeadline">LIST OF POPULAR MOVIES</div>
    <div class="pagination">
        <ul class="paginationBtns">
            <li>
                <router-link :to="`/page/${pageIDdec}`" v-show="this.page > 1" @click.native="prevPage($event)">
                    <i class="icon ion-md-arrow-back"></i>
                </router-link> 
            </li>
            <li>
                <a href="javascript:;">{{ this.page }}</a>
            </li>
            <li>
                <router-link :to="`/page/${pageIDinc + 1}`" v-show="this.page < 1000" @click.native="nextPage($event)">
                    <i class="icon ion-md-arrow-forward"></i>
                </router-link>
            </li>
        </ul>
        <div class="currentPage">
            <div>Go to : </div>
            <div><input type="text" name="goToPage" v-model="getPage" @keypress.enter="goToPage"></div>
            <div>/ 1000</div>
        </div>
    </div>
    <div v-if="loading" class="loading"><img src="../assets/images/loading.gif"></div>
    <div class="cardsDeck" v-if="!loading">
        <div class="card" v-for="(movie, index) in movies">
            <router-link :to="`/movies/${movies[index].id}`" target="_blank">
                <div class="poster"><img :src="imgUrl + movies[index].poster_path"></div>
                <div class="title">{{ movies[index].title }}</div>
            </router-link>
            <div class="overview">{{ movies[index].overview }}</div>
            <div class="releaseDate">Release date : {{ movies[index].release_date }}</div>
            <div class="voteAverage">Score : {{ movies[index].vote_average }}</div>
            <router-link :to="`/movies/${movies[index].id}`" target="_blank">
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
            apiKey : '14e7ff9e6752283576e1930c5878068b',
            baseUrl : 'https://api.themoviedb.org/3/',
            imgUrl : 'https://image.tmdb.org/t/p/original/',
            movies : [],
            isVisible : true,
            page : 1,
            loading : true,
            getPage : '',
            pageIDinc : 2,
            pageIDdec : 1
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
            this.pageIDinc++;
            this.pageIDdec++;
        },
        prevPage(event) {            
            this.loading = true;
            this.page-=1;
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
            this.page = this.getPage;
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
        this.getPage;
        console.log('getpage ' + this.getPage);
        this.page = this.pageIDinc;
        const self = this;
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=14e7ff9e6752283576e1930c5878068b&sort_by=popularity.desc&page=' + self.page + '')
        .then((res) => {
            self.movies = res.data.results;
            self.loading = false;           
        });
    }
}
</script>