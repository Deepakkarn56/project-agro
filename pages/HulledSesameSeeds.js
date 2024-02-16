import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const HulledSesameSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"Black Cumin/Kalonji"} />

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/Hulled Sesame Seeds.png"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Unveiling the Essence of Premium Quality Hulled Sesame
              Seeds!
            </h3>
            <p>
            Discover the excellence of Indias own harvesting product with Eros Agro your trusted provider of premium quality Hulled Sesame Seeds. Through an auto-dried process we bring you the most nutritious seeds rich in proteins and valuable minerals.

            </p>
            <h3>Botanical Brilliance</h3>
            <p>
            Scientifically known as Sesamum indicum and belonging to the family Pedaliaceae Hulled Sesame Seeds undergo a meticulous process where the husk hull (upper skin) is removed earning them their name. This process results in a source of high nutritional value contributing to a healthy lifestyle.

            </p>
            <h3>Premium Quality Assurance</h3>
            <p>
            At Eros Agro we ensure that the natural sesame seeds are dried and hulled using advanced mechanical processes guaranteeing the finest quality. Alternatively sun-drying is also employed to produce hulled sesame seeds offering a versatile product with a multitude of applications.

            </p>
            <h3>Health and Culinary Versatility</h3>
            <p>
            Sesame seeds known for their oxidative properties, have the potential to reverse liver damage. In Arabian countries Hulled Sesame Seeds are creatively used with Tahini mixed with date syrup to create a sweet and refreshing drink. Embrace the versatility of Hulled Sesame Seeds widely used in bread burgers sauces cereals spreads drinks granola candies and various other bakery and confectionary products enhancing both taste and nutritional value.

            </p>

            
            <h3>Contact us Today</h3>
            <p>
            For premium quality Hulled Sesame Seeds that enrich your culinary creations choose Eros Agro. Contact us at +91 9914826464 and let our superior Hulled Sesame Seeds become an essential part of your culinary repertoire. Elevate your dishes and embrace the goodness of Hulled Sesame with Eros Agro!

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
export default HulledSesameSeeds;
