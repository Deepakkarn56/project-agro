import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-wrapper-one dark-black pt-90">
        <div className="footer-widget pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget about-widget mb-40 wow fadeInUp"
                  data-wow-delay="10ms"
                >
                  <h4 className="widget-title">About Eros Agro</h4>
                  <ul className="button">
                    <li>
                      <a>
                        Eros Agro is the exporter of superior quality of Whole
                        spices. We always strive to keep the natural taste and
                        fragrance of product intact.
                      </a>
                    </li>
                  </ul>
                  <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul className="social-link">
                      <li>
                        <a href="mailto:erosagro64@gmail.com">
                          <i className="ti-email"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/eros-agro-1b71872b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByEYKYdkLQ46SwBfnjpJhrg%3D%3D">
                          <i class="ti-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Erosagro">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/erosagro/?next=%2F&hl=en-gb">
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget recent-post-widget mb-40 wow fadeInUp"
                  data-wow-delay="20ms"
                >
                  <h4 className="widget-title">Get In Touch</h4>
                  <ul className="post-widget-list">
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span className="posted-on">
                          <h6 className="title">
                            <Link href="/blog-details">
                              <a>
                                Eros Agro C/O Eros Trading Company, Village
                                Bajra, Rahon Road, Ludhiana, Punjab - 141007
                              </a>
                            </Link>
                          </h6>
                        </span>
                      </div>
                    </li>
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="+91 9914826464">
                            <i className="">
                              <h6 className="title ti-headphone">
                                {" "}
                                +91 9914826464
                              </h6>
                            </i>
                          </a>
                        </span>
                        <span className="posted-on">
                          <a href="mailto:erosagro64@gmail.com">
                            <i className="">
                              <h6 className="title ti-email">
                                {" "}
                                export@erosagro.com
                              </h6>
                            </i>
                          </a>
                        </span>
                        <span>
                          <a href="www.erosagro.com">
                            <i className="">
                              <h6 className="title ti-link">
                                {" "}
                                www.erosagro.com
                              </h6>
                            </i>
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget categories-widget mb-40 wow fadeInUp"
                  data-wow-delay="30ms"
                >
                  <h4 className="widget-title">Navigation Menu</h4>
                  <ul className="categories-link">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/our products">
                      <a>Our Products</a>
                      </Link>
                    
                    </li> */}
                    <li>
                      <Link href="/blog">
                        <a>Blogs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a href="#">Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay="40ms"
                >
                  <h4 className="widget-title">Chat With Us</h4>
                  <p>Chat With Us Through WhatsApp</p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="message"
                        className="form_control"
                        placeholder="Enter Message"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <button
                        className="main-btn"
                        onClick={() =>
                          (window.location.href = "https://wa.me/+919914826464")
                        }
                      >
                        Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2022. All rights reserved to{" "}
                    <span>Eros Agro</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
