import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const Lavender = () => {
  return (
    <Layout>
      <PageBanner title={"Lavender"} />
      <h2 className="headingss">Lavender</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/lavender.jpg"
                alt="Lavender"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
            Scientifically known as Lavandula angustifolia and belonging to the Lamiaceae family Lavender has captivated attention for its enchanting fragrance and versatile uses. With its delicate purple flowers and soothing aroma Lavender has been cherished for centuries in various cultures for its culinary medicinal and aromatic properties.
            </p>
            <h3>Culinary Versatility</h3>
            <p>
            Lavender is prized for its subtle yet distinct floral flavor adding a touch of elegance to a wide range of culinary creations. It is commonly used to infuse syrups desserts baked goods and beverages such as teas and lemonades with its fragrant essence. Additionally Lavender lends itself well to savory dishes where it can enhance dishes like roasted meats salads and sauces with its unique floral notes.
            </p>
            <h3>Health Benefits</h3>
            <p>
            In addition to its culinary applications Lavender boasts numerous health benefits. It is revered for its calming and soothing properties which can help alleviate stress anxiety and insomnia. Lavender is also known for its anti-inflammatory and antimicrobial properties making it a popular ingredient in natural remedies for various ailments including headaches skin irritations and respiratory issues.
            </p>
            <h3>Contact us Today</h3>
            <p>
            For premium quality Lavender that adds a touch of sophistication to your culinary creations, choose Blossom Fields. Contact us at  +91 9914826464 and let our superior Lavender elevate your dishes to new heights. Embrace the enchanting aroma and versatile uses of Lavender with Blossom Fields!
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
export default Lavender;
