import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const PepperMint = () => {
  return (
    <Layout>
      <PageBanner title={"PepperMint"} />
      <h2 className="headingss">PepperMint</h2>

      <section className="bodys">
        
        <div className="containers">
          <div className="main-contents">
            
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/papermint.png"
                alt="PepperMint"
                width={450}
                height={250}
              />
            </div>
            <h3>Botanical Brilliance</h3>
            <p>
            Scientifically known as Mentha piperita and belonging to the Lamiaceae family Peppermint leaves have garnered widespread recognition for their aromatic and flavorful properties. With their vibrant green color and refreshing scent Peppermint leaves have long been cherished in culinary and medicinal traditions around the world.
            </p>
            <h3>Culinary Versatility</h3>
            <p>
            Peppermint leaves are prized for their bold and invigorating flavor making them a versatile ingredient in various culinary creations. They are commonly used to add a refreshing kick to beverages like teas cocktails and mocktails as well as in desserts sauces and savory dishes. Additionally Peppermint leaves are often incorporated into confectionery items such as candies and chocolates for their distinct taste.
            </p>
            <h3>Health Benefits</h3>
            <p>
            Beyond their culinary applications Peppermint leaves are renowned for their numerous health benefits. They are widely appreciated for their ability to soothe digestive discomfort alleviate symptoms of nausea and indigestion and promote overall digestive health. Peppermint leaves are also valued for their refreshing and invigorating properties which can help to uplift mood and relieve stress.
            </p>
            <h3>Contact us Today</h3>
            <p>For premium quality Peppermint leaves that infuse your culinary creations with freshness and flavor choose Herbal Haven. Contact us at +91 9914826464 and let our superior Peppermint leaves elevate your culinary experience. Bring a burst of freshness to your dishes and embrace the versatility of Peppermint with Herbal Haven!
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
export default PepperMint;
