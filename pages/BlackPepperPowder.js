import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import BlackPepper from "./BlackPeppers";

const BlackPepperPowder = () => {
  return (
    <Layout>
      <PageBanner title={"BlackPepperPowder"} />
      <h2 className="headingss">Black Pepper Powder</h2>

      <section className="bodys">
        <div className="containers">
          <div className="main-contents">
            <div className="post-thumbnail">
              <Image
                src="/assets/images/spices/blackpowders.png"
                alt="Blog Image"
                width={450}
                height={250}
              />
            </div>
            <h3>
              Eros Agro: Your Gateway to Vibrant Flavor with Premium Indian Red
              Chilli Flakes!
            </h3>
            <p>
              Embark on a culinary journey with Eros Agro, where we proudly
              present the finest Indian red chilli flakes of exceptional
              quality. As dedicated exporters we seal the freshness of these
              flavorful flakes in tamper-proof containers ensuring a culinary
              experience that is nothing short of exceptional.
            </p>
            <h3>Quality Assurance:</h3>
            <p>
            At Eros Agro we prioritise excellence. Our red chilli flakes also known as PAPRIKA are prepared from mild red chilli peppers, offering a flavour spectrum that ranges from hot to mild. Valued for both taste and its vivid red colour derived from capsanthin our chilli flakes come in tamper-proof containers to preserve their freshness.

            </p>
            <h3>Culinary Brilliance</h3>
            <p>
            Dry chilli flakes a condiment consisting of dried and crushed chilli peppers have become a staple in kitchens worldwide. They are not only known for their delightful taste but also for their bright red hue enhancing the visual appeal of dishes. Nowadays chilli flakes share table space alongside salt and pepper in many hotels and restaurants becoming a visual and flavorful enhancement to various cuisines.

            </p>
            <h3>Global Culinary Companion</h3>
            <p>
            Chilli flakes are a must-have ingredient in Mexican and Italian cuisines adding depth and heat to a variety of dishes. The simple act of topping your food with chilli flakes elevates the taste to another level making them a convenient choice to spice up your pizza or curry with the bold flavours of Indian Red Chilli Flakes.
.
            </p>
            <h3>Contact us Today</h3>
            <p>
            For premium Indian red chilli flakes that bring vibrancy and heat to your culinary creations, choose Eros Agro. Contact us at +91 9914826464 and let our flavorful offerings become an essential part of your culinary adventures. Spice up your dishes and elevate your dining experience with Eros Agros exceptional chilli flakes!
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
export default BlackPepperPowder;
