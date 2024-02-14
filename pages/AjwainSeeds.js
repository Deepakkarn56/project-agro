import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const AjwainSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"AjwainSeeds"} />
      <section className="notes">
      <section className="entry-content">
        <h2 className="post">Eros Agro: Exporting Quality and Goodness with Premium Ajwain Seeds!</h2>
        <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/ajwain.jpg"
                      alt="Blog Image"
                      width={800}
                      height={500}
                    />
                  </div>
    </section>
    <section className="abouts">
        <h3 className="heading-titles">Botanical Brilliance</h3>
        <p className="paragraphs">Scientifically known as <em>Trachyspermum ammi</em> and belonging to the Apieaceae family, Ajwain Seeds have achieved global fame as a spice hub. These tiny seeds, with their brownish colour, have held a place of utmost importance in spice culture since ages.</p>
    </section>
    <section className="culinarys">
        <h3  className="heading-titles">Culinary Versatility</h3>
        <p className="paragraph">Ajwain seeds are characterised by their very strong flavour, making them a distinctive spice in various dishes. They play a crucial role in tempering certain dishes, preventing indigestion, serving as a preservative in pickles, and are included in buttermilk to ease digestion.</p>
    </section>
    <section className="healths">
        <h3 className="heading-titles">Health Benefits</h3>
        <p className="paragraph">Known for their digestive properties, Ajwain seeds are often utilised to address indigestion issues and enhance overall digestive health.</p>
    </section>
  
    </section>  
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
          <footer className="footers">
        <p className="paragraph">Contact us Today: For premium quality Ajwain Seeds, choose Eros Agro. Contact us at <strong>+91 9914826464</strong>.</p>
    </footer>
  
    </Layout>
  );
};
export default AjwainSeeds;
