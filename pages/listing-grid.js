import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import Image from 'next/image';

const ListingGrid = () => {
  return (
    <Layout>
      <PageBanner title={"Oil Seeds"} pageName={"Products"} />
      <section className="listing-grid-area pt-50 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Oil Seeds</h2>
              </div>
            </div>
          </div>
          <div className="row rowss">
            {/* Existing Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items"
                data-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/black_cumin.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content contents">
                  <h3 className="title">
                    <Link href="/listing-map">
                      <a>Black Cumin/Kalonji</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We is heading a way as a exporter of Black Cumin
                          Seeds. As the health benefits are known to world
                          better, we provide globally the ultimate quality of
                          Black cumin seeds. The botanical name of Black Cumin
                          Seeds also known as Kalonji is Nigella sativa and it
                          belongs to the family Ranunculaceae.
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
                    src="/assets/images/spices/black_mustard.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-grid">
                      <a>Black Mustard Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of Black Mustard Seeds. The seeds
                          are packed with its richness and goodness for you to
                          open it up. We bring you the supreme quality of seeds
                          that satiates the end user. The botanical name of
                          black mustard seeds is Brassica nigra and it belongs
                          to the family Brassicaceae. They are small, round,
                          black or dark brown in color.
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
                    src="/assets/images/spices/nlack_sesame.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Black Sesame Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of rich quality of Black Sesame
                          Seeds. They are globally well known for its
                          traditionally selected nutrient rich black sesame
                          seeds. The botanical name of Black Sesame Seeds is
                          Sesamum indicum and it belongs to family Pedaliaceae.
                          They are spherical in shape and black in color. They
                          are nutty in taste.
                  </span>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items"
                data-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/nlack_sesame.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Hulled Sesame Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Hulled sesame seeds are India’s owns harvesting
                          product since years. We brings to you the premium
                          quality Hulled sesame seeds with Auto Dried process.
                          Hulled Sesame Seeds are Source of most nutritious
                          seeds because of its proteins and valuable minerals.
                          The husk hull (upper skin) of these seeds are removed
                          hence are called as Hulled Sesame Seeds.
                  </span>
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items"
                data-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/natural.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Natural Sesame Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of premium quality, Sortex,
                          carefully macine cleaned natural sesame seeds. The
                          packs of natural sesame seeds ensure good health and
                          purity with itself. We have made to satiate the
                          goodness of sesame seeds at customer end. The
                          botanical name of Natural Sesame Seeds is Sesamum
                          indicum and it belongs to family Pedaliaceae.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

          </Layout>
  );
};
export default ListingGrid;
