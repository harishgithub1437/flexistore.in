import React from 'react'
import webimgflexi from  "../assets/Webimageflexistore.png"
import "../styles/Homebody.css"

function Homebody() {
  return (
    <div>
          
	<section class="business-model-section"  id="models" style={{backgroundColor: "#fafafa"}}>
		<div class="container">
			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="section-title text-start">
						<h3 class="fw-bold my-4">One Platform for <span class="gradiant-texts"> All Business
								Models</span></h3>
						<p class="text-muted fs-6">
							FlexiStore is a comprehensive e-commerce solution that seamlessly integrates B2B, B2C, and
							B2B2C business models on a single platform.
						</p>
					</div>

					
					<div class="business-model-slider row gx-3 gy-3 align-items-stretch">
						<div class="col-md-6">
							<div class="fs-card h-100">
								<div>
									<div class="d-flex align-items-center mb-3">
										<div class="icon-box-model me-3">
											<i class="fa-solid fa-building"></i>
										</div>
										<h6 class="mb-0 fw-bold">B2B Commerce</h6>
									</div>
									<p class="text-muted">Wholesale ordering, tiered pricing, and approval workflows for
										business buyers.</p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="fs-card h-100">
								<div>
									<div class="d-flex align-items-center mb-3">
										<div class="icon-box-model me-3">
											<i class="fa-solid fa-user"></i>
										</div>
										<h6 class="mb-0 fw-bold">B2C Commerce</h6>
									</div>
									<p class="text-muted">Intuitive shopping experience with personalization for retail
										customers.</p>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="fs-card">
								<div>
									<div class="d-flex align-items-center mb-3">
										<div class="icon-box-model me-3">
											<i class="fa-solid fa-users"></i>
										</div>
										<h6 class="mb-0 fw-bold">B2B2C Commerce</h6>
									</div>
									<p class="text-muted">Unified platform allowing businesses to sell to both other
										businesses and end consumers with tailored experiences for each.</p>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div class="col-md-6">
					<div class="platform-bg mx-auto text-center rounded-4">

						<img src={webimgflexi} class="img-fluid mx-auto" width="500px" alt="hero-image" loading="lazy"/>
						
						
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Homebody