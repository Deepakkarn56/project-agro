import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const RedChilliPowder = () => {
  return (
    <Layout>
      <PageBanner title={"RedChilliPowder"} />

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/Redchilli.jpg"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Igniting Culinary Passions with Premier Red Chilli
              Powder!
            </h3>
            <p>
            Experience the vibrant intensity and flavor with Eros Agros Red Chilli Powder  a premium spice blend that brings the perfect balance of heat and flavor to your dishes. As passionate exporters we are committed to delivering a red chilli powder that not only satisfies your desire for spice but also enhances the overall taste of your culinary creations.
            </p>
            <h3>A Vibrant Spectrum of Heat</h3>
            <p>
            Our Red Chilli Powder is not just about adding spice its about elevating your cooking with a burst of flavor that complements every ingredient. At Eros Agro we take pride in sourcing the finest chillies meticulously ground to preserve their natural taste and potency. Whether you are looking for a gentle warmth or an intense fire our red chilli powder is crafted to cater to diverse palates and preferences making it a must-have in your kitchen arsenal.
            </p>
            <h3>Culinary Excellence</h3>
            <p>
            In the realm of cooking, Red Chilli Powder stands as a cornerstone ingredient, capable of transforming the ordinary into the extraordinary. Its more than just a spice its an expression of passion and perfection. Our blend ensures that each dish is imbued with a depth of flavor and a vibrant color promising an unforgettable culinary journey. Let Eros Agros Red Chilli Powder be the secret ingredient that brings your dishes to life adding just the right amount of heat and a plethora of flavors.
            </p>
           
            <h3>Contact us Today</h3>
            <p>
            Elevate your cooking and infuse your dishes with the exquisite taste and quality of Eros Agro's Red Chilli Powder. Reach out to us at +91 9914826464 and let our spice blend be a staple in your kitchen. Unleash the power of flavor and transform every meal into a fiery and flavorful experience with Eros Agro. Join us in this culinary adventure and let your taste buds revel in the heat and taste of our unmatched Red Chilli Powder!
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
export default RedChilliPowder;
