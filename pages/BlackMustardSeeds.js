import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const BlackMustardSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"BlackMustardSeeds"} />
      <h2 className="headingss">Black Mustard Seeds</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/BlackMustardSeeds.png"
                alt="Black Mustard Seeds"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Unveiling Supreme Quality Black Mustard Seeds for
              Culinary Excellence!
            </h3>
            <p>
              Explore the richness and goodness of Black Mustard Seeds with Eros
              Agro your dedicated exporter of top-tier seeds. Packed to
              preserve their supreme quality our Black Mustard Seeds are a treat
              for end users seeking an authentic culinary experience.
            </p>
            <h3>Botanical Brilliance</h3>
            <p>
              Scientifically known as Brassica nigra and belonging to the family
              Brassicaceae Black Mustard Seeds are small round and exhibit a
              distinct black or dark brown colour. Originating from the Middle
              East these seeds have found widespread cultivation in India and
              are commonly known as Sarson.
            </p>
            <h3>Culinary Versatility</h3>
            <p>
              At Eros Agro we understand the significance of Black Mustard Seeds
              in Indian kitchens. Primarily used in tempering these seeds when
              added to warm cooking oil pop up to infuse rich flavour and aroma
              into dishes. Beyond traditional uses Black Mustard Seeds are also
              transformed into powder adding a unique twist to pickles.
            </p>
            <h3>Mustard Sauce Sensation</h3>
            <p>
              In contemporary culinary landscapes, Mustard Sauce has become a
              popular salad dressing. Its unique tang and depth of flavour make
              it a versatile addition to various dishes showcasing the
              adaptability of Black Mustard Seeds.
            </p>

            <h3>Health and Wellness</h3>
            <p>
              Black Mustard Seeds go beyond taste offering health benefits.
              They can help increase appetite neutralise toxins and serve as a
              good source of minerals and Omega-3 fatty acids contributing to a
              holistic approach to well-being.
            </p>
            <h3>Contact us Today</h3>
            <p>
              For premium Black Mustard Seeds that elevate your culinary
              creations, choose Eros Agro. Contact us at +91 9914826464 and let
              our superior quality Black Mustard Seeds become an essential part
              of your spice collection. Spice up your dishes and embrace the
              richness of flavor with Eros Agro!
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
export default BlackMustardSeeds;
