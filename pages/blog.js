import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import Image from "next/image";

const Blog = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post-item", sort, active);
    let list = document.querySelectorAll(".blog-post-item");
    setstate(getPagination(list.length, sort));
  }, [sort, active]);
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Our Blog"} />
      <section className="blog-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrapper pb-50">
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog-details">
                      <a>
                        <Image
                          src="/assets/images/spices/freshhubs.jpg"
                          alt="Blog Image"
                          width={900}
                          height={600}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
                    {/* <a href="#" className="cat-btn">
                      22 Nov - 2022
                    </a> */}
                    {/* <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-user" />
                            <a href="#">Eros_Spices</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">No Comments</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-menu" />
                            <a href="#">Uncategorized</a>
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    <h3 className="title">
                      <Link href="/blog-details">
                        <a>The Health Benefits of Cooking with Fresh Herbs: A Guide from Eros Agro</a>
                      </Link>
                    </h3>
                    <p>
                    In the realm of culinary exploration, fresh herbs stand out as vibrant gems, not only for their aromatic flavours but also for their remarkable health benefits....
                    </p>
                    <Link  href="/blog-details">
                      <a className="btn-link">
                      Continue Reading
                      </a>
                   
                    </Link>
                    
                    
                  </div>
                </div>
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog-details">
                      <a>
                        <Image
                          src="/assets/images/spices/spiceblendings.jpg"
                          alt="Blog Image"
                          width={900}
                          height={600}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
                    {/* <a href="#" className="cat-btn">
                      22 Nov - 2022
                    </a> */}
                    {/* <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-user" />
                            <a href="#">Eros_Spices</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">No Comment</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-menu" />
                            <a href="#">Uncategorized</a>
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    <h3 className="title">
                      <Link href="/blog-details1">
                        <a>The Art of Spice Blending: Tips and Tricks from Eros Agro's Experts</a>
                      </Link>
                    </h3>
                    <p>
                    Spice blending is a centuries-old culinary tradition that adds depth, complexity, and character to dishes from around the world.....
                    </p>
                    <Link href= "/blog-details1">
                    <a  className="btn-link">
                      Continue Reading
                    </a>
                    </Link>
                   
                  </div>
                </div>
                {/* new */}
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog-details">
                      <a>
                        <Image
                          src="/assets/images/spices/corniderss.jpg"
                          alt="Blog Image"
                          width={900}
                          height={600}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
                    {/* <a href="#" className="cat-btn">
                      22 Nov - 2022
                    </a> */}
                    <div className="post-meta">
                      {/* <ul>
                        <li>
                          <span>
                            <i className="ti-user" />
                            <a href="#">Eros_Spices</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">No Comments</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-menu" />
                            <a href="#">Uncategorized</a>
                          </span>
                        </li>
                      </ul> */}
                    </div>
                    <h3 className="title">
                      <Link href="/blog-details3">
                        <a>Unlocking the Power of Cumin: Culinary Uses and Health Properties</a>
                      </Link>
                    </h3>
                    <p>
                    Cumin with its warm and earthy flavour has been a staple spice in kitchens around the world for centuries. 
                    </p>
                    <Link href= "blog-details3">
                    <a className="btn-link">
                      Continue Reading
                    </a>
                    </Link>
                   
                  </div>
                </div>

                <div className="fioxen-pagination text-center wow fadeInUp">
                  <ul className="pagination-list">
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(active === 1 ? 1 : active - 1);
                        }}
                      >
                        <i className="ti-arrow-left" />
                      </a>
                    </li>
                    {state &&
                      state.map((s, i) => (
                        <li key={i}>
                          <a
                            className={` ${active === s ? "active" : ""}`}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(s);
                            }}
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(
                            active === state.length ? state.length : active + 1
                          );
                        }}
                      >
                        <i className="ti-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
