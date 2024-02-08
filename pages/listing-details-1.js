import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import ListingDetailsRight from "../src/components/ListingDetailsRight";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from 'next/image';

const ListingDetails1 = () => {
  const [accordionActive, setAccordionActive] = useState("collapseOne");
  const setAccordion = (value) => (value === accordionActive ? "" : value),
    activeAccortion = (value) => (value === accordionActive ? true : false);

  return (
    <Layout>
      <PageBanner title={"Other Products"} pageName={"Products"} />
      <section className="listing-grid-area pt-50 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Other Products</h2>
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
                    src="/assets/images/spices/bay.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content contents">
                  <h3 className="title">
                    <Link href="/listing-map">
                      <a>Bay Leafs</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of top grade Bay Leaves. They are
                          sold as dried whole leaf. We have a selection of
                          quality Bay leaves packed under hygienic condition.
                          The aroma of Bay leaves spread upon opening the pack
                          and satiates the end user. The botanical name of Bay
                          leaf is Laurus nobilis and it belongs to Lauraceae
                          Family.
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
                    src="/assets/images/spices/chickpeas.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-grid">
                      <a>ChickPeas</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of Chickpea/Kabuli Chana globally.
                          The beans are assorted well, cleaned and hygienically
                          packed. Chickpea has nutritive values & rich in
                          protein and fiber as well, which well maintained while
                          mechinally processing to sort the best chickpea to
                          serve best of it. The botanical name of Chickpea/
                          Kabuli chana is Cicer arietinum-garbanzo and it
                          belongs to Fabaceae Family. They are considered as
                          legumes.
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
                    src="/assets/images/spices/green_millet.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Green Millet Bajra</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of supreme quality Green Millet
                          Bajra. The finest millet barja delivered are fresh,
                          odorless and suitable for use directly. Our
                          hygienically packed Bajra grains are free from
                          dirt,stones & weevils. They are cleaned and assorted
                          well before packing. The botanical name of Green
                          Millet Bajra is Pennisetum glaucam and it belongs to
                          Poaceae Family.
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
                    src="/assets/images/spices/moringa.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Moringa Seeds/Leafs/Powder</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the processor and exporter of supreme quality
                          of Moringa seeds, Moringa Powder & its oil. Moringa
                          seed is an important part of Moringa tree, because it
                          contain large amount of protein and iron in it.
                          Moringa seed is present inside the Moringa Pods.
                          Moringa seed is like round shaped. From one Moringa
                          pods we can get more than 5 number of seeds. We
                          Process and supply multi grade/variety like pkm-1
                          moringa cultivation seeds, pkm-2 cultivation seeds,
                          km-1 seeds, moringa traditional seeds, moringa oil
                          seeds, moringa medicinal seeds, moringa pharma grade
                          seeds.
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
                    src= "/assets/images/spices/psyllum.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Psyllum Husk & Powder</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of Psyllum Husk. We provide husk
                          fiber globally keeping its freshness and goodness
                          intact. The botanical name of Psyllum husk is Plantago
                          Scraba. It is a member of a plant name Plantago. It is
                          commonly known as isabgol. Psyllum Husk is the outer
                          portion of the seed of the plant. It is extremely
                          hygroscopic hence it can absorb water much more than
                          its weight.
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
export default ListingDetails1;
