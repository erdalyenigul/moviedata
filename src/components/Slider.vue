<template>
  <div class="mainSlider">    
	 <hooper :settings="hooperSettingsMainSlider">
    <template v-for="(slide, index) in reviewsLength">
      <slide>
        <router-link :to="`/review/${index + 1}`">
          <div class="slideItem">
            <div class="slideContent">              
              <span class="title"><h1>{{ reviews[index].title }} <span class="reviewTitleStatic">Review</span></h1></span>
              <span class="body"><h2>{{ reviews[index].body.slice(3, 250) }}...</h2></span>
              <span class="readMoreBtn">Read More</span>
            </div>
            <img :src="reviews[index].img">
          </div>
        </router-link>
      </slide>
    </template>  
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
  import reviewsJson from "./reviews.json";
	import {
    Hooper,
    Slide,    
    Navigation as HooperNavigation
    } from 'hooper';

	export default {
    data() {
      return {
        reviewID : 1,
        reviews : [],
        reviewData : '',
        rID : '',
        reviewsLength : '',     
        hooperSettingsMainSlider: {
          itemsToShow : 1,
          autoPlay : true,
          playSpeed : 5000,
          wheelControl : false,
          centerMode : false,
          infiniteScroll : true,
          breakpoints: {
            0: {
              itemsToShow: 1,
              centerMode : true,
            },
            768: {
              itemsToShow: 1,
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
      this.reviews = reviewsJson;
      this.reviewsLength = this.reviews.length;
    }
	}
</script>