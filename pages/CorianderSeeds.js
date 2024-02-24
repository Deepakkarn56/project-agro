import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const CorianderSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"CorianderSeeds"} pageName={"CorianderSeeds"} />
      <h2 className="headingss">Coriander Seeds</h2>
      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/coriander.jpg"
                alt="Coriander Seeds"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
              Scientifically known as Coriandrum sativum L. and belonging to the
              family Apiaceae, Coriander Seeds come in two types from the same
              plant. When dried, they are used as a dry spice, and when ripe,
              they are yellowish-brown and have a longitudinal shape.
            </p>
            <h3>Distinct Aroma and Flavor:</h3>
            <p>
              Eros Agro takes pride in offering coriander seeds that are
              distinctly aromatic, enhancing the flavour of dishes. Whether used
              in whole form after roasting to make powder or ground to create a
              spice mix for Indian curry masala, coriander seeds add depth and
              fragrance to various culinary creations.
            </p>
            <h3>Culinary Versatility:</h3>
            <p>
            Coriander seeds find versatile applications in the kitchen. They can be added to rice for a fragrant touch, used to make chutneys and gravies, or incorporated into spice blends. The richness of coriander seeds is not only a culinary delight but also contributes to the lowering of diabetes, acts as a carminative, and possesses anti-inflammatory properties, making them a valuable addition to your spice collection.

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

export default CorianderSeeds;
