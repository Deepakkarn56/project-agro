import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
// import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import Image from 'next/image';

const RangeSlider = dynamic(() => import("../src/components/RangeSlider"), {
  ssr: false,
});

const ListingList = () => {
  return (
    <Layout>
      <PageBanner title={"Blended Spices"} />
      <section className="listing-grid-area pt-50 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Blended Spices</h2>
              </div>
            </div>
          </div>
          <div className="row rowss">
            {/* Existing Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="10ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/black_pepper_powder.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content contents">
                  <h3 className="title">
                    <Link href="/listing-map">
                      <a>Black Pepper Powder</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of India’s own harvesting product- the
                      best quality of Black Pepper powder. Invite the wellness
                      pack. Black pepper powder is known widely today globally
                      for its pungency, distinct aroma and as a HEAT ingredient.
                      It’s a noble Indian spice with excellent taste, relishing
                      flavor, superb aroma and health benefits. Black pepper
                      powder is used in cooking and garnishing in cuisines
                      around the world.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="20ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/chilli_flakes.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-grid">
                      <a>Chilli Flakes</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of fresh Indian red chilli flakes of
                      best quality. They are packed in tamper proof container so
                      that the freshness is totally sealed. Its also known as
                      “PAPRIKA”, ITS prepared from mild red chili pepper, its
                      flavor ranges from Hot to Mild, Paprika is equally valued
                      for its taste and its bright red colour, derived from
                      capsanthin.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="30ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/cumin_powder.jpeg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Cumin Coriander Powder</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of Cumin-Coriander powder. It serves
                      one of the richly blended powders with freshness and
                      purity. Cumin-Coriander powder is yet another choice for
                      Indian cuisines. In fact it is mandatory Ingredient to
                      prepare flavorful and richly aromatic delicacies.
                  </span>
                </div>
              </div>
            </div>
            {/* New Card 4 (Duplicate of Existing Card) */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="40ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/currypowder.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/new-listing">
                      <a>Curry Powder/Garam Masala</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Curry powder is a blend of ground spices used to flavor
                      curry dishes. It typically includes a mix of Indian and
                      Southeast Asian spices such as turmeric, cumin, coriander,
                      and cardamom, but can vary depending on the specific
                      recipe or brand.

                  </span>
                </div>
              </div>
            </div>
            {/* New Card 5 (Duplicate of Existing Card) */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="50ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/red_chilli.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/another-new-listing">
                      <a>Red Chilli Powder</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Red Chilli powder is commonly known as “lal mirch powder”
                      and it is one of the key ingredients in the preparation of
                      Indian cuisines. It is one of the main members of spice
                      catalogue because Indians dishes are said to be incomplete
                      without the flavor of Red chilli powder.
                  </span>
                </div>
              </div>
            </div>
            {/* card 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="50ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/turmeric.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/another-new-listing">
                      <a>Turmeric Powder</a>
                    </Link>
                  </h3>
                  <span className="price">
                  We are the exporter of selectively chosen turmeric root
                      Fingers that can be blended with technology and
                      machineries to make finest turmeric powder. We strive to
                      keep the natural aroma and purity as it is when doing the
                      process. It is packed carefully to maintain its rich
                      properties.

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
export default ListingList;
