import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import Image from "next/image";

const Herbs = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post-item", sort, active);
    let list = document.querySelectorAll(".blog-post-item");
    setstate(getPagination(list.length, sort));
  }, [sort, active]);
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Herbs"} />
      <section className="listing-grid-area pt-50 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Hurbs</h2>
              </div>
            </div>
          </div>
          <div className="row rowss">
            {/* Existing Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="10ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/papermint.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content contents">
                  <h3 className="title">
                    <Link href="/listing-map">
                      <a>PepperMint</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Peppermint is a perennial herb known for its refreshing
                    aroma and cooling sensation. Widely used in teas, it offers
                    digestive benefits and is a natural remedy for indigestion
                    and upset stomach. Peppermint oil, extracted from its
                    leaves, is used in aromatherapy, personal care products, and
                    as a flavoring agent in food and beverages.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="20ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/lavender.jpg" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-grid">
                      <a>Lavender</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Indulge in the refreshing allure of Peppermint and the soothing essence of Lavender. Our herbs are meticulously harvested to capture the full spectrum of flavours and aromas, ensuring a culinary experience that invigorates the senses and soothes the soul.
                  </span>
                </div>
              </div>
            </div>
            {/* Existing Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="30ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/moringa.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-list">
                      <a>Moringa Seeds/Leaf/Powder</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Eros Agro specialises in providing top-tier Moringa seeds, an essential component of the Moringa tree renowned for its rich protein and iron content. Housed within the round-shaped Moringa Pods, each pod yields more than five seeds. Our offerings include multi-grade varieties such as pkm-1 and pkm-2 Moringa cultivation seeds, km-1 seeds, traditional Moringa seeds, Moringa oil seeds, and medicinal and pharma-grade Moringa seeds.
                  </span>
                </div>
              </div>
            </div>
            {/* New Card 4 (Duplicate of Existing Card) */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="40ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/Psyllium Husk.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/new-listing">
                      <a>Psyllium Husk</a>
                    </Link>
                  </h3>
                  <span className="price">
                  At Eros Agro, we offer high-quality Psyllum Husk, the outer portion of the seed of the Plantago Scraba plant, commonly known as isabgol. As a member of the Plantago family, Psyllum Husk is recognized for its extreme hygroscopic nature, enabling it to absorb water well beyond its weight.

                  </span>
                </div>
              </div>
            </div>
            {/* New Card 5 (Duplicate of Existing Card) */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="50ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/Quinoa Seeds.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/another-new-listing">
                      <a>Quinoa Seeds</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Eros Agro presents Quinoa seeds, scientifically known as Chenopodium quinoa, hailing from the esteemed Amaranthaceae Family. With origins in Peru, Bolivia, and India, these tiny seeds come in a spectrum of colors, from white to red or black. Pronounced as 'keen-wah,' quinoa seeds are derived from the herbaceous plant cultivated for its nutrient-rich seeds.
                  </span>
                </div>
              </div>
            </div>
            {/* card 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12 sizess">
              <div className="listing-item listing-grid-one mb-45 wow fadeInUp listing-items" data-wow-delay="50ms">
                <div className="listing-thumbnail">
                  <Image src="/assets/images/spices/Bay Leaves.png" alt="Listing Image" width={800} height={700} />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/another-new-listing">
                      <a>Bay Leaves</a>
                    </Link>
                  </h3>
                  <span className="price">
                  Eros Agro takes pride in offering top-grade Bay Leaves, known for their superior quality. Our selection of dried whole leaves is crafted to meet the highest standards, ensuring an aromatic experience that delights every end user.

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
export default Herbs;
