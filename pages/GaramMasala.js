import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const GaramMasala = () => {
  return (
    <Layout>
      <PageBanner title={"GaramMasala"} />

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/GaramMasala.png"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>
            Eros Agro: Unleashing Culinary Delight with Exquisite Curry Powder/Garam Masala!

            </h3>
            <p>
            Delight your taste buds with Eros Agros unparalleled Curry Powder/Garam Masala – where each blend is a masterpiece crafted with care and precision to create a warm symphony of spices. As dedicated exporters we bring you a spice blend that transcends the boundaries of heat offering a taste suitable for all palates.
            </p>
            <h3>A Symphony of Flavors</h3>
            <p>
            Curry Powder/Garam Masala the very name evokes warmth and a perfect blend of spices. At Eros Agro we meticulously select each ingredient ensuring that they come together in their correct form and precise amounts to create a relishing taste that stands out. Whether you prefer your masala hot or mild our blend is tailored to suit all preferences making it a versatile addition to your culinary adventures.


            </p>
            <h3>Culinary Harmony</h3>
            <p>
            In the world of spices Garam Masala/Curry Powder is a treat for your taste buds. Its not just an ingredient its a carefully curated blend that enhances the taste and aroma of your delicacies creating an incomparable culinary experience. Our blend is a harmonious marriage of spices adding depth and richness to every dish it graces.


            </p>
           
            <h3>Contact us Today</h3>
            <p>
            For a taste that transcends borders and elevates your culinary creations choose Eros Agro. Contact us at +91 9914826464 and let our Curry Powder/Garam Masala become an essential component of your spice collection. Spice up your dishes and transform every meal into a delightful culinary adventure with Eros Agro!


            </p>
          </div>
          <div className="sidebars">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%", // Keep the width responsive
                height: "100%", // Increase the height to provide more space for the form
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
                  height: "1000px", // Make the iframe fill the container height
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
export default GaramMasala;
