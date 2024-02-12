import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from 'next/image';

const ListingMap = () => {
  return (
    <Layout>
      <PageBanner title={"Whole Spices"} pageName={"Products"} />
      
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Spices</h2>
              </div>
            </div>
          </div>
          <div className="row rowss">
            {/* Existing Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="10ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/ajwain.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content contents">
                  <h3 className="title">
                    <Link href="/listing-map">
                      <a>Ajwain Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                    We are the exporter of ajwain seeds. It is a spice hub and has attained global fame for the same. We are a sustained provider of Indian spices packed with quality and goodness. Ajwain seeds have a place of utmost importance in spice culture since ages. They are botanically known as Trachyspermum ammi and belong to Apieaceae.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="20ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/blacpepper.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-grid">
                      <a>Black Pepper</a>
                    </Link>
                  </h3>
                  <span className="price">
                    We are the exports premium quality of black pepper in India and across the world. One of the most tangling peppery Indian spices is Black Pepper. The botanical name of Black Pepper is Piper nigrum L. It belongs to Piperacea family. Black peppers are sun dried berries of pepper plant.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="30ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/cloves.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Cloves</a>
                    </Link>
                  </h3>
                  <span className="price">
                    We are the exporter of best quality handpicked cloves. The premium packing assures that is aroma and flavor remains intact. Our superb quality cloves are selected and handpicked for sustaining its purity. The botanical name of Clove is Syzygium aromaticum and it belongs to Myrtaceae family. Cloves are unopened flower bud of a tropical tree.
                  </span>
                </div>
              </div>
            </div>
            {/* New Card 4 (Duplicate of Existing Card) */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="40ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/coriander.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/new-listing">
                      <a>Coriander Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are one of the exporters of naturally selected and assorted best quality coriander seeds. We thrive to keep our standards high in terms of the product richness and quality. We maintain its basic aroma and flavor till it reaches you. The botanical name of coriander seeds is Coriandrum sativum L. It belongs to family Apiaceae. The plant has two types of seeds.
                  </span>
                </div>
              </div>
            </div>
            {/* New Card 5 (Duplicate of Existing Card) */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="50ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/Cumin.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/another-new-listing">
                      <a>Cumin Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of premium quality of cumin seeds to India and across the world. We deliver high quality cumin seeds to our customers and we never compromise for the same. We are the pioneer exporter of cumin seeds globally and we believe in achieving customer satisfaction through our constant efforts to keep up the quality.
                  </span>
                </div>
              </div>
            </div>
            {/* card 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="50ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/blended_spices.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/another-new-listing">
                      <a>Turmeric</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Discover the golden elixir of health with our premium Turmeric. Known for its anti-inflammatory properties and vibrant colour, our turmeric adds not only depth of flavour but also a nutritional boost to your dishes.
                  </span>
                </div>
              </div>
            </div>
            {/* card 7 */}
           
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ListingMap;
