import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const NaturalAlmonds = () => {
  return (
    <Layout>
      <PageBanner title={"NaturalAlmonds"} />
      <h2 className="headingss">Natural Almonds</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/almond.jpg"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Natural Almonds: Natures Nutrient-Packed Powerhouse for Health
              and Flavor!
            </h3>
            <p>
              Discover the wholesome goodness and nutritional excellence of
              natural almonds proudly presented by Eros Agro. Our premium
              selection of natural almonds offers a delightful combination of
              flavor and health benefits making them a versatile and nutritious
              addition to your daily diet.
            </p>
            <h3>Nutrient-Rich Superfood</h3>
            <p>
              Natural almonds are renowned for their exceptional nutritional
              profile packed with essential vitamins, minerals and heart-healthy
              fats. Rich in vitamin E magnesium and antioxidants almonds offer a
              myriad of health benefits including promoting heart health
              supporting brain function and aiding in weight management.
              Incorporating natural almonds into your diet can help you meet
              your daily nutritional needs and support overall well-being.
            </p>
            <h3>Versatile Culinary Ingredient</h3>
            <p>
              From snacking to cooking and baking natural almonds are a
              versatile culinary ingredient that adds texture flavor and
              nutrition to a wide range of dishes. Whether enjoyed on their own
              as a satisfying snack or sprinkled over salads yogurt or oatmeal
              almonds provide a delicious and convenient way to boost the
              nutritional value of your meals.
            </p>
            <h3>Convenient and Wholesome Snacking</h3>
            <p>
              Natural almonds offer a convenient and nutritious snack option for
              busy lifestyles. Packed with protein fiber and healthy fats
              almonds provide sustained energy and help keep you feeling full
              and satisfied between meals. Whether enjoyed at home at work or on
              the go natural almonds are a wholesome and satisfying snack choice
              that nourishes both body and mind.
            </p>
            <h3>Premium Quality Assurance</h3>
            <p>
              At Eros Agro we are committed to delivering natural almonds of the
              highest quality. Sourced from trusted growers and carefully
              selected for freshness and flavor our almonds undergo rigorous
              quality control measures to ensure they meet our strict standards
              of excellence. With every bite you can taste the difference that
              comes from premium-quality natural almonds.
            </p>

            <h3>Elevate Your Health and Happiness</h3>
            <p>
              Experience the nourishing power of natural almonds with Eros Agro.
              Contact us at +91 9914826464 to explore our selection of premium
              almonds and discover how they can add flavor nutrition and
              satisfaction to your healthy lifestyle. Embrace the natural
              goodness of almonds and elevate your health and wellness with Eros
              Agro!
            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%", // Keep the width responsive
                height: "1200px", // Increase the height to provide more space for the form
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
export default NaturalAlmonds;
