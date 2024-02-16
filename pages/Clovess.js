import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const Clovess = () => {
  return (
    <Layout>
      <PageBanner title={"Cloves"} pageName={"Cloves"} />
      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/cloves.jpg"
                alt="blackpepper"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Exporting Best Quality Hand Picked Cloves for Unmatched
              Aroma and Flavor!
            </h3>
            <p>
              Experience the richness of handpicked cloves with Eros Agro, your
              premier exporter of the best-quality cloves. Our premium packing
              ensures that the aroma and flavour of these superb quality cloves
              remain intact selected and handpicked to sustain their purity.
            </p>
            <h3>Botanical Brilliance</h3>
            <p>
              Scientifically known as Syzygium aromaticum and belonging to the
              Myrtaceae family, cloves are the unopened flower buds of a
              tropical tree. The name 'clove' is derived from the Latin word for
              'nails'. Native to the Maluku Islands in Indonesia cloves have a
              rich history as aromatic spices.
            </p>
            <h3>Aroma and Flavor Mastery</h3>
            <p>
              Eros Agro takes pride in offering cloves that stand out for their
              ability to impart flavour and a strong aroma to dishes. The
              unopened flower buds are carefully selected and handpicked to
              ensure premium quality with packaging designed to preserve their
              unmatched aroma and flavor
            </p>
            <h3>Culinary Versatility</h3>
            <p>
              Cloves, while capable of overpowering the taste, are used in
              dishes in small amounts to add depth and character. They are not
              just limited to enhancing the flavour of various dishes but are
              also employed as hooks to bind rotis vegetables betel nut
              leaves or samosas. Commonly used in making rice cloves
              contribute a rich aroma and flavour to culinary creations.
            </p>
            <h3>Contact us Today</h3>
            <p>
              For the best-quality hand picked cloves that elevate your culinary
              creations choose Eros Agro. Contact us at +91 9914826464 and let
              our premium cloves become an essential part of your spice
              collection. Spice up your dishes and embrace the richness of
              flavour with Eros Agro!
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

export default Clovess;
