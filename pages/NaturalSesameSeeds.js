import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const NaturalSesameSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"NaturalSesameSeeds"} />
      <h2 className="headingss">Natural Sesame Seeds</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/NaturalSesameSeeds.png"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Exporting Premium Quality Natural Sesame Seeds for Good
              Health and Purity!
            </h3>
            <p>
            Embark on a journey of health and purity with Eros Agro your dedicated exporter of premium quality Sortex and carefully machine-cleaned Natural Sesame Seeds. Our meticulously packed sesame seeds bring satiating goodness and purity to customers worldwide.

            </p>
            <h3>Botanical Excellence</h3>
            <p>
            Scientifically known as Sesamum indicum and belonging to the family Pedaliaceae, Natural Sesame Seeds are tiny oval flat seeds renowned for their nutty flavour. As one of the oldest oil seeds known these seeds are believed to have originated from the Indian subcontinent.

            </p>
            <h3>Culinary Legacy</h3>
            <p>
            Natural Sesame Seeds have a rich history in culinary traditions. Widely used in making bakery items such as bread cookies and breadsticks they also find a place in some Indian curries. Tahini a nutrient booster is made from these sesame seeds showcasing their versatility in both taste and nutritional value.

            </p>
            <h3>Nutritional Powerhouse</h3>
            <p>
            Sesame seeds hold great nutritional value, enriched with calcium phosphorus protein and fiber. They contribute to preventing high blood pressure and the rise in cholesterol levels making them an excellent addition to a healthy lifestyle.

            </p>

            <h3>Contact us Today</h3>
            <p>
            For premium quality Natural Sesame Seeds that prioritise good health and purity choose Eros Agro. Contact us at +91 9914826464, and let our superior Natural Sesame Seeds become an essential part of your culinary repertoire. Elevate your dishes and embrace the goodness of Natural Sesame with Eros Agro!

            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%", // Keep the width responsive
                height: "800px", // Increase the height to provide more space for the form
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
export default NaturalSesameSeeds;
