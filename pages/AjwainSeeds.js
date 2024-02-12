import React from 'react';
import Layout from '../src/layouts/Layout';
import PageBanner from '../src/components/PageBanner';

const AjwainSeeds = () => {
  return (
    <Layout>
      <PageBanner title={"Ajwain Seeds"} pageName={"Products"} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mb-4">The Wonders of Ajwain Seeds</h1>
            <p className="mb-3">
              Ajwain  also known as Carom Seeds has been a part of traditional Indian medicine for ages. With its unique flavor, its not only a staple in the kitchen but also famed for its medicinal properties.
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
              Eros Agro ensures that our Ajwain seeds are carefully picked, preserving their natural taste and aroma. Incorporating these seeds into your daily diet can contribute significantly to a healthier lifestyle.
            </p>
          </div>
          <section className="fioxen-add-listing pt-50 pb-60">
        <div className="container">
          <form id="googleForm">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form general-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Request Product</h4>
                  <div className="row">
                    <div>
                      <iframe
                        title="Google Form"
                        src="https://docs.google.com/forms/d/1VxfZTiu-QToQIjLLGYlbBBfVCxk2YEv2m5hMBYPZy_Q/viewform?embedded=true"
                        width="640"
                        height="800"
                      >
                        Loading...
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
        </div>
      </div>
    </Layout>
  );
};

export default AjwainSeeds;
