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
                          src="/assets/images/spices/top_12.jpg"
                          alt="Blog Image"
                          width={800}
                          height={500}
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
                        <a>
                          Unveiling the Top 12 Health Benefits of Coriander
                          Seeds
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Unveiling the Top 12 Health Benefits of Coriander Seeds
                      Coriander seeds, derived from the coriander plant
                      (Coriandrum sativum) are not just a staple spice in
                      kitchens worldwide; they also offer an array of impressive
                      health benefits.......
                    </p>
                    {/* <a href="#" className="btn-link">
                      Continue Reading
                    </a> */}
                  </div>
                </div>
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog-details">
                      <a>
                        <Image
                          src="/assets/images/spices/black_pepper_powder.jpg"
                          alt="Blog Image"
                          width={800}
                          height={500}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
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
                        <a>
                          Unveiling the Top 10 Health Benefits of Black Pepper
                        </a>
                      </Link>
                    </h3>
                    <p>
                    Black pepper commonly known as the king of spices is more than just a flavour enhancer in culinary dishes.....
                    </p>
                    {/* <a href="#" className="btn-link">
                      Continue Reading
                    </a> */}
                  </div>
                </div>

                {/* <div className="fioxen-pagination text-center wow fadeInUp">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
