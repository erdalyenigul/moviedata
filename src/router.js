import Vue from 'vue'
import Router from 'vue-router'
import Popular from './views/Popular.vue'
import MovieDetails from './components/MovieDetails.vue'
import SearchResults from './components/SearchResults.vue'
import Developer from './components/Developer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'popular',
      component: Popular
    },
    {
      path : '/movies/:id',
      component: MovieDetails
    },
    {
      path : '/searchResults',
      component : SearchResults
    },
    {
      path : '/developer',
      component : Developer
    }
  ]
})
