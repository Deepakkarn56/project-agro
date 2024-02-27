import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Image from "next/image";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from "../src/sliderProps";

const Index = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Section ======--> */}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h3 className="wow fadeInUp mb-0" data-wow-delay="20ms">
                    "Experience the World's Flavors
                  </h3>
                  <h3 className="wow fadeInDown">
                    with Eros Agro - Where Quality Spices Meet
                    <h4>
                      Global Excellence!"  below the welcome to  eros agro!.
                    </h4>
                  </h3>

                  <p className="tags">
                    <span>Popular Categories:</span>
                    <a href="#">Spices</a>,<a href="#">Herbs</a>,
                    <a href="#">SuperFoods</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Section ======--> */}
      {/* <!--====== Start Category Section ======--> */}

      {/* intro */}
      <div className="intros">
        <div className="headings">
          <h2>Welcome to Eros Agro</h2>
        </div>
        <div className="contents">
          <p>
            As a premier spice export company, we are dedicated to providing you
            with the finest quality spices sourced from around the globe. Our
            extensive network of trusted manufacturers ensures that we bring you
            spices renowned for their rich flavours, exceptional aroma, and
            superior quality.
          </p>
          <p>
            At Eros Agro, excellence is our commitment at every step of the
            process. From meticulous selection and processing to stringent
            quality control measures, we strive for perfection in every batch we
            deliver. Whether you're a wholesaler, distributor, or retailer, our
            diverse range of spices is sure to tantalise taste buds and elevate
            culinary experiences to new heights.
          </p>
          <p>
            Join us at Eros Agro, where flavour meets global excellence, and let
            us embark on a journey of culinary delight together.
          </p>
        </div>
      </div>
      {/* newwwwwww  three cardsss*/}
      <section className="listing-grid-area pt-50 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Flavorful Nutritional Trio</h2>
              </div>
            </div>
          </div>
          <div className="row rowss">
            {/* Existing Card  1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items"
                data-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/spice.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content contents">
                  <h3 className="title">
                    <Link href="/spices">
                      <a>Spices</a>
                    </Link>
                  </h3>
                  <span className="price">
                    Explore a world of culinary delight with Eros Agro's premium
                    spices. From the rich aroma of whole cloves to the fiery
                    kick of ground chili, our carefully curated selection
                    guarantees to enhance every dish with exceptional flavor and
                    quality. Elevate your cooking experience with Eros Agro
                    spices, sourced from the finest growers around the globe.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items"
                data-wow-delay="20ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/herbs.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/herbs">
                      <a>herbs</a>
                    </Link>
                  </h3>
                  <span className="price">
                    Embrace the essence of nature's green treasures with Eros
                    Agro's diverse assortment of herbs. From the soothing
                    properties of chamomile to the aromatic allure of basil, our
                    collection promises to infuse your culinary creations and
                    wellness rituals with freshness and flavor. Explore the
                    world of herbs with Eros Agro, where each leaf tells a story
                    of pure botanical bliss.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items"
                data-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/superfoods.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/superfood">
                      <a>SuperFoods</a>
                    </Link>
                  </h3>
                  <span className="price">
                    Revitalize your body and mind with Eros Agro's premium
                    selection of superfoods. From the antioxidant-rich goodness
                    of acai berries to the energy-boosting power of maca powder,
                    our range offers an array of nutrient-packed options to fuel
                    your wellness journey. Experience the transformative
                    benefits of superfoods with Eros Agro, sourced with care and
                    crafted for your vitality.
                  </span>
                </div>
              </div>
            </div>
            {/* New Card 4 (Duplicate of Existing Card) */}

            {/* card 6 */}
          </div>
        </div>
      </section>

      {/* spices Menus */}
      {/* <section className="category-area">
        <div className="container">
          <div className="category-wrapper-one wow fadeInDown">
            <div className="row no-gutters">
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <Image
                        src="/assets/images/logo/pepper.png"
                        alt="Listing Image"
                        width={800}
                        height={700}
                      />
                    </div>
                    <h6>Spices</h6>
                  </div>
                  <Link href="spices">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <h6>
                    Explore a world of culinary delight with Eros Agro's premium
                    spices. From the rich aroma of whole cloves to the fiery
                    kick of ground chili, our carefully curated selection
                    guarantees to enhance every dish with exceptional flavor and
                    quality. Elevate your cooking experience with Eros Agro
                    spices, sourced from the finest growers around the globe.
                  </h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <Image
                        src="/assets/images/logo/herb.png"
                        alt="Listing Image"
                        width={800}
                        height={700}
                      />
                    </div>
                    <h6>Herbs</h6>
                  </div>
                  <Link href="/herbs">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <h6>
                    Embrace the essence of nature's green treasures with Eros
                    Agro's diverse assortment of herbs. From the soothing
                    properties of chamomile to the aromatic allure of basil, our
                    collection promises to infuse your culinary creations and
                    wellness rituals with freshness and flavor. Explore the
                    world of herbs with Eros Agro, where each leaf tells a story
                    of pure botanical bliss.
                  </h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <Image
                        src="/assets/images/logo/food.png"
                        alt="Listing Image"
                        width={800}
                        height={700}
                      />
                    </div>
                    <h6>SuperFoods</h6>
                  </div>
                  <Link href="/superfood">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <h6>
                     Revitalize your body and mind with Eros Agro's premium
                    selection of superfoods. From the antioxidant-rich goodness
                    of acai berries to the energy-boosting power of maca powder,
                    our range offers an array of nutrient-packed options to fuel
                    your wellness journey. Experience the transformative
                    benefits of superfoods with Eros Agro, sourced with care and
                    crafted for your vitality
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!--====== End Category Section ======--> */}
      {/* <!--====== Start Listing Section ======--> */}
      <section className="listing-grid-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mt-4">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Spices</h2>
              </div>
            </div>
          </div>
          <div className="row rowss">
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items"
                data-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/wholespices.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content contents">
                  <h3 className="title">
                    <Link href="/listing-map">
                      <a>Whole Spices</a>
                    </Link>
                  </h3>

                  <span className="price">
                    Eros Agro offers an exquisite array of Whole Spices
                    meticulously sourced and selected for their superior quality
                    and intense flavour profiles. From the rich warmth of whole
                    cumin seeds to the vibrant aroma of whole cardamom pods our
                    collection promises to elevate every dish to new heights of
                    culinary excellence. With a steadfast commitment to purity
                    and freshness we ensure that each spice maintains its
                    natural essence providing an unforgettable sensory
                    experience with every sprinkle. Discover the essence of
                    authentic flavours with Eros Agros Whole Spices where
                    quality and taste converge to inspire remarkable culinary
                    creations.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-item listing-items"
                data-wow-delay="20ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/oilseedsss.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-grid">
                      <a>Oil Seeds</a>
                    </Link>
                  </h3>

                  <span className="price">
                    Eros Agro presents a premium selection of Oil Seeds sourced
                    from the finest regions to bring exceptional quality to your
                    table. Our meticulously chosen seeds offer a wealth of
                    nutritional benefits and culinary versatility perfect for
                    enhancing a variety of dishes. From the rich texture of
                    sesame seeds to the wholesome goodness of sunflower seeds
                    each variety is packed with flavour and freshness. With our
                    commitment to quality and purity you can trust Eros Agro to
                    deliver oil seeds that meet the highest standards of
                    excellence. Elevate your cooking experience with our premium
                    Oil Seeds and unlock a world of culinary possibilities.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-item listing-items"
                data-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/blendedspices.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Blended Spices</a>
                    </Link>
                  </h3>

                  <span className="price">
                    Eros Agro presents an exquisite range of Blended Spices
                    expertly crafted to add depth and complexity to your
                    culinary creations. Our blends combine premium ingredients
                    in perfect harmony offering a symphony of flavours that
                    delight the palate. From traditional favourites to
                    innovative blends each spice mixture is carefully curated to
                    deliver a unique and unforgettable taste experience. With
                    Eros Agros commitment to quality and authenticity you can
                    trust that every blend will elevate your dishes to new
                    heights of flavour sophistication. Explore the artistry of
                    spice blending with Eros Agro where every blend tells a
                    story of culinary excellence.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== End Features Section ======--> */}
      {/* <!--====== Start Place Section ======--> */}
      <section className="place-area mb-30">
        <div className="container-fluid place-container p-0">
          <div className="row justify-content-center">
            <div className="col-lg-8 ">
              <div className="section-title text-center mb-4 wow fadeInUp">
                <h2>New Products</h2>
              </div>
            </div>
          </div>
          <Slider
            {...PlaceSliderOne}
            className="place-slider-one wow fadeInDown"
          >
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/moringa.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Moringa Seeds/Leaf/Powder</h3>
                    <Link href="/moringa">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/quonina.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Quinoa Seeds</h3>
                    <Link href="/quinoa">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/psyllum.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Psyllum Husk & Powder</h3>
                    <Link href="/psyllum">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/bay.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Bay Leaf</h3>
                    <Link href="/bayLeaf">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* <!--====== End Popular Listing Section ======--> */}
      {/* <!--====== Start Intro Video Section ======--> */}
      <section className="intro-video">
        <div
          className="intro-wrapper-one bg_cover pt-115"
          style={{ backgroundImage: `url(assets/images/spices/abc.jpg)` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="intro-content-box intro-content-box-one wow fadeInRight">
                  <div className="section-title section-title-left section-title-white mb-35">
                    <h2>
                      Over the years we have been winning hearts through our all
                      over world customer services
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Intro Video Section ======--> */}
      {/* <!--====== Start Newsletter Section ======--> */}
      <section className="newsletter-area">
        <div className="container">
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              backgroundImage: `url(assets/images/bg/newsletter-bg-1.jpg)`,
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="content">
                    <h2>Get Special Offers</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Enter Address"
                      name="email"
                      required
                    />
                    <i className="ti-location-pin"></i>
                    <Link href="https://mail.google.com/mail/u/0/?view=cm&to=export%40erosagro.com&su=Regarding%20Special%20Offers&body=Hello%20there,%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20wanted%20to%20know%20about%20special%20Offers">
                      <a className="main-btn icon-btn">Subscribe</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== End Client Section ======--> */}
      {/* <!--====== Start Blog Section ======--> */}
      <section className="blog-area pt-50 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <h2>BLOGS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="10ms"
              >
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <a>
                      <Image
                        src="/assets/images/spices/top_12.jpg"
                        alt="Blog Image"
                        width={800}
                        height={700}
                      />
                    </a>
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      22 <span>Nov</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-user"></i>Eros_Spices
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Top 12 Coriander Seeds Benefits</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-agenda"></i>
                          <a href="#">
                            Top 12 Coriander Seeds Benefits A short presentation
                            …
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="20ms"
              >
                <div className="post-thumbnail">
                  <Link href="/blog-details1">
                    <a>
                      <Image
                        src="/assets/images/spices/black_pepper_powder.jpg"
                        alt="Blog Image"
                        width={800}
                        height={700}
                      />
                    </a>
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      22 <span>Nov</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-user"></i>Eros_Spices
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details1">
                      <a>The Black Pepper Benefits: A Healthier You!</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-agenda"></i>
                          <a href="#">
                            Dark pepper which is likewise viewed as the …
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button text-center mt-40">
                <Link href="/blog">
                  <a className="main-btn icon-btn">View Blog</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Blog Section ======--> */}
    </Layout>
  );
};
export default Index;
