import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner title={"Blog Single"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/freshhubs.jpg"
                      alt="Blog Image"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="entry-content">
                    {/* <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">No Comment</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-id-badge" />
                            <a href="#">Eros_Spices</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-calendar" />
                            <a href="#">22 Nov, 2022</a>
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    <h3 className="title">
                      A short presentation of coriander seeds
                    </h3>
                    <p>
                      In the realm of culinary exploration fresh herbs stand out
                      as vibrant gems not only for their aromatic flavours but
                      also for their remarkable health benefits. At Eros Agro,
                      we believe in harnessing the power of nature to enhance
                      both the taste and nutritional value of our dishes. Join
                      us on a journey through the enriching world of fresh herbs
                      and discover how incorporating them into your cooking can
                      elevate both your palate and your well-being.
                    </p>
                    <h3 className="title">The Nutritional Powerhouses</h3>
                    <p>
                      Fresh herbs are not just culinary delights they are also
                      nutritional powerhouses packed with vitamins minerals and
                      antioxidants essential for overall health. Each herb
                      brings its unique set of nutrients to the table making
                      them invaluable additions to any diet. Basil for example
                      is rich in vitamin K which plays a crucial role in bone
                      health and blood clotting. Meanwhile parsley is loaded
                      with vitamin C an antioxidant that supports immune
                      function and collagen production. By incorporating a
                      variety of fresh herbs into your meals you can ensure a
                      diverse array of nutrients that contribute to your overall
                      vitality
                    </p>
                    <h3>A Boost for Your Immune System:</h3>
                    <p>
                      In today's fast-paced world maintaining a strong immune
                      system is more important than ever. Fortunately fresh
                      herbs can lend a helping hand in bolstering your bodys
                      defences. Many herbs such as thyme and oregano possess
                      antimicrobial properties that help fight off harmful
                      bacteria and viruses. Garlic another potent herb is
                      renowned for its immune-boosting abilities thanks to its
                      allicin content. By infusing your dishes with these
                      immune-supporting herbs you can give your body an extra
                      layer of protection against illness.
                    </p>
                    <h3>Digestive Support:</h3>
                    <p>
                      Good digestion is the cornerstone of overall health and
                      fresh herbs can play a valuable role in supporting
                      digestive function. Mint for instance has long been used
                      to alleviate indigestion and soothe upset stomachs.
                      Similarly ginger is revered for its ability to ease nausea
                      and aid in digestion by stimulating digestive enzymes.
                      Incorporating these herbs into your meals not only adds a
                      burst of flavour but also promotes optimal digestive
                      health.
                    </p>
                    <h3>Heart-Healthy Herbs:</h3>
                    <p>
                      Heart disease remains one of the leading causes of death
                      worldwide making cardiovascular health a top priority for
                      many. Fresh herbs like rosemary and thyme offer
                      cardiovascular benefits thanks to their high antioxidant
                      content. These antioxidants help reduce inflammation and
                      oxidative stress two key factors contributing to heart
                      disease. Additionally studies suggest that herbs like
                      cilantro and parsley may help lower cholesterol levels
                      further supporting heart health.
                    </p>
                    <h3>Mood-Boosting Properties:</h3>
                    <p>
                      In addition to their physical health benefits fresh herbs
                      can also have a positive impact on mental well-being.
                      Certain herbs such as lavender and lemon balm have calming
                      properties that can help reduce stress and anxiety. Others
                      like basil and sage are believed to enhance cognitive
                      function and improve mood. By incorporating these herbs
                      into your cooking you can create meals that nourish both
                      body and mind leaving you feeling refreshed and
                      rejuvenated
                    </p>
                    <h3>Conclusion:</h3>
                    <p>
                      As we have explored the benefits of cooking with fresh herbs
                      extend far beyond flavour enhancement. From bolstering
                      your immune system to supporting heart health and
                      promoting mental well-being these culinary treasures offer
                      a myriad of health benefits that should not be overlooked.
                      At Eros Agro we are passionate about sharing the wonders
                      of fresh herbs with our customers and we encourage you to
                      embark on your own culinary journey with these nutritional
                      powerhouses. So next time you're in the kitchen dont
                      hesitate to reach for a handful of fresh herbs – your
                      taste buds and your body will thank you for it.
                    </p>
                  </div>
                </div>
                <div className="post-navigation">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="next-post post-nav-item"></div>
                    </div>
                  </div>
                </div>

                {/* <div className="comments-respond">
                  <h4 className="comments-heading mb-20">Write a Review</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            name="message"
                            placeholder="Write Message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Type your email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_checkbox">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check1"
                              name="checkbox"
                              defaultChecked=""
                            />
                            <label htmlFor="check1">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget tag-cloud-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Tag</h4>
                  <a href="#">Blended Spices</a>
                  <a href="#">Oil Seeds</a>
                  <a href="#">Whole Spices</a>
                  <a href="#">Other Products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
