import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const turmerics = () => {
  return (
    <Layout>
      <PageBanner title={"Turmeric"} pageName={"Turmeric"} />
      <h2 className="headingss">Turmeric</h2>
      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/Turmerics.png"
                alt="Turmeric"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
            Scientifically known as Curcuma longa and belonging to the Zingiberaceae family, turmeric has gained international recognition as a cornerstone of spice cultures worldwide. Its roots, with their distinctive bright yellow color, have been a staple in culinary and medicinal traditions for centuries.
            </p>
            <h3>Culinary Versatility</h3>
            <p>
            Turmeric is celebrated for its unique flavor and vibrant color. It imparts an earthy, slightly bitter taste to a variety of dishes. As a key ingredient in curry powder, it contributes to the flavor and color of curries, soups, and rice dishes. Additionally, turmeric is used in beverages like golden milk for its health benefits and in pickling processes for its preservative qualities.
            </p>
            <h3>Health Benefits</h3>
            <p>
            Turmeric is highly valued for its curative properties, primarily due to the compound curcumin. It is widely used to support digestive health, with its anti-inflammatory and antioxidant properties aiding in the prevention of indigestion and promoting overall wellness. Turmeric has been an integral part of traditional medicine, used to alleviate various ailments and improve health.

            </p>
            <h3>Contact us Today</h3>
            <p>
            For naturally selected and assorted best-quality coriander seeds that elevate your culinary creations, choose Eros Agro. Contact us at +91 9914826464, and let our premium coriander seeds become an essential part of your spice collection. Spice up your dishes and embrace the richness of flavour with Eros Agro!

            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "900px",
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
        </div>
      </section>
    </Layout>
  );
};

export default turmerics ;
