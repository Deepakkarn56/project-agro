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
                      src="/assets/images/spices/top_12.jpg"
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
                      Coriander seeds derived from the coriander plant
                      (Coriandrum sativum) are not just a staple spice in
                      kitchens worldwide they also offer an array of impressive
                      health benefits. From aiding digestion to promoting heart
                      health coriander seeds have been valued for their
                      medicinal properties for centuries. Lets delve into the
                      top 12 benefits of incorporating coriander seeds into your
                      diet.
                    </p>
                    <h3 className="title">Rich Source of Antioxidants:</h3>
                    <p>
                      Coriander seeds are packed with antioxidants like
                      flavonoids polyphenols and vitamin C which help combat
                      oxidative stress and prevent cellular damage caused by
                      free radicals.
                    </p>
                    <h3>Supports Digestive Health:</h3>
                    <p>
                      Coriander seeds contain compounds that promote digestive
                      enzymes secretion aiding digestion and relieving
                      gastrointestinal discomfort such as bloating gas and
                      indigestion.
                    </p>
                    <h3> Regulates Blood Sugar Levels</h3>
                    <p>
                      Research suggests that coriander seeds may help regulate
                      blood sugar levels by increasing insulin secretion and
                      improving glucose uptake in cells, making them beneficial
                      for individuals with diabetes or insulin resistance.
                    </p>
                    <h3>Anti-inflammatory Properties:</h3>
                    <p>
                      The anti-inflammatory properties of coriander seeds help
                      reduce inflammation in the body potentially easing
                      symptoms of inflammatory conditions like arthritis and
                      inflammatory bowel disease.
                    </p>
                    <h3>Enhances Heart Health:</h3>
                    <p>
                      Coriander seeds are rich in heart-healthy nutrients like
                      potassium which helps regulate blood pressure and fibre
                      which aids in lowering cholesterol levels thus reducing
                      the risk of cardiovascular diseases.
                    </p>
                    <h3> Aids Weight Loss:</h3>
                    <p>
                      The fibre content in coriander seeds promotes feelings of
                      fullness and satiety making them a valuable addition to
                      weight loss diets by reducing calorie intake and promoting
                      healthy weight management.
                    </p>
                    <h3> Improves Skin Health:</h3>
                    <p>
                      Coriander seeds detoxifying properties help purify the
                      blood and eliminate toxins, promoting clearer skin and
                      reducing the risk of skin conditions like acne and eczema.
                    </p>
                    <h3>Boosts Immune Function:</h3>
                    <p>
                      The immune-boosting properties of coriander seeds
                      attributed to their high vitamin C content help
                      strengthen the bodys defence mechanisms making it more
                      resilient to infections and illnesses.
                    </p>

                    <h3>Supports Brain Health:</h3>
                    <p>
                      Coriander seeds contain nutrients like vitamin K and
                      calcium, essential for maintaining brain function and
                      promoting cognitive health potentially reducing the risk
                      of neurodegenerative diseases like Alzheimers.
                    </p>
                    <h3>Relieves Menstrual Discomfort:</h3>
                    <p>
                      Coriander seeds anti-inflammatory and analgesic
                      properties may help alleviate menstrual cramps and
                      discomfort providing natural relief for women during
                      their menstrual cycles.
                    </p>
                    <h3>Promotes Eye Health:</h3>
                    <p>
                      The vitamin A content in coriander seeds supports eye
                      health by promoting good vision reducing the risk of
                      age-related macular degeneration and protecting the eyes
                      from oxidative damage.
                    </p>
                    <h3>Alleviates Anxiety and Improves Sleep:</h3>
                    <p>
                      Coriander seeds contain compounds like linalool known for
                      their calming and sedative effects which may help reduce
                      anxiety levels promote relaxation and improve sleep
                      quality.
                    </p>
                    <h3>Conclusion:</h3>
                    <p>
                      From aiding digestion to promoting heart health and
                      relieving menstrual discomfort the benefits of coriander
                      seeds are truly remarkable. Incorporating these versatile
                      seeds into your diet can contribute to overall health and
                      well-being. Whether consumed whole, ground or as a
                      flavorful spice in cooking, harness the power of coriander
                      seeds to unlock their full potential and enjoy a healthier
                      lifestyle.
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
