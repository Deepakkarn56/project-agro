import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const BlackPepperPowder = () => {
  return (
    <Layout>
      <PageBanner title={"BlackPepperPowder"} />

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/CuminCorianderPowder.png"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Elevate Your Culinary Creations with Premium
              Cumin-Coriander Powder!
            </h3>
            <p>
              Immerse yourself in the richness of Indian cuisines with Eros
              Agro, your trusted exporter of Cumin-Coriander powder. Our richly
              blended powder crafted with freshness and purity serves as a
              mandatory ingredient for flavorful and richly aromatic delicacies
              in Indian kitchens.
            </p>
            <h3>Botanical Brilliance</h3>
            <p>
            Cumin-Coriander powder is a masterful blend of the finest quality Coriander seeds and Cumin seeds harvested from organic farms. Scientifically known as Coriandrum sativum and Cuminum cyminum these two spices come together to create a symphony of flavours that is quintessentially Indian.

            </p>
            <h3>Culinary Magic</h3>
            <p>
            This blend is not just a common spice its a culinary necessity. Cumin-Coriander spice powder effortlessly infuses taste into Indian dishes. Its versatility shines as it blends seamlessly with gravies and veggies adding a unique texture and consistency to the culinary creations.

            </p>
            <h3>Health Boost</h3>
            <p>
            Beyond its culinary prowess Cumin-Coriander powder contributes to health. The blend possesses carminative properties enhancing metabolism and promoting overall well-being. Its more than just a spice its a health-conscious choice.

              
            </p>
            <h3>Contact us Today</h3>
            <p>
            For premium Cumin-Coriander powder that elevates your Indian delicacies choose Eros Agro. Contact us at +91 9914826464 and let our richly blended powder become an indispensable part of your spice collection. Spice up your dishes and embrace the richness of flavour with Eros Agro!

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
export default BlackPepperPowder;
