import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const CuminSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"CuminSeeds"} pageName={"CuminSeeds"} />
      <h2 className="headingss">Cumin Seeds</h2>
      
      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/Cumin.jpg"
                alt="Cumin Seeds"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
            Scientifically known as Nigella sativa and belonging to the family Ranunculaceae, Black Cumin Seeds, also known as Kalonji, are distinguishable by their black colour. Native to South West Asia, they bear a resemblance to Black Sesame Seeds but stand out in their own right for their unique properties.

            </p>
            <h3>Health Benefits</h3>
            <p>
            At Eros Agro, we recognize the profound health benefits associated with Black Cumin Seeds. Known for being an energy booster and overcoming fatigue, these seeds are believed to contribute to overall well-being. The oil extract is particularly esteemed for its nutritive application, promoting healthy hair growth.

            </p>
            <h3>Aromatic Flavour</h3>
            <p>
            Black Cumin Seeds from Eros Agro are slightly aromatic with a peppery flavour, adding depth and character to your culinary creations. Beyond their culinary applications, they stand as a testament to the holistic approach to health and wellness.
            </p>
            <h3>Contact us Today</h3>
            <p>
            For premium Black Cumin Seeds that encapsulate the essence of well-being, choose Eros Agro. Contact us at +91 9914826464, and let our superior quality Black Cumin Seeds become an indispensable part of your health and culinary journey. Elevate your well-being with Eros Agro.
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

export default CuminSeeds;
