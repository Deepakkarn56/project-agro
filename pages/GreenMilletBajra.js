import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const GreenMilletBajra = () => {
  return (
    <Layout>
      <PageBanner title={"Chick Peass"} />
      <h2 className="headingss">Green Millet Bajra</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/green_millet.jpg"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Delivering Supreme Quality Green Millet Bajra Globally!
            </h3>
            <p>
              Indulge in the richness of nutrition and taste with Eros Agro your
              premier exporter of supreme quality Green Millet Bajra. Our
              hygienically packed Bajra grains are fresh odourless and ready for
              direct use. We ensure they are free from dirt stones and weevils
              having been meticulously cleaned and assorted before packing.
            </p>
            <h3>Botanical Excellence</h3>
            <p>
              Scientifically known as Pennisetum glaucum and belonging to the
              Poaceae family Green Millet Bajra is also called Pearl Millet.
              These tiny small brownish-green grains have a distinctive taste
              and flavor that delivers optimal nutrition.
            </p>
            <h3>African Delight</h3>
            <p>
              Green Millet Bajra or Pearl Millet is a staple in most African
              countries. With a rich history these grains have been a dietary
              mainstay since ancient times particularly in Rajasthan India where
              they are native.
            </p>
            <h3>Hygienic Purity</h3>
            <p>
              Eros Agro takes pride in delivering Bajra grains that meet the
              highest standards of hygiene. Our millet is odorless fresh and
              suitable for direct use. We ensure the grains are free from
              impurities making them a reliable choice for your culinary
              creations.
            </p>
            <h3>Culinary Staple</h3>
            <p>
              Green Millet Bajra is not just a nutritious choice but a culinary
              staple. Its distinctive taste and flavor make it a versatile
              ingredient for various dishes adding both nutritional value and a
              unique touch to your meals.
            </p>

            <h3>Contact us Today</h3>
            <p>
              For supreme quality Green Millet Bajra that enriches your culinary
              experiences choose Eros Agro. Contact us at +91 9914826464 and
              let our carefully processed and hygienically packed Bajra grains
              become a preferred choice in your kitchen. Embrace the richness of
              nutrition and flavor with Eros Agro!
            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%", // Keep the width responsive
                height: "1100px", // Increase the height to provide more space for the form
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
export default GreenMilletBajra;
