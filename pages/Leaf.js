import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const Leaf = () => {
  return (
    <Layout>
      <PageBanner title={"Leaf"} />
      <h2 className="headingss">Leaf</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/lavender.jpg"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
            Scientifically known as Moringa oleifera and belonging to the Moringaceae family Moringa has emerged as a powerhouse of nutrition and wellness. With its vibrant green leaves nutritious seeds and versatile powder Moringa has garnered global attention for its remarkable health benefits and culinary potential.
            </p>
            <h3>Culinary Versatility</h3>
            <p>
            Moringa leaves seeds and powder offer a plethora of culinary possibilities enriching dishes with their mild earthy flavor and nutritional richness. The leaves can be used fresh or dried in salads soups curries stir-fries and smoothies imparting a nutritious boost to meals. Moringa seeds with their nutty taste and crunchy texture are often roasted and consumed as a snack or added to dishes for added texture and flavor. Moringa powder made from dried and ground leaves is a convenient way to incorporate the nutritional benefits of Moringa into a variety of recipes including baked goods beverages and sauces.
            </p>
            <h3>Health Benefits</h3>
            <p>
            Moringa is renowned for its exceptional nutritional profile boasting high levels of vitamins minerals antioxidants and protein. It is revered for its potential to boost energy support immune function promote healthy digestion and enhance overall well-being. Moringa is also prized for its anti-inflammatory antimicrobial and antioxidant properties which may help protect against chronic diseases and promote longevity.
            </p>
            <h3>Contact us Today</h3>
            <p>
            For premium quality Moringa products that harness the nutritional power of this botanical wonder choose Green Harvest. Contact us at +91 9914826464 and let our superior Moringa leaves seeds and powder elevate your culinary creations and nourish your body. Embrace the health benefits and culinary versatility of Moringa with Green Harvest!
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
export default Leaf;
