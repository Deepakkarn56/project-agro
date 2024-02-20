import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const PsyllumHuskPowder = () => {
  return (
    <Layout>
      <PageBanner title={"PsyllumHuskPowder"} />
      <h2 className="headingss">Psyllum Husk & Powder</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/psyllum.jpg"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Psyllum Husk & Powder: Elevating Health and Wellness Naturally!
            </h3>
            <p>
              Experience the epitome of health and wellness with Psyllum Husk &
              Powder brought to you by Eros Agro. Our premium-grade Psyllum Husk
              & Powder are meticulously processed and packed to ensure supreme
              quality freshness and purity providing you with a natural solution
              for various health benefits.
            </p>
            <h3>Botanical Superiority</h3>
            <p>
              Scientifically known as Plantago ovata Psyllum Husk is derived
              from the seeds of the Plantago plant. It belongs to the
              Plantaginaceae family and is renowned for its exceptional health
              properties. Psyllum Powder is the finely ground form of Psyllum
              Husk, retaining all its beneficial attributes.
            </p>
            <h3>Health Elixir</h3>
            <p>
              Psyllum Husk & Powder have been revered for centuries for their
              remarkable health benefits. From aiding digestion and promoting
              bowel regularity to supporting heart health and managing
              cholesterol levels Psyllum offers a holistic approach to
              well-being.
            </p>
            <h3>Global Recognition</h3>
            <p>
              Psyllum Husk & Powder have gained widespread recognition globally
              as a natural dietary supplement. With its origins traced back to
              India and the Mediterranean region Psyllum has been embraced by
              various cultures for its therapeutic properties.
            </p>
            <h3>Purity Assurance</h3>
            <p>
              At Eros Agro, we take pride in delivering Psyllum Husk & Powder of
              the highest purity. Our products undergo rigorous quality checks
              to ensure they are free from contaminants and impurities making
              them safe and effective for consumption
            </p>
            <h3>Versatile Wellness Ingredient</h3>
            <p>
              Psyllum Husk & Powder are versatile wellness ingredients that can
              be easily incorporated into your daily routine. Whether added to
              smoothies baked goods or simply mixed with water Psyllum offers a
              convenient way to boost your health naturally.
            </p>

            <h3>Contact us Today</h3>
            <p>
              Experience the transformative power of Psyllum Husk & Powder with
              Eros Agro. Contact us at +91 9914826464 to discover how our
              premium-quality Psyllum products can elevate your health and
              wellness journey. Embrace natural vitality with Eros Agro!
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
export default PsyllumHuskPowder;
