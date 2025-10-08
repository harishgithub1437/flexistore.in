import React from 'react'
import Centriti from "../assets/Centriti.png"
import Multybyte from "../assets/Multybyte.png"
import "../styles/Casestudy.css"
function Casestudy() {
  return (
    <div>
        	<section class="case-study-section py-5" id="case">
		<div class="container ">
			<div class="row align-items-center g-4 py-4">
				{/* <!-- Left Column: Image --> */}
				<div class="col-md-6">
					<div class="position-relative rounded-4 bg-white p-2">
						<img src={Multybyte} alt="Case Study" class="img-fluid rounded "/>
					</div>
				</div>

				{/* <!-- Right Column: Content --> */}
				<div class="col-md-6">
					<div class="section-title text-start mb-2">
						<h2 class="text-white">Case Study: <span class="gradiant-texts"> Multybyte </span></h2>
					</div>

					{/* <!-- Stats Boxes --> */}
					<div class="row align-items-stretch text-center my-4">
						<div class="col-4">
							<div class="cases-bg-cards h-100 text-white rounded p-3">
								<h3 class="fw-bold">+50%</h3>
								<small class="mb-0">B2B orders</small>
							</div>
						</div>
						<div class="col-4">
							<div class="cases-bg-cards h-100 text-white rounded p-3">
								<h3 class="fw-bold">+70%</h3>
								<small>Revenue Growth</small>
							</div>
						</div>
						<div class="col-4">
							<div class="cases-bg-cards h-100 text-white rounded p-3">
								<h3 class="fw-bold">+41.7%</h3>
								<small>Customer Retention Rate</small>
							</div>
						</div>
					</div>

					{/* <!-- Testimonial Card --> */}
					<div class="cases-bg-cards text-white rounded p-3 mb-3">
						<i class="fa-regular fa-message fs-4 mb-2 shadow" style={{color: "#e18821"}}></i>
						<p class="fst-italic test-text mb-3">"While exploring B2B and B2C eCommerce solutions, I found
							FlexiStore to be incredibly efficient. It had all the essential features we needed to launch
							quickly and scale smoothly. The platform was flexible, intuitive, and perfectly aligned with
							our business goals."</p>
						<div class="d-flex align-items-center">
							<div class="text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{width: "35px", height: "35px", backgroundColor: "#e18821"}}>
								<strong>J</strong>
							</div>
							<div class="user-info">
								<strong>Jeevan</strong><br/>
								<small>Founder, Multybyte</small>
							</div>
						</div>
					</div>

					{/* <!-- Read More Link --> */}
					<a href="https://www.multybyte.com/" target="_blank" class=" text-decoration-none" style={{color: "#e18821"}}>View Website <i class="fas fa-arrow-right mx-1"></i></a>
				</div>
			</div>

			<hr/>

			<div class="row align-items-center g-4 py-4">
				{/* <!-- Left Column: Image --> */}
				<div class="col-md-6">
					<div class="position-relative rounded-4 bg-white p-2">
						<img src={Centriti} alt="Case Study" class="img-fluid rounded "/>
					</div>
				</div>

				{/* <!-- Right Column: Content --> */}
				<div class="col-md-6">
					<div class="section-title text-start mb-2">
						<h2 class="text-white">Case Study: <span class="gradiant-texts"> Centriti </span></h2>
					</div>

					{/* <!-- Stats Boxes --> */}
					<div class="row align-items-stretch text-center my-4">
						<div class="col-4">
							<div class="cases-bg-cards h-100 text-white rounded p-3">
								<h3 class="fw-bold">+60%</h3>
								<small class="mb-0">B2B orders</small>
							</div>
						</div>
						<div class="col-4">
							<div class="cases-bg-cards h-100 text-white rounded p-3">
								<h3 class="fw-bold">+40%</h3>
								<small>MoM Revenue Growth</small>
							</div>
						</div>
						<div class="col-4">
							<div class="cases-bg-cards h-100 text-white rounded p-3">
								<h3 class="fw-bold">+60%</h3>
								<small>Customer Retention Rate</small>
							</div>
						</div>
					</div>

					{/* <!-- Testimonial Card --> */}
					<div class="cases-bg-cards text-white rounded p-3 mb-3">
						<i class="fa-regular fa-message fs-4 mb-2 shadow" style={{color: "#e18821"}}></i>
						<p class="fst-italic test-text mb-3">"FlexiStore helped us launch Centriit as a full-fledged B2B
							platform for HoReCa with speed and precision. The platform handled our complex pricing and
							bulk ordering needs effortlessly. It gave us the confidence to go digital without
							compromise."</p>
						<div class="d-flex align-items-center">
							<div class="text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{width: "35px", height: "35px", backgroundColor:"#e18821"}}>
								<strong>DJ</strong>
							</div>
							<div class="user-info">
								<strong>Diljeet</strong><br/>
								<small>Founder, Centriti</small>
							</div>
						</div>
					</div>

					{/* <!-- Read More Link --> */}
					<a href="https://www.centriti.in/" target="_blank" class=" text-decoration-none" style={{color: "#e18821"}}>View
						Website <i class="fas fa-arrow-right mx-1"></i></a>
				</div>
			</div>
		</div>


	</section>
    </div>
  )
}

export default Casestudy