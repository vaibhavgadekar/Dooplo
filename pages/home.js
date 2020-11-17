import React from 'react'
import Link from 'next/link'
export default function TopBar() {
    return (
		<div>
        <header className="header">
		<section className="top-header">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="content">
							<div className="left-content">
								<ul className="left-list">
									<li>
										<p>
											<i className="fas fa-headset"></i>	Support
										</p>
									</li>
									<li>
										<p>
											<i className="fas fa-envelope"></i>	info@Dooplo.com
										</p>
									</li>
									<li>
										<div className="language-selector">
											<select name="language" className="language">
												<option value="1">English</option>
												<option value="2">France</option>
												<option value="3">Japan</option>
											</select>
										</div>
									</li>
								</ul>
							</div>
							<div className="right-content">
								<ul className="right-list">
									<li>
										<div className="cart-icon tm-dropdown">
											<i className="fas fa-cart-arrow-down"></i>
											<span className="cart-count">10</span>
											<div className="tm-dropdown-menu">
												<ul className="list">
													<li className="list-item">
															<div className="close">
																	<i className="fas fa-times"></i>
															</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
													<li className="list-item">
															<div className="close">
																	<i className="fas fa-times"></i>
															</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
													<li className="list-item">
															<div className="close">
																	<i className="fas fa-times"></i>
															</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
													<li className="list-item">
														<div className="close">
																<i className="fas fa-times"></i>
														</div>
														<ul className="number-list">
															<li>24</li>
															<li>25</li>
															<li>26</li>
															<li>27</li>
															<li>28</li>
														</ul>
													</li>
												</ul>
												<a href="cart.html" className="link-btn">Cart Page</a>
											</div>
										</div>
									</li>
									<li>
										<div className="notofication tm-dropdown">
											<i className="fas fa-bell"></i>
											<span className="count">11</span>
											<div className="tm-dropdown-menu">
													<ul className="list">
														<li>
															<a href="#">
																<i className="fas fa-bell"></i>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fas fa-bell"></i>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fas fa-bell"></i>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fas fa-bell"></i>
																Invest Exchange
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fas fa-bell"></i>
																Invest Exchange
															</a>
														</li>
													</ul>
												</div>
										</div>
									</li>
									<li>
										<a href="#" className="sign-in" data-toggle="modal" data-target="#login">
											<i className="fas fa-user"></i> Sign In
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div className="mainmenu-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">                 
						<nav className="navbar navbar-expand-lg navbar-light">
							<a className="navbar-brand" href="index.html">
								<img src="assets/images/logo.png" alt=""/>
							</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
								aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse fixed-height" id="main_menu">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item dropdown">
										<a className="nav-link active dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Home
										<div className="mr-hover-effect"></div>
										</a>
										<ul className="dropdown-menu" >
											<li><a className="dropdown-item" href="index.html"> <i className="fa fa-angle-double-right"></i>Home 1</a></li>
											<li><a className="dropdown-item" href="index2.html"> <i className="fa fa-angle-double-right"></i> Home 2</a></li>
										</ul>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="play.html">Play
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="lottery.html">lottery
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="tournaments.html">tournaments
												<div className="mr-hover-effect"></div></a>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											Pages
											<div className="mr-hover-effect"></div>
										</a>
										<ul className="dropdown-menu" >
											<li><a className="dropdown-item" href="about.html"> <i className="fa fa-angle-double-right"></i>About</a></li>
											<li><a className="dropdown-item" href="affiliate.html"> <i className="fa fa-angle-double-right"></i>Affiliate</a></li>
											<li><a className="dropdown-item" href="awards.html"> <i className="fa fa-angle-double-right"></i>Awards</a></li>
											<li><a className="dropdown-item" href="bonus.html"> <i className="fa fa-angle-double-right"></i>Bonus</a></li>
											<li><a className="dropdown-item" href="cart.html"> <i className="fa fa-angle-double-right"></i>Cart</a></li>
											<li><a className="dropdown-item" href="faq.html"> <i className="fa fa-angle-double-right"></i>Faq</a></li>
											<li><a className="dropdown-item" href="how-it-work.html"> <i className="fa fa-angle-double-right"></i>How It Work</a></li>
											<li><a className="dropdown-item" href="terms-conditions.html"> <i className="fa fa-angle-double-right"></i>Terms & Condition</a></li>
											<li><a className="dropdown-item" href="terms-conditions-details.html"> <i className="fa fa-angle-double-right"></i>Condition Details</a></li>
											<li><a className="dropdown-item" href="404.html"> <i className="fa fa-angle-double-right"></i>404</a></li>
										</ul>
									</li>
									<li className="nav-item">
											<a className="nav-link" href="contact.html">Contact
													<div className="mr-hover-effect"></div></a>
										</li>
								</ul>
								<a href="#" className="mybtn1"  data-toggle="modal" data-target="#signin"> Join us</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>

<div class="hero-area">
<div class="container">
	<div class="row">
		<div class="col-lg-5 d-flex align-self-center">
			<div class="left-content">
				<div class="content">
					<h5 class="subtitle">
						New Crypto Game
					</h5>
					<h1 class="title">
							PLay To WIN
					</h1>
					<p class="text">
							Play, Invest,Exchange and Join the
							Contest with high rewards at Dooplo!	
					</p>
					<div class="links">
						<Link href="/">
						<a  class="mybtn1 link1">Get Started Now!</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-7">
			<div class="hero-img2 d-block d-md-none">
				<img src="assets/images/heroarea.png" alt=""/>
			</div>
			<div class="hero-img d-none d-md-block">
				<img class="img-fluid full-image" src="assets/images/heroarea.png" alt=""/>
				<img class="shape phone" src="assets/images/h-shapes/phone.png" alt=""/>
				<img class="shape man" src="assets/images/h-shapes/man222.png" alt=""/>
				<img class="shape ripple" src="assets/images/h-shapes/ripple.png" alt=""/>
				<img class="shape ripple2" src="assets/images/h-shapes/ripple1.png" alt=""/>
				<img class="shape bitcoin1" src="assets/images/h-shapes/bitcoin1.png" alt=""/>
				<img class="shape bitcoin2" src="assets/images/h-shapes/bitcoin2.png" alt=""/>
				<img class="shape shape-icon" src="assets/images/h-shapes/shape.png" alt=""/>
				<img class="shape award-bg" src="assets/images/h-shapes/award/bg.png" alt=""/>
				<img class="shape award" src="assets/images/h-shapes/award/award.png" alt=""/>
				<img class="shape gift-bg" src="assets/images/h-shapes/giftbox/bg.png" alt=""/>
				<img class="shape gift" src="assets/images/h-shapes/giftbox/gift.png" alt=""/>
				<img class="shape shield-bg" src="assets/images/h-shapes/shield/bg.png" alt=""/>
				<img class="shape shield" src="assets/images/h-shapes/shield/shield.png" alt=""/>
			</div>
		</div>
	</div>
</div>
</div>
<section class="featured-game">
	
		<div class="features">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="feature-box">
							<div class="feature-box-inner">
								<div class="row">
									<div class="col-lg-4 col-md-6">
										<div class="single-feature">
											<div class="icon one">
												<img src="assets/images/feature/icon1.png" alt=""/>
											</div>
											<div class="content">
												<h4 class="title">
													Exclusive Offer
												</h4>
												<a href="#" class="link">read more <i class="fas fa-arrow-right"></i></a>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-6">
										<div class="single-feature">
											<div class="icon two">
												<img src="assets/images/feature/icon2.png" alt=""/>
											</div>
											<div class="content">
												<h4 class="title">
													Provably Fair
												</h4>
												<a href="#" class="link">read more <i class="fas fa-arrow-right"></i></a>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-6">
										<div class="single-feature">
											<div class="icon three">
												<img src="assets/images/feature/icon3.png" alt=""/>
											</div>
											<div class="content">
												<h4 class="title">
														24/7 Support
												</h4>
												<a href="#" class="link">read more <i class="fas fa-arrow-right"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-md-10">
					<div class="section-heading">
						<h5 class="subtitle">
								Try to check out our
						</h5> 
						<h2 class="title">
								featured games
						</h2>
						<p class="text">
								Check out our latest featured game! To meet today's challenges & earn cryptocurrency. Top 10 players receive prizes every hour!
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="game-slider">
						<div class="item">
							<div class="single-game">
								<img src="assets/images/game/icon1.png" alt=""/>
								<a href="#" class="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div class="item">
							<div class="single-game">
									<img src="assets/images/game/icon2.png" alt=""/>
									<a href="#" class="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div class="item">
							<div class="single-game">
									<img src="assets/images/game/icon3.png" alt=""/>
									<a href="#" class="mybtn2">PLay NoW !</a>
							</div>
						</div>
						<div class="item">
							<div class="single-game">
									<img src="assets/images/game/icon2.png" alt=""/>
									<a href="#" class="mybtn2">PLay NoW !</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
	
    )
}
