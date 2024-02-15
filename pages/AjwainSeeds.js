import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const AjwainSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"AjwainSeeds"} />
        
      <section className="bodys">
      
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/ajwain.jpg"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
              Scientifically known as Trachyspermum ammi and belonging to the
              Apieaceae family, Ajwain Seeds have achieved global fame as a
              spice hub. These tiny seeds, with their brownish colour, have held
              a place of utmost importance in spice culture since ages.
            </p>
            <h3>Culinary Versatility</h3>
            <p>
              Ajwain seeds are characterised by their very strong flavour,
              making them a distinctive spice in various dishes. They play a
              crucial role in tempering certain dishes, preventing indigestion,
              serving as a preservative in pickles, and are included in
              buttermilk to ease digestion.
            </p>
            <h3>Health Benefits</h3>
            <p>
              Known for their digestive properties, Ajwain seeds are often
              utilised to address indigestion issues and enhance overall
              digestive health.
            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%", // Keep the width responsive
                height: "500px", // Increase the height to provide more space for the form
              }}
            >
              <iframe
                title="Google Form"
                src="https://docs.google.com/forms/d/1VxfZTiu-QToQIjLLGYlbBBfVCxk2YEv2m5hMBYPZy_Q/viewform?embedded=true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%", // Make the iframe fill the container width
                  height: "100%", // Make the iframe fill the container height
                  border: 0,
                }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default AjwainSeeds;
