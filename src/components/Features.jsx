import React, { useState } from "react";
import "../styles/Feature.css";
import Productimg from "../assets/productmanagment.png";
import Shopingexp from "../assets/shoppingexperiance.webp";
import Checkooutexp from "../assets/checkoutexperiance.jpg";
import B2B from "../assets/b2b.png";
import Couponweb from "../assets/coupon.webp";
import Admintool from "../assets/admintools.webp";
import Helpdesk from "../assets/helpdesk.png";
import Mobileapp from "../assets/mobileapp.png";
import Warranty from "../assets/Warranty.png";
import Creditfacility from "../assets/creditfacility.png";

function Features() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      {/* <!--complete features section start--> */}
      <section className="features-section" style={{ backgroundColor: "#fafafa" }} id="features">
        <div className="container">
          <div className="section-title">
            <h2 className="my-4">Complete <span className="gradiant-texts"> Features</span></h2>
            <p className="subtitle">
              Everyting you need to run a successful online business
            </p>
          </div>
          <div className="row g-4 ">

            {/* <!-- Swiper Tab Navigation --> */}
            <div className="swiper feature-tabs mb-4">
              <div className="swiper-wrapper">
                <div
                  className={`swiper-slide ${activeTab === "tab1" ? "active" : ""}`}
                  data-tab="tab1"
                  onClick={() => setActiveTab("tab1")}
                >
                  Product Management
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab2" ? "active" : ""}`}
                  data-tab="tab2"
                  onClick={() => setActiveTab("tab2")}
                >
                  Shopping Experience
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab3" ? "active" : ""}`}
                  data-tab="tab3"
                  onClick={() => setActiveTab("tab3")}
                >
                  Checkout & Shipping
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab4" ? "active" : ""}`}
                  data-tab="tab4"
                  onClick={() => setActiveTab("tab4")}
                >
                  B2B Features
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab5" ? "active" : ""}`}
                  data-tab="tab5"
                  onClick={() => setActiveTab("tab5")}
                >
                  Promotions & Loyalty
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab6" ? "active" : ""}`}
                  data-tab="tab6"
                  onClick={() => setActiveTab("tab6")}
                >
                  Admin Tools
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab7" ? "active" : ""}`}
                  data-tab="tab7"
                  onClick={() => setActiveTab("tab7")}
                >
                  Help Desk
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab8" ? "active" : ""}`}
                  data-tab="tab8"
                  onClick={() => setActiveTab("tab8")}
                >
                  NBFC Credit Facility
                  <span className=" ms-2 bg-danger bg-opacity-25 text-danger small px-3 py-2 rounded-pill">Upcoming</span>
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab9" ? "active" : ""}`}
                  data-tab="tab9"
                  onClick={() => setActiveTab("tab9")}
                >
                  Warranty Management
                </div>
                <div
                  className={`swiper-slide ${activeTab === "tab10" ? "active" : ""}`}
                  data-tab="tab10"
                  onClick={() => setActiveTab("tab10")}
                >
                  Mobile App
                </div>
              </div>
            </div>

            {/* <!-- Tab Content --> */}
            <div className="tab-content-area">
              <div className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`} id="tab1">
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Product Management</h3>
                    <p className="text-muted">Organize and manage your product catalog with powerful tools
                      designed for both simple
                      and complex
                      inventories.</p>

                    <div>
                      <ul className="custom-feature-list ps-0">
                        <li>
                          <h6>Multi-category & brand structure</h6>
                          <p>Create unlimited categories, subcategories, and brand hierarchies to
                            organize your products.</p>
                        </li>
                        <li>
                          <h6>Variants & attribute-based inventory</h6>
                          <p>Manage products with multiple variations like size, color, and material
                            with individual inventory tracking.</p>
                        </li>
                        <li>
                          <h6>Related products display</h6>
                          <p>Boost average order value with intelligent product recommendations
                            based on purchase history.</p>
                        </li>
                        <li>
                          <h6>Bulk import/export</h6>
                          <p>Easily manage large catalogs with CSV imports and exports, making
                            product updates quick and efficient.</p>
                        </li>

                      </ul>

                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="">
                      {/* <!-- Replace with icon/image --> */}
                      <img src={Productimg} className="img-fluid rounded-4" alt="product management image" loading="lazy" />
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`} id="tab2">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Shopping Experience</h3>
                    <p className="text-muted">
                      Create intuitive, frictionless shopping experiences that convert browsers into
                      buyers.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Smart filtering & search</h6>
                        <p>Help customers find products quickly with advanced search capabilities and
                          intelligent filters.</p>
                      </li>
                      <li>
                        <h6>Persistent cart & wishlist</h6>
                        <p>Save shopping carts across sessions and devices, allowing customers to pick
                          up where they left off.</p>
                      </li>
                      <li>
                        <h6>Guest & registered checkout</h6>
                        <p>Flexible checkout options to maximize conversion rates while still capturing
                          valuable customer data.</p>
                      </li>
                      <li>
                        <h6>Personalized recommendations</h6>
                        <p>Show customers products they’re likely to be interested in based on their
                          browsing history.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Shopingexp} className="img-fluid rounded-4" alt="shopping experience image" loading="lazy" />
                    </div>


                  </div>
                </div>

                {/* <!-- commented block kept out --> */}
              </div>

              <div className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`} id="tab3">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Checkout & Shipping</h3>
                    <p className="text-muted">
                      Streamline the final steps of the purchase journey with flexible checkout and
                      shipping options.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Multi-step checkout flow</h6>
                        <p>Customizable checkout process optimized for conversion with address
                          validation and saved payment methods.</p>
                      </li>
                      <li>
                        <h6>Pincode/zone delivery rules</h6>
                        <p>Set delivery options, rates, and availability based on customer location with
                          granular control.</p>
                      </li>
                      <li>
                        <h6>Multiple payment options</h6>
                        <p>Support for credit cards, digital wallets, buy-now-pay-later, and other
                          payment methods your customers prefer.</p>
                      </li>
                      <li>
                        <h6>Order tracking & notifications</h6>
                        <p>Keep customers informed with automated updates about their order status and
                          delivery progress.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Checkooutexp} className="img-fluid rounded-4" alt="checkout and shipping image" loading="lazy" />
                    </div>


                  </div>
                </div>

              </div>

              <div className={`tab-pane ${activeTab === "tab4" ? "active" : ""}`} id="tab4">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">B2B Features</h3>
                    <p className="text-muted">
                      Specialized tools for wholesale, distribution, and business-to-business commerce.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Dual pricing (retail + wholesale)</h6>
                        <p>Show different prices based on customer type, with the ability to create
                          custom price lists for specific accounts.</p>
                      </li>
                      <li>
                        <h6>Bulk order cart + tiered pricing</h6>
                        <p>Volume discounts and efficient bulk ordering with quantity breaks and special
                          wholesale-only products.</p>
                      </li>
                      <li>
                        <h6>Approval workflows</h6>
                        <p>Multi-step approval process for B2B purchases with role-based permissions and
                          spending limits.</p>
                      </li>
                      <li>
                        <h6>Quote management</h6>
                        <p>Create, manage, and convert quotes to orders with negotiated pricing and
                          terms for B2B customers.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={B2B} className="img-fluid rounded-4" alt="b2b features image" loading="lazy" />
                    </div>

                  </div>
                </div>

              </div>

              <div className={`tab-pane ${activeTab === "tab5" ? "active" : ""}`} id="tab5">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Promotions & Loyalty</h3>
                    <p className="text-muted">
                      Drive repeat business with powerful marketing and loyalty tools.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Coupons, flash sales, category banners</h6>
                        <p>Multiple promotion types to drive sales with scheduled start/end times and
                          targeted customer segments.</p>
                      </li>
                      <li>
                        <h6>Cashback & referral system</h6>
                        <p>Reward customers for purchases and referrals with store credit, discounts, or
                          other incentives.</p>
                      </li>
                      <li>
                        <h6>Loyalty points program</h6>
                        <p>Build customer retention with points-based rewards that can be redeemed for
                          discounts or exclusive products.</p>
                      </li>
                      <li>
                        <h6>Abandoned cart recovery</h6>
                        <p>Automatically follow up with customers who leave items in their cart to
                          recover potentially lost sales.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Couponweb} className="img-fluid rounded-4" alt="promotions and loyalty image" loading="lazy" />
                    </div>


                  </div>
                </div>

              </div>

              <div className={`tab-pane ${activeTab === "tab6" ? "active" : ""}`} id="tab6">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Admin Tools</h3>
                    <p className="text-muted">
                      Powerful backend tools to manage your business efficiently.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Real-time dashboards & role control</h6>
                        <p>Monitor performance and manage user permissions with customizable dashboards
                          for different team members.</p>
                      </li>
                      <li>
                        <h6>Built-in blog + SEO pages</h6>
                        <p>Content management tools for marketing and SEO with customizable templates
                          and metadata control.</p>
                      </li>
                      <li>
                        <h6>Advanced reporting</h6>
                        <p>Detailed analytics and business intelligence with exportable reports and
                          custom report builders.</p>
                      </li>
                      <li>
                        <h6>Inventory management</h6>
                        <p>Track stock levels, set low-stock alerts, and manage inventory across
                          multiple locations or warehouses.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Admintool} className="img-fluid rounded-4" alt="admin tools image" loading="lazy" />
                    </div>


                  </div>
                </div>

              </div>

              <div className={`tab-pane ${activeTab === "tab10" ? "active" : ""}`} id="tab10">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Mobile App</h3>
                    <p className="text-muted">
                      Extend your reach with native mobile apps for iOS and Android.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Responsive website</h6>
                        <p>Optimized for all screen sizes and devices with a mobile-first design
                          approach for the best user experience.</p>
                      </li>
                      <li>
                        <h6>Native iOS/Android mobile app</h6>
                        <p>Custom-built apps with your branding that provide a seamless shopping
                          experience on mobile devices.</p>
                      </li>
                      <li>
                        <h6>Built to your brand</h6>
                        <p>No generic templates — 100% custom design that reflects your unique brand
                          identity and values.</p>
                      </li>
                      <li>
                        <h6>Push notifications</h6>
                        <p>Engage customers with targeted push notifications about orders, promotions,
                          and personalized offers.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Mobileapp} className="img-fluid rounded-4" alt="mobile app image" loading="lazy" />
                    </div>
                  </div>
                </div>

              </div>

              <div className={`tab-pane ${activeTab === "tab8" ? "active" : ""}`} id="tab8">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">NBFC Credit Facility <span className="bg-danger bg-opacity-25 small px-3 py-2 rounded-pill text-danger fs-6">Coming Soon</span></h3>
                    <p className="text-muted">
                      Integrated NBFC (Non-Banking Financial Company) credit facility that enables retailers and distributors to access instant credit lines for seamless purchasing.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>CIBIL-based credit assessment</h6>
                        <p>Automated credit limit approval through our NBFC partner based on retailer's credit score, business history, and financial profile.</p>
                      </li>
                      <li>
                        <h6>Instant manufacturer payment</h6>
                        <p>NBFC settles manufacturer payments immediately while providing flexible repayment terms to retailers, optimizing cash flow for all parties.</p>
                      </li>
                      <li>
                        <h6>Seamless checkout integration</h6>
                        <p>Simple "Pay with NBFC Credit" option at checkout allows pre-approved retailers to purchase using their credit facility instantly.</p>
                      </li>
                      <li>
                        <h6>Flexible repayment terms</h6>
                        <p>Retailers benefit from flexible payment schedules while manufacturers receive immediate payment, creating a win-win financing solution.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Creditfacility} className="img-fluid rounded-4" alt="help desk image" loading="lazy" />
                    </div>

                  </div>
                </div>

              </div>

              <div className={`tab-pane ${activeTab === "tab9" ? "active" : ""}`} id="tab9">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Warranty Management</h3>
                    <p className="text-muted">
                      Comprehensive warranty tracking and management system for both customers and
                      businesses.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Digital warranty registration</h6>
                        <p>Automated warranty activation upon purchase with digital documentation and
                          proof of purchase storage.</p>
                      </li>
                      <li>
                        <h6>Warranty claim processing</h6>
                        <p>Streamlined claim submission with status tracking and automated notifications
                          throughout the process.</p>
                      </li>
                      <li>
                        <h6>Extended warranty sales</h6>
                        <p>Offer and manage extended warranty programs as an additional revenue stream
                          with automated renewal reminders.</p>
                      </li>
                      <li>
                        <h6>Warranty analytics</h6>
                        <p>Track warranty claim patterns to identify product quality issues and improve
                          future product development.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Warranty} className="img-fluid rounded-4" alt="warranty management image" loading="lazy" />
                    </div>


                  </div>
                </div>

              </div>

              <div className={`tab-pane ${activeTab === "tab7" ? "active" : ""}`} id="tab7">
                <div className="row align-items-start">

                  <div className="col-md-6">
                    <h3 className="fw-bold pb-3">Help Desk</h3>
                    <p className="text-muted">
                      Integrated customer support system to provide exceptional service across all
                      channels.
                    </p>

                    <ul className="custom-feature-list ps-0">
                      <li>
                        <h6>Omnichannel support</h6>
                        <p>Manage customer inquiries from email, chat, phone, and social media in one
                          unified interface.</p>
                      </li>
                      <li>
                        <h6>Ticket management system</h6>
                        <p>Organize, prioritize, and track customer issues with automated routing and
                          escalation workflows.</p>
                      </li>
                      <li>
                        <h6>Knowledge base & self-service</h6>
                        <p>Comprehensive documentation and FAQs with intelligent search to help
                          customers find answers quickly.</p>
                      </li>
                      <li>
                        <h6>Live chat & chatbot integration</h6>
                        <p>Provide instant support with AI-powered chatbots for common questions and
                          seamless handoff to human agents.</p>
                      </li>
                    </ul>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">

                      <img src={Helpdesk} className="img-fluid rounded-4" alt="help desk image" loading="lazy" />
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Features;
