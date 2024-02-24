import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const QuinoaSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"Quinoa Seeds"} />
      <h2 className="headingss">Quinoa Seeds</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/QuinoaSeeds.png"
                alt="Quinoa Seeds"
                width={450}
                height={250}
              />
            </div>
            <h3>Quinoa Seeds</h3>
            <p>
              Eros Agro presents Quinoa seeds, scientifically known as
              Chenopodium quinoa hailing from the esteemed Amaranthaceae Family.
              With origins in Peru Bolivia and India these tiny seeds come in a
              spectrum of colors from white to red or black. Pronounced as keen
              waah Quinoa seeds are derived from the herbaceous plant cultivated
              for its nutrient-rich seeds.
            </p>
            <h3>Versatile and Nutrient-Rich</h3>
            <p>
              Experience the rich taste of Quinoa seeds versatile enough to
              enhance your culinary creations. Whether added to vegetable salads
              for a nutritional boost or used as a wholesome calorie-free
              alternative to rice Quinoa seeds redefine the concept of healthy
              eating. They serve as excellent stuffings for both vegetarian and
              non-vegetarian recipes.
            </p>
            <h3>Innovative Culinary Applications:</h3>
            <p>
              Elevate your culinary adventures with Quinoa seeds. Beyond
              traditional uses, these seeds add a nutritious touch to cookies
              pancakes and health snack bars when dry-roasted. Unleash your
              creativity in the kitchen and enjoy the adaptability of Quinoa
              seeds in a variety of innovative recipes.
            </p>
            <h3>Nutritional Powerhouse:</h3>
            <p>
              Quinoa seeds from Eros Agro are a nutritional powerhouse packing
              protein, fibre, and essential amino acids. Enriched with
              antioxidants these gluten-free seeds contribute to a balanced
              diet with their high dietary fibre content. With a low Glycemic
              Index Quinoa seeds help regulate blood sugar levels promoting
              overall well-being.
            </p>

            <h3>Contact us Today</h3>
            <p>
              For premium Quinoa seeds that exceed expectations choose Eros
              Agro. Elevate your culinary experience and embrace a healthier
              lifestyle. For inquiries and orders contact us at +91 9914826464.
            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%", // Keep the width responsive
                height: "1000px", // Increase the height to provide more space for the form
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
export default QuinoaSeeds;
