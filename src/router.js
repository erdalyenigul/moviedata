import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import MovieDetails from './components/MovieDetails.vue'
import SearchResults from './components/SearchResults.vue'
import Contact from './components/Contact.vue'
import Review from './components/Review.vue'
import Trailers from './components/Trailers.vue'
import Trailer from './components/Trailer.vue'
import TrailerList from './components/TrailerList.vue'
import Popular from './components/Popular.vue'
import Reviews from './components/Reviews.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path : '/page/:pageIDdec',
      name : 'PrevPage',
      component: Popular
    },
    {
      path : '/page/:pageIDinc',
      name : 'NextPage',
      component: Popular
    },
    {
      path : '/movies/:movieID',
      component: MovieDetails
    },
    {
      path : '/searchResults',
      name : 'SearchResults',
      component : SearchResults,
      props : true
    },
    {
      path : '/contact',
      component : Contact
    },
    {
      path : '/review/:reviewID',
      component : Review
    },    
    {
      path : '/trailers/:trailerID',
      component : Trailer
    },
    {
      path : '/trailerList',
      component : TrailerList
    },
    {
      path : '/reviews',
      component : Reviews
    }
  ]
})
