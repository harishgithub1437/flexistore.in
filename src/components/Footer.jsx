import React from 'react'
import "../styles/Footer.css"
import Logo from "../assets/Logo.png"

function Footer() {
  return (
    <div>
        	<footer class="easydata-footer">
		<div class="container">
			<div class="footer-columns">
				{/* <!-- Product Column --> */}
				<div class="footer-column">
					<div class="footer-brand">
						<div>
							<a class="navbar-brand" href="/"><img src={Logo} alt="logo" class="img-fluid" width="180px"/></a>
						</div>
						<p class="mb-3">
							Build your E-commerce store with Flexi Store
						</p>
					</div>

				</div>

				{/* <!-- Product Column --> */}
				{/* <!-- <div class="footer-column">
					<h3>Solutions</h3>
					<ul>
						<li><a href="#">B2B E-Commerce</a></li>
						<li><a href="#">B2C E-Commerce</a></li>
						<li><a href="#">Mobile Apps</a></li>
						<li><a href="#">Marketplace</a></li>
					</ul>
				</div> --> */}

				{/* <!-- Resources Column --> */}
				{/* <!-- <div class="footer-column">
					<h3>Company</h3>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Case Studies</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div> --> */}

				{/* <!-- Contact Column --> */}
				<div class="footer-column">
					<h3>Contact</h3>
					<ul class="contact-info">
						<li>
							<i class="fas fa-phone-alt"></i>
							<a href="tel:+919958131585">+91 9958131585</a>
						</li>
						<li>
							<i class="fas fa-envelope"></i>
							<a href="mailto:hello@flexistore.in">hello@flexistore.in</a>
						</li>
						{/* <!-- 
						<li>
							<i class="fas fa-map-marker-alt"></i>
							<span>123, Commerce St. tech City</span>
						</li> --> */}
					</ul>
				</div>
			</div>

			<div class="footer-bottom">
				<div>
					<p>© 2025 FlexiStore. All rights reserved.</p>
				</div>
				{/* <!-- <div class="d-flex gap-4 fs-4 social-icons">
					<a href="https://www.facebook.com/profile.php?id=61577001624077" target="_blank"><i
							class="fab fa-facebook"></i></a>
					<a href="https://www.instagram.com/compact_accounting/" target="_blank"><i
							class="fab fa-instagram"></i></a>
					<a href="https://www.linkedin.com/company/compact-accounting-private-limited/" target="_blank"><i
							class="fab fa-linkedin-in"></i></a>
				</div> --> */}

			</div>
		</div>
	</footer>
    </div>
  )
}

export default Footer