import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const AjwainSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"AjwainSeeds"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/ajwain.jpg"
                      alt="Blog Image"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <h2 className="post-metas">AjwainSeeds</h2>
                    </div>
                    <h3 className="title">
                      Eros Agro: Exporting Quality and Goodness with Premium
                      Ajwain Seeds!
                    </h3>
                    <p>
                      Explore the spice culture with Eros Agro, your dedicated
                      exporter of Ajwain Seeds. Renowned globally for their
                      strong flavour and sharp aromatic essence, our Ajwain
                      Seeds are a testament to the rich heritage of Indian
                      spices, packed with quality and goodness.
                    </p>
                    <h3 className="title">Botanical Brilliance:</h3>
                    <p>
                      Scientifically known as Trachyspermum ammi and belonging
                      to the Apieaceae family, Ajwain Seeds have achieved global
                      fame as a spice hub. These tiny seeds, with their brownish
                      colour, have held a place of utmost importance in spice
                      culture since ages.
                    </p>
                    <h4>Culinary Versatility:</h4>
                    <p>
                      Ajwain seeds are characterised by their very strong
                      flavour, making them a distinctive spice in various
                      dishes. While used in small proportions due to their
                      potency, they play a crucial role in tempering certain
                      dishes. Additionally, they are added to bhajia batter to
                      prevent indigestion, serve as a preservative in pickles,
                      and are included in buttermilk to ease digestion.
                    </p>
                    <h4>Health Benefits:</h4>
                    <p>
                      Beyond their culinary applications, Ajwain seeds
                      contribute to health and well-being. Known for their
                      digestive properties, they are often utilised to address
                      indigestion issues and enhance overall digestive health.
                    </p>
                    <h4>Contact us Today:</h4>
                    <p>
                      For premium quality Ajwain Seeds that bring the essence of
                      spice culture to your culinary creations, choose Eros
                      Agro. Contact us at +91 9914826464, and let our superior
                      Ajwain Seeds become an essential part of your spice
                      collection. Spice up your dishes and embrace the richness
                      of flavour with Eros Agro!
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
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100vw",
              height: "100vh",
            }}
          >
            <iframe
              title="Google Form"
              src="https://docs.google.com/forms/d/1VxfZTiu-QToQIjLLGYlbBBfVCxk2YEv2m5hMBYPZy_Q/viewform?embedded=true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default AjwainSeeds;
