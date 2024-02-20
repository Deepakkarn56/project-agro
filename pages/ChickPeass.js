import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const ChickPeass = () => {
  return (
    <Layout>
      <PageBanner title={"Chick Peass"} />
      <h2 className="headingss">Chick Peas</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/chickpeas.jpg"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>Eros Agro: Exporting Premium Chickpeas Globally!</h3>
            <p>
              Embark on a journey of nutrition and flavor with Eros Agro, your
              trusted exporter of Chickpea/Kabuli Chana globally. Our beans are
              meticulously assorted cleaned and hygienically packed to ensure
              you receive the best of this nutritious and protein-rich legume.
            </p>
            <h3>Botanical Excellence</h3>
            <p>
              Scientifically known as Cicer arietinum-garbanzo and belonging to
              the Fabaceae family Chickpea/Kabuli Chana is a legume that boasts
              light brown Hazelnut-like shape and a small hard texture.
            </p>
            <h3>Nutrient-Rich Goodness</h3>
            <p>
              Eros Agro takes pride in delivering Chickpeas that maintain their
              nutritive values and richness in protein and fiber. Through
              mechanical processing we carefully sort the best chickpeas to
              serve you a product that aligns with health and taste.
            </p>
            <h3>Versatile Culinary Wonder</h3>
            <p>
              Chickpeas are incredibly versatile in the kitchen. Whether boiled
              used in curry dishes or transformed into a paste for various
              cuisines Chickpeas bring a tasty flavour and nutritional punch to
              your meals. In India, chickpeas are a popular choice for making
              curry dishes while in Middle Eastern countries they are used to
              create the beloved Hummus spread applied over Pita bread for
              Falafel rolls.
            </p>
            <h3>Health Conscious Choice</h3>
            <p>
              With minimal fat content Chickpeas are considered a healthy and
              nutritious addition to your diet. Create healthy salads with
              vegetables or explore various culinary creations with the goodness
              of Chickpeas.
            </p>

            <h3>Contact us Today</h3>
            <p>
              For premium Chickpeas that elevate your culinary experiences,
              choose Eros Agro. Contact us at +91 9914826464, and let our
              carefully processed and hygienically packed Chickpeas become a
              staple in your kitchen. Spice up your dishes and embrace the
              richness of nutrition and flavor with Eros Agro!
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
export default ChickPeass;
