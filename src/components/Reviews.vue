<script>
	import axios from 'axios';
	import reviewsJson from "./reviews.json";

	export default {
		data() {
			return {
				reviews : [],
				loading: true,
			}
		},
		created() {
			this.reviews = reviewsJson;
			this.loading = false;
		}

	}
</script>

<template>
	<div class="reviewList containerSmall">
		<div class="banner banner728">
			<img src="https://www.justgothere.com/images/728x90_web_banner_example-004.jpg">
		</div>
		<div v-if="loading" class="loading"><img src="../assets/images/loading.gif"></div> 
		<div class="pageHeadline">Review List</div>
		<div class="reviewCard" v-for="(item, index) in reviews">
			<router-link :to="`/review/${index+1}`" class="titleLink">
				<img class="reviewImg" :src="reviews[index].img" :alt="reviews[index].title" :title="reviews[index].title">
				<div class="title"><h1>{{ reviews[index].title }}</h1></div>
			</router-link>
			<div class="body"><h2>{{ reviews[index].body.slice(3, 200) }}...</h2></div>			
			<div class="reviewMore">
				<router-link :to="`/review/${index+1}`">Read More</router-link>
			</div>			
		</div>
	</div>
</template>