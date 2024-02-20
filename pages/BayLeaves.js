import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const BayLeaves = () => {
  return (
    <Layout>
      <PageBanner title={"Bay Leaves"} />
      <h2 className="headingss">Bay Leaves</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/BayLeaves.png"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>BayLeaves</h3>
            <p>
              Eros Agro takes pride in offering top-grade Bay Leaves known for
              their superior quality. Our selection of dried whole leaves is
              crafted to meet the highest standards ensuring an aromatic
              experience that delights every end user.
            </p>
            <h3>Botanical Excellence</h3>
            <p>
              Scientifically recognized as Laurus nobilis and belonging to the
              Lauraceae Family Bay Leaves boast an elliptical shape with one
              pointed end. The upper surface shines with an olive-green hue
              while the lower surface exhibits a dull olive to brown colour.
              With a soft aroma and a hint of bitterness in taste Bay Leaves
              stand as a testament to botanical excellence.
            </p>
            <h3>Origin and Culinary Uses</h3>
            <p>
              Native to the Mediterranean region and thriving in Europe and
              California Bay Leaves are commonly known as Tej Patta in India.
              In Indian cuisines they play a crucial role in tempering and are
              widely used for adding flavour and aroma to pulao or curry.
              Crushed Bay Leaves find a place in creating Biryani Masala
              imparting a delicate aroma to the delicacies.
            </p>
            <h3>Culinary Applications</h3>
            <p>
              Bay Leaves are a staple in Mediterranean cuisines, often used to
              flavour soups and stews. The aromatic profile of Bay Leaves
              elevates the taste of various dishes making them a versatile and
              essential addition to any kitchen.
            </p>
            <h3>Health and Wellness</h3>
            <p>
              Beyond their culinary significance Bay Leaves also offer
              medicinal properties. They have been recognized for their
              potential in treating conditions such as high blood sugar
              migraines headaches bacterial and fungal infections. With
              anti-inflammatory and antioxidant properties Bay Leaves
              contribute to overall well-being.
            </p>

            <h3>Contact us Today</h3>
            <p>
              For premium Bay Leaves that enhance your culinary creations and
              contribute to your well-being, choose Eros Agro. For inquiries and
              orders contact us at +91 9914826464.
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
export default BayLeaves;
