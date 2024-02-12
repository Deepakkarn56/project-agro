import React from "react";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/components/PageBanner";

const AjwainSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"Ajwain Seeds"} pageName={"Products"} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mb-4">Ajwain Seeds</h1>
            <p className="mb-3">
              Ajwain also known as Carom Seeds has been a part of traditional
              Indian medicine for ages. With its unique flavor, its not only a
              staple in the kitchen but also famed for its medicinal properties.
            </p>
            <h2 className="mb-3">Health Benefits of Ajwain Seeds</h2>
            <ul className="mb-4">
              <li>Helps in digestion and relief from indigestion</li>
              <li>Improves cholesterol levels</li>
              <li>Has anti-inflammatory effects</li>
              <li>May lower blood pressure levels</li>
              <li>Helps in treating common cold</li>
              <li>Provides relief from ear and toothache</li>
              <li>Helps in cleansing skin</li>
            </ul>
            <p>
              Eros Agro ensures that our Ajwain seeds are carefully picked,
              preserving their natural taste and aroma. Incorporating these
              seeds into your daily diet can contribute significantly to a
              healthier lifestyle.
            </p>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", width: "100vw", height: "100vh" }}>
  <iframe
    title="Google Form"
    src="https://docs.google.com/forms/d/1VxfZTiu-QToQIjLLGYlbBBfVCxk2YEv2m5hMBYPZy_Q/viewform?embedded=true"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
    allowFullScreen={true}
    loading="lazy"
  ></iframe>
</div>

      </div>
    </Layout>
  );
};

export default AjwainSeeds;
