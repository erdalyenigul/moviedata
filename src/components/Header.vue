<script>
	export default{
		data() {
			return {
				isActive : false,
			}
		},
		methods : {
			backToTop () {
	        	window.scrollTo(0,0);
	      	},
		}
	}
</script>

<template>
	<header>		
		<div class="container headerContent">
			<div class="headLeft">
				<router-link to="/" @click.native="backToTop" title="Database Search Movie">
					<img src="../assets/images/logo.svg" alt="Database Search Movie" title="Database Search Movie" />
					<span>
						<span>DBS Movie</span>
						<span>Movie Database Search</span>
					</span>
				</router-link>
			</div>
			<div class="headRight">
				<a href="javascript:;" class="mobileMenuBtn" @click="isActive = !isActive">
					<i class="ion-md-menu"></i>
				</a>
				<div class="mobileMenu" :class="{ showMobileMenu: isActive }">
					<div class="mobileMenuContent">										
						<a href="javascript:;" class="mobileMenuCloseBtn" @click="isActive = !isActive"><i class="ion-md-close"></i></a>
						<ul class="mobileMenuLinks">		
							<li>
								<router-link @click.native="isActive = !isActive, backToTop()" to="/" class="mobileMenuLogo">
									<img src="../assets/images/logo.svg" alt="Database Search Movie" title="Database Search Movie" />
								</router-link>
							</li>
							<li>
								<router-link @click.native="isActive = !isActive, backToTop()" to="/popular">Popular Movies</router-link>	
							</li>
							<li>
								<router-link @click.native="isActive = !isActive, backToTop()" to="/trailerList">Trailers</router-link>	
							</li>
							<li>
								<router-link @click.native="isActive = !isActive, backToTop()" to="/reviews">Reviews</router-link>	
							</li>
							<li>
								<router-link @click.native="isActive = !isActive, backToTop()" to="/contact">Contact</router-link>	
							</li>
						</ul>	
					</div>
					<div class="mobileMenuOverlay" @click="isActive = !isActive"></div>
				</div>
				<ul class="headerLinks">		
					<li>
						<router-link to="/popular" title="Popular Movies">Popular Movies</router-link>	
					</li>
					<li>
						<router-link to="/trailerList" title="Trailers">Trailers</router-link>	
					</li>
					<li>
						<router-link to="/reviews" title="Reviews">Reviews</router-link>	
					</li>
					<li>
						<router-link to="/contact" title="Contact">Contact</router-link>	
					</li>
				</ul>			
			</div>
		</div>
	</header>
</template>