import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const MoringaSeedsPowder = () => {
  return (
    <Layout>
      <PageBanner title={"Leafs Powder"} />
      <h2 className="headingss">MoringaSeeds/Leafs/Powder</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/Moringa.png"
                alt="Leafs Powder"
                width={450}
                height={250}
              />
            </div>
            <h3>Moringa Seeds/Leafs/Powder</h3>
            <p>
              Eros Agro specialises in providing top-tier Moringa seeds an
              essential component of the Moringa tree renowned for its rich
              protein and iron content. Housed within the round-shaped Moringa
              Pods each pod yields more than five seeds. Our offerings include
              multi-grade varieties such as pkm-1 and pkm-2 Moringa cultivation
              seeds km-1 seeds traditional Moringa seeds Moringa oil seeds and
              medicinal and pharma-grade Moringa seeds.
            </p>
            <h3>Botanical Excellence:</h3>
            <p>
              Scientifically identified as Moringa oleifera this extraordinary
              plant is the sole genus in the Moringaceae plant family. Widely
              cultivated in southwestern India every part of the Moringa plant
              finds applications in various sectors including food personal and
              health care agriculture dye production water purification and
              more.
            </p>
            <h3>Nutrient-Rich Marvel:</h3>
            <p>
              Moringa oleifera stands as a significant and high-valued source of
              essential nutrients including vitamin-B vitamin-C provitamin-A
              (beta-carotene) vitamin-K proteins and more. The greenish leaves
              reminiscent of spinach enhance various dishes soups and sauces
              either cooked or in powdered form.
            </p>
            <h3>Versatile Applications:</h3>
            <p>
              The immature seed pods also known as Drumsticks are a culinary
              delight in South Asian dishes parboiled and cooked in curries. The
              seeds resembling roasted peanuts peas and nuts boast high levels
              of vitamin-C and vitamin-B. Furthermore the seeds yield oil known
              as Ben oil with around 40% oil content prized for its higher
              concentration of behenic acid. The refined oil clear and odorless
              is a versatile edible oil.
            </p>
            <h3>Medicinal Potential:</h3>
            <p>
              While traditional medicine has suggested the medicinal value of
              Moringa oleifera ongoing clinical testing is essential to explore
              and validate its numerous potential health benefits.
            </p>
            <h3>Contact us Today</h3>
            <p>For inquiries contact us at +91 9914826464.</p>
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
export default MoringaSeedsPowder;
