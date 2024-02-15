import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const BlackPepper = () => {
  return (
    <Layout>
      <PageBanner title={"BlackPepper"} pageName={"BlackPeppers"} />
      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/blacpepper.png"
                alt="blackpepper"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
              Eros Agro takes pride in offering Black Pepper powder of the
              highest quality. Scientifically known as Piper nigrum this spice
              is renowned for its excellent taste relishing flavor superb
              aroma and rich history. Sourced from India's harvests our Black
              Pepper powder stands out for its authenticity and premium quality.
            </p>
            <h3>Culinary Versatility</h3>
            <p>
              Widely used in cooking and garnishing across global cuisines,
              Black Pepper powder is a culinary delight. It adds a unique hot
              flavor to pizzas and enhances the taste of freshly cut fruits and
              vegetables making it a versatile spice that elevates the dining
              experience.
            </p>
            <h3>Health Benefits</h3>
            <p>
              In an era dominated by health consciousness, Black Pepper powder
              stands out not only as a flavor enhancer but also as a key
              ingredient for wellness. Its addition to salads fruit dishes and
              a variety of recipes boosts flavor while preserving nutritional
              value. Renowned for its potential to prevent cancer stimulate
              digestion and relieve coughs and colds Black Pepper is
              celebrated as a holistic spice.
            </p>
            <h3>Contact us Today</h3>
            <p>
              For the finest Black Pepper powder that brings a touch of
              authenticity and wellness to your dishes choose Eros Agro.
              Contact us at +91 9914826464 and let our premium Black Pepper
              powder become an indispensable part of your culinary journey.
              Spice up your dishes and embrace the goodness of Black Pepper with
              Eros Agro.
            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%", // Keep the width responsive
                height: "900px", // Increase the height to provide more space for the form
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

export default BlackPepper;
