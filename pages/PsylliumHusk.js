import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const PsylliumHusk = () => {
  return (
    <Layout>
      <PageBanner title={"Psyllium Husk"} />
      <h2 className="headingss">Psyllium Husk</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/PsylliumHusk.png"
                alt="Psyllium Husk"
                width={450}
                height={250}
              />
            </div>
            <h3>Eros Agro: Your Gateway to Premium Psyllium Husk & Powder!</h3>
            <p>
              Discover the purity and freshness of Psyllium Husk with Eros Agro
              a leading exporter committed to providing high-quality husk fibre
              globally. Derived from the outer portion of the Plantago Scraba
              seed commonly known as isabgol Psyllium Husk is a botanical
              marvel with exceptional hygroscopic properties capable of
              absorbing water far beyond its weight.
            </p>
            <h3>Botanical Brilliance</h3>
            <p>
              Scientifically classified as Plantago Scraba Psyllium Husk
              belongs to the Plantago family. Originally from the Mediterranean
              region it is now cultivated in North Gujarat West Rajasthan and
              select states of North India.
            </p>
            <h3>Ancient Herb, Modern Benefits:</h3>
            <p>
              Psyllium Husk, an age-old herb with roots in ancient times, serves
              a dual purpose as a natural laxative and antidiarrheal agent. Its
              remarkable fibrous nature aids in expelling toxins from the
              intestine and stomach, promoting digestive health. Beyond its
              traditional uses Psyllium Husk is a top choice for weight control
              and is even utilised for thickening ice cream.
            </p>
            <h3>Hygroscopic Marvel:</h3>
            <p>
              The hygroscopic nature of Psyllium Husk sets it apart allowing it
              to absorb water significantly more than its weight. This
              characteristic makes it an excellent choice for various
              applications including its consumption after soaking in water.
            </p>
            <h3>Cultivation and Origin</h3>
            <p>
              {" "}
              While Psyllium Husk originated in the Mediterranean region its
              cultivation has expanded to include North Gujarat West Rajasthan
              and certain states in North India. Eros Agro ensures that the husk
              fibre is sourced and processed with utmost care preserving its
              natural goodness and potency.
            </p>
            <h3>Contact us Today</h3>
            <p>
              For premium Psyllium Husk and Powder that encapsulate the essence
              of natural well-being, choose Eros Agro. As your dedicated
              exporter we guarantee the freshness and purity of our products.
              Contact us at +91 9914826464 to explore the benefits of Psyllium
              Husk and elevate your health naturally.
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
export default PsylliumHusk;
