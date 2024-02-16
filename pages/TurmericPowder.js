import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const RedChilliPowder = () => {
  return (
    <Layout>
      <PageBanner title={"Turmeric Powder"} />

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/turmeric.jpg"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Elevating Culinary Art with Exquisite Turmeric Powder!
            </h3>
            <p>
            Dive into the golden essence of Eros Agros Turmeric Powder  a spice that not only brings a burst of color to your dishes but also infuses them with its distinctive earthy flavor and numerous health benefits. As a leading exporter Eros Agro is committed to providing turmeric powder that is pure potent and perfect for enhancing the nutritional value and taste of your meals.
            </p>
            <h3>Golden Glow of Wellness</h3>
            <p>
            Turmeric Powder with its rich golden hue is not just a spice its a symbol of purity and tradition. At Eros Agro we ensure that our turmeric is harvested at its peak carefully processed to retain its natural curcumin content which is known for its anti-inflammatory and antioxidant properties. Whether its used in modest amounts or as the star of the dish our turmeric powder promises to deliver a warmth that is both subtle and impactful suitable for all dietary preferences.
            </p>
            <h3>A Tapestry of Taste</h3>
            <p>
            Turmeric Powder is a culinary treasure that has been cherished across cultures for its ability to add depth and nuance to a plethora of dishes. Its not merely an ingredient its a culinary artists tool to paint every meal with vibrant strokes of flavor and health. Eros Agros Turmeric Powder seamlessly blends with other spices enhancing their flavors and bringing a gentle earthy undertone to every dish it graces. From traditional curries to modern fusion cuisine our turmeric powder is versatile making every meal a healthy indulgence.
            </p>

            <h3>Contact us Today</h3>
            <p>
            For a golden touch that transcends culinary boundaries and nurtures health choose Eros Agro. Contact us at +91 9914826464 and let our Turmeric Powder be a golden key to unlocking the full potential of your culinary creations. Elevate your dishes with the purity potency and unparalleled quality of Eros Agros Turmeric Powder and embark on a flavorful journey that delights the senses and fortifies the body.
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
export default RedChilliPowder;
