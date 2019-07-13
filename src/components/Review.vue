<script>
	import axios from 'axios';
	import reviewsJson from "./reviews.json";

	export default {
		data() {
			return {
				reviews : [],
				reviewData : '',
				rID : ''
			}
		},
		created() {
			this.reviews = reviewsJson;  
			this.rID = this.$route.params.reviewID
			this.rID -=1;
			this.reviewData = this.reviews[this.rID];
		}
	}
</script>

<template>
	<div class="reviewsWrap">
		<div class="reviewImg"><img :src="reviewData.img"></div>
		<div class="reviewsContent">		
			<div class="reviewsLeft">
				<div class="reviewTitle">{{ reviewData.title }}</div>
				<div class="reviewDate">Date : {{ reviewData.date }}</div>
				<div class="reviewBody" v-html="reviewData.body">{{ reviewData.body }}</div>
			</div>		
			<div class="reviewsRight">
				<div class="banner banner300">
					<img src="http://fpoimg.com/300x300?text=Advertisement">
				</div>
			</div>
		</div>
	</div>
</template>