import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const MixedBerry = () => {
  return (
    <Layout>
      <PageBanner title={"Mixed Berry"} />
      <h2 className="headingss">Mixed Berry</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/berry.png"
                alt="Kalonji"
                width={450}
                height={250}
              />
            </div>
            <h3>
            Mixed Berries: Nature's Burst of Flavor and Nutrition for Health and Delight!
            </h3>
            <p>
            Savor the vibrant taste and nutritional bounty of mixed berries a delightful offering from Eros Agro. Our premium selection of mixed berries combines the finest varieties nature has to offer delivering a medley of flavors and health benefits that are sure to tantalize your taste buds and nourish your body.
            </p>
            <h3>Nutritional Riches</h3>
            <p>
            Mixed berries including strawberries blueberries raspberries and blackberries are packed with essential vitamins minerals and antioxidants. These nutrient-dense fruits are renowned for their high levels of vitamin C fiber and anthocyanins which contribute to overall health and well-being. Incorporating mixed berries into your diet can help support immune function promote heart health and combat oxidative stress.


            </p>
            <h3>Flavorful Versatility</h3>
            <p>
            Whether enjoyed fresh frozen or blended into smoothies mixed berries are a versatile ingredient that adds a burst of flavor and color to a variety of culinary creations. From breakfast bowls and salads to desserts and beverages the sweet and tangy taste of mixed berries lends itself well to countless recipes enhancing both taste and nutritional value.
            </p>
            <h3>Convenient Nutrition</h3>
            <p>
            With their naturally sweet flavor and convenient packaging options mixed berries offer a convenient way to incorporate nutrient-rich fruits into your daily diet. Whether enjoyed as a quick snack on the go or as a flavorful addition to meals and snacks, mixed berries provide a convenient and delicious way to boost your intake of essential nutrients.
            </p>
            <h3>Premium Quality Assurance</h3>
            <p>
            At Eros Agro we are committed to delivering mixed berries of the highest quality. Sourced from trusted growers and carefully selected for freshness and flavor our mixed berries undergo rigorous quality control measures to ensure they meet our strict standards of excellence. With every bite you can taste the difference that comes from premium-quality mixed berries.
            </p>

            <h3>Elevate Your Health and Happiness</h3>
            <p>
            Experience the joy of wholesome eating with mixed berries from Eros Agro. Contact us at +91 9914826464 to explore our selection of premium mixed berries and discover how they can add flavor nutrition and delight to your daily routine. Embrace the goodness of nature's bounty and nourish your body with the irresistible taste of mixed berries from Eros Agro!
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
export default MixedBerry;
