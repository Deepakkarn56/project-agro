import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const BlackSesameSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"BlackSesameSeeds"} />

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/blacksesame.png"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Exporting Nutrient-Rich Excellence with Premium Black
              Sesame Seeds!
            </h3>
            <p>
              Embark on a journey of rich quality and tradition with Eros Agro
              your trusted exporter of Black Sesame Seeds. Globally renowned for
              their nutrient-rich goodness our seeds are carefully selected to
              bring you an authentic culinary experience.
            </p>
            <h3>Botanical Brilliance</h3>
            <p>
            Scientifically known as Sesamum indicum and belonging to the family Pedaliaceae Black Sesame Seeds are spherical in shape and boast a rich black colour. With a nutty taste that is distinctive and flavorful these seeds have become a staple in kitchens worldwide.

            </p>
            <h3>Nutrient Powerhouse</h3>
            <p>
            Eros Agro recognizes the nutritional excellence of Black Sesame Seeds. Loaded with oils and a higher level of antioxidants these seeds are a powerhouse of nutrients. Beyond their culinary applications they are mainly used for extracting oil which comes with numerous health benefits.

            </p>
            <h3>Culinary Versatility</h3>
            <p>
            Black Sesame Seeds add a touch of sophistication to dishes as sprinklers on vegetables noodles or as garnishes for starters. The powder derived from black sesame seeds offers a strong flavour and taste elevating the culinary experience.

            </p>

            <h3>Health Benefits</h3>
            <p>
            Beyond their culinary appeal, Black Sesame Seeds and their oil have been associated with various health benefits. They are known for their potential in curing and preventing diseases making them a valuable addition to a health-conscious lifestyle.

            </p>
            <h3>Contact us Today</h3>
            <p>
            For premium Black Sesame Seeds that bring richness and tradition to your culinary creations, choose Eros Agro. Contact us at +91 9914826464, and let our superior quality Black Sesame Seeds become an essential part of your spice collection. Spice up your dishes and embrace the goodness of Black Sesame with Eros Agro!

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
export default BlackSesameSeeds;
