<template>
	<hooper :infiniteScroll="true" :itemsToShow="1" :centerMode="true" :autoPlay="false" :playSpeed="5000" :wheelControl="false">
    <template v-for="(slide, index) in reviewsLength">
      <slide>
        <router-link :to="`/review/${index + 1}`">
          <div class="slideItem">
            <div class="slideContent">              
              <span class="title">{{ reviews[index].title }} <span class="reviewTitleStatic">Review</span></span>
              <span class="body">{{ reviews[index].body.slice(3) }}</span>
              <span class="readMoreBtn">Read More</span>
            </div>
            <img :src="reviews[index].img">
          </div>
        </router-link>
      </slide>
    </template>
      
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
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
        reviewsLength : ''
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