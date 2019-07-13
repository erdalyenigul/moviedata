<script>
	export default{
		methods : {
			backToTop () {
	        	window.scrollTo(0,0);
	      	},
		}
	}
</script>

<template>
	<footer>
		<div class="container footerContent">
			<div class="footerLines">
				<router-link to="/" class="footerLogo" title="Database Search Movie">
					<span class="footerLogoImg">
						<img src="../assets/images/logo.svg" alt="Database Search Movie" title="Database Search Movie" />
					</span>
					<span class="footerLogoText">
						<span>DBS Movie</span>
						<span>Movie Database Search</span>
					</span>
				</router-link>
				
				<ul class="footerLinks">		
					<li>
						<p class="footerColumnHeadline">Dbs Movie Links</p>									
					</li>	
					<li>
						<router-link to="/popular" @click.native="backToTop" title="Popular Movies">Popular Movies</router-link>	
					</li>
					<li>
						<router-link to="/trailerList" @click.native="backToTop" title="Trailers">Trailers</router-link>	
					</li>
					<li>
						<router-link to="/reviews" @click.native="backToTop" title="Reviews">Reviews</router-link>	
					</li>
					<li>
						<router-link to="/contact" @click.native="backToTop" title="Contact">Contact</router-link>	
					</li>
				</ul>

				<ul class="footerLinks">		
					<li>
						<p class="footerColumnHeadline">Development</p>									
					</li>
					<li>
						<a href="http://www.erdalyenigul.com" target="_blank" title="erdalyenigul.com">erdalyenigul.com</a>
					</li>
					<li>
						<a class="noLink">2019 Erdal Yenigul</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>