import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/ContactModel.css"

const ContactModel = () => {
	return (
		<>

			{/* Modal */}
			<div
				className="modal fade strategy-modal"
				id="demoFormModal"
				tabIndex="-1"
				aria-labelledby="strategyCallModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable model-sm  ">
					<div className="modal-content p-3">
						{/* Header */}
						<div className="modal-header">
							<h5 className="modal-title" id="strategyCallModalLabel">
								Book a Free Strategy Call
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>

						{/* Body */}
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label htmlFor="fullName" className="form-label">
										Full Name*
									</label>
									<input
										type="text"
										className="form-control"
										id="fullName"
										placeholder="Full Name"
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="businessEmail" className="form-label">
										Business Email*
									</label>
									<input
										type="email"
										className="form-control"
										id="businessEmail"
										placeholder="you@company.com"
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="phoneNumber" className="form-label">
										Phone Number*
									</label>
									<input
										type="tel"
										className="form-control"
										id="phoneNumber"
										placeholder="Phone Number"
										required
									/>
								</div>

								<div className="mb-4">
									<label htmlFor="businessType" className="form-label">
										Business Type*
									</label>
									<select
										className="form-select"
										id="businessType"
										required
										defaultValue=""
									>
										<option value="" disabled>
											Select Your Business Type
										</option>
										<option>B2B</option>
										<option>B2C</option>
										<option>B2B2C</option>
										<option>OTHERS</option>
									</select>
								</div>

								<button type="submit" className="submit-btn">
									Schedule My Free Call
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactModel;
