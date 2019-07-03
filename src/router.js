import Vue from 'vue'
import Router from 'vue-router'
import Popular from './components/Popular.vue'
import MovieDetails from './components/MovieDetails.vue'
import SearchResults from './components/SearchResults.vue'
import Developer from './components/Developer.vue'
import Page from './components/Page.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
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
      component : SearchResults
    },
    {
      path : '/developer',
      component : Developer
    }
  ]
})
