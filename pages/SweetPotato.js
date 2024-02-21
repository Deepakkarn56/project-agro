import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const SweetPotato = () => {
  return (
    <Layout>
      <PageBanner title={"SweetPotato"} />
      <h2 className="headingss">Sweet Potato</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/allu.png"
                alt="Kalonji"
                width={400}
                height={200}
              />
            </div>
            <h3>
              Sweet Potato: Nature's Nutrient-Rich Gem for Health and Flavor!
            </h3>
            <p>
              Indulge in the wholesome goodness of sweet potatoes a nutritional
              powerhouse offered by Eros Agro. Our premium sweet potatoes are a
              testament to natures bounty providing a delicious and versatile
              ingredient that not only tantalizes the taste buds but also offers
              a plethora of health benefits.
            </p>
            <h3>Nutritional Brilliance</h3>
            <p>
              Sweet potatoes are rich in essential nutrients including vitamins
              minerals and antioxidants. Packed with vitamin A vitamin C
              potassium and fiber sweet potatoes contribute to overall health
              and well-being. Their vibrant orange hue signifies the presence of
              beta-carotene a powerful antioxidant known for its immune-boosting
              properties.
            </p>
            <h3>Versatile Culinary Delight</h3>
            <p>
              From savory dishes to sweet treats, sweet potatoes are a versatile
              culinary ingredient that can be incorporated into a myriad of
              recipes. Whether roasted mashed baked or fried the natural
              sweetness and creamy texture of sweet potatoes add depth and
              flavor to a variety of cuisines.
            </p>
            <h3>Healthful Eating Made Easy</h3>
            <p>
              Sweet potatoes offer a convenient and nutritious option for
              health-conscious individuals. Low in calories and high in fiber
              they promote satiety and aid in weight management. Additionally
              their complex carbohydrates provide sustained energy making them
              an ideal choice for fueling active lifestyles.
            </p>
            <h3>Garden-Fresh Goodness</h3>
            <p>
              At Eros Agro, we take pride in delivering sweet potatoes of the
              highest quality. Grown in nutrient-rich soil and carefully
              harvested at peak ripeness our sweet potatoes retain their natural
              flavor texture and nutritional value. From field to fork we ensure
              that every sweet potato meets our stringent standards of freshness
              and excellence.
            </p>

            <h3>Contact us Today</h3>
            <p>
              Enhance your meals and nourish your body with the wholesome
              goodness of sweet potatoes from Eros Agro. Contact us at +91
              9914826464 to explore our selection of premium sweet potatoes and
              discover how they can elevate your culinary creations. Embrace the
              delectable flavor and nutritional benefits of sweet potatoes and
              embark on a journey towards healthier living with Eros Agro!
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
export default SweetPotato;
