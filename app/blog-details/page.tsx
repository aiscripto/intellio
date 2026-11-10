import { BlogCard } from "@/components/Blog";
import IntellioLayout from "@/layout/IntellioLayout";
import Image from "next/image";
import React from "react";

const BlogDetailsPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="blog-details-page-title"
        style={{ backgroundImage: "url(images/inner-img/blog-details.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Blog Details</h5>
              <h1 className="page-title split-text">Blog Details</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <div className="row">
            <div className="blog-details-area">
              <div className="auto-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-details-thumb">
                      <figure className="title-anim">
                        <Image
                          width={1290}
                          height={733}
                          src="/images/inner-img/blog-details-thumb.png"
                          alt="details thumb"
                        />
                      </figure>
                    </div>
                    <div className="blog-details-content">
                      <div className="meta-blog">
                        <span className="mate-text">10 AUG, 2025</span>
                        <span>Business Solutions</span>
                      </div>
                      <h4 className="blog-details-title">
                        Top 10 most popular AI Automation tools
                      </h4>
                      <p className="blog-details-desc">
                        Appropriately evolve customized channels before viral
                        leadership skills. Energistically repurpose
                        mission-critical niches whereas economically sound
                        synergy. Intrinsicly cultivate business experiences
                        before parallel quality vectors. Uniquely incubate
                        client-focused scenarios whereas leveraged partnerships.
                        Holisticly supply economically sound functionalities for
                        impactful testing procedures market research communicate
                        virtual web services before holistic convergence main
                        Collaboratively synthesize holistic infomediaries with
                        cross
                      </p>
                      <div className="blog-details-author-talk">
                        <div className="blog-details-quote">
                          <Image
                            height={50}
                            width={36}
                            src="/images/inner-img/blog-details-quote.png"
                            alt="quote"
                          />
                        </div>
                        <div className="blog-details-author-title">
                          <p>
                            Quickly disseminate synergistic deliverables after
                            interactive growth strategies.Phosfluorescently
                            negotiate user-centric mindshare for wireless
                            portals facilitate installed base channels rather
                            than
                          </p>
                        </div>
                      </div>
                      <h3 className="blog-details-title">
                        How to Use those tools perfectly?
                      </h3>
                      <p className="blog-details-desc two">
                        Whereas economically sound synergy. Intrinsicly
                        cultivate business experiences before parallel quality
                        vectors. Uniquely incubate client-focused scenarios
                        whereas leveraged partnerships. Holisticly supply
                        economically sound functionalities for impactful testing
                        procedures market research communicate virtual web
                        services before
                      </p>
                      <div className="blog-details-list-item">
                        <ul>
                          <li>
                            <Image
                              width={22}
                              height={20}
                              sizes="100vw"
                              style={{
                                width: "22",
                                height: "20",
                                objectFit: "cover",
                              }}
                              src="/images/demo-img/check.png"
                              alt=""
                            />
                            Interfaces rather than transparent initiative
                          </li>
                          <li>
                            <Image
                              width={22}
                              height={20}
                              sizes="100vw"
                              style={{
                                width: "22",
                                height: "20",
                                objectFit: "cover",
                              }}
                              src="/images/demo-img/check.png"
                              alt=""
                            />
                            Globally unleash user-centric testing procedures
                          </li>
                          <li>
                            <Image
                              width={22}
                              height={20}
                              sizes="100vw"
                              style={{
                                width: "22",
                                height: "20",
                                objectFit: "cover",
                              }}
                              src="/images/demo-img/check.png"
                              alt=""
                            />
                            Continually harness optimal methodologies
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-details-inner-block">
                            <figure className="reveal">
                              <Image
                                width={498}
                                height={330}
                                src="/images/inner-img/blog-details-img1.png"
                                alt="img"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-details-inner-block">
                            <figure className="reveal">
                              <Image
                                width={498}
                                height={330}
                                src="/images/inner-img/blog-details-img2.png"
                                alt="img"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <h3 className="blog-details-title two">
                        What’s Benefits?
                      </h3>
                      <p className="blog-details-desc three">
                        Whereas economically sound synergy. Intrinsicly
                        cultivate business experiences before parallel quality
                        vectors. Uniquely incubate client-focused scenarios
                        whereas leveraged partnerships. Holisticly supply
                        economically sound functionalities for impactful testing
                        procedures market research
                      </p>
                      <p className="blog-details-desc four">
                        Whereas economically sound synergy. Intrinsicly
                        cultivate business experiences before parallel quality
                        vectors. Uniquely incubate client-focused scenarios
                        whereas leveraged partnerships. Holisticly supply
                        economically
                      </p>
                    </div>
                  </div>
                  <div className="single-comment-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="blog-details-comment-title">
                          <h4>Comments (01)</h4>
                        </div>
                        <div className="blog-details-comment">
                          <div className="blog-details-comment-reply">
                            <a href="#">
                              <Image
                                width={16}
                                height={16}
                                src="/images/inner-img/blog-details-reply.png"
                                alt="icon"
                              />
                              Reply
                            </a>
                          </div>
                          <div className="blog-details-comment-thumb reveal">
                            <Image
                              width={60}
                              height={60}
                              src="/images/inner-img/blog-details-author-1.png"
                              alt="autor"
                            />
                          </div>
                          <div className="blog-details-comment-content">
                            <h2>Anjelina Watson</h2>
                            <span>16 Sep, 2025</span>
                            <ul className="blog-autor-ratting">
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li className="ratting-rate">(5.00)</li>
                            </ul>
                            <p>
                              Appropriately evolve customized channels before
                              viral leadership skills repurpose mission whereas
                              economically sound synergy. Intrinsicly cultivate
                              business
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-details-contact">
                      <div className="blog-details-contact-title">
                        <h4>Leave A Reply</h4>
                      </div>
                      <form
                        action="https://formspree.io/f/myyleorq"
                        method="POST"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="contact-input-box">
                              <input
                                type="text"
                                name="Your Name"
                                placeholder="Your Name"
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="contact-input-box">
                              <input
                                type="text"
                                name="Email"
                                placeholder="Your E-Mail"
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="contact-input-box">
                              <input
                                type="text"
                                name="Web Site"
                                placeholder="Enter Website"
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="contact-input-box">
                              <textarea
                                name="Message"
                                id="Meassage"
                                placeholder="Write a Comments..."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="blog-details-submi-button">
                              <button type="submit">
                                Submit Now
                                <i className="fa-light fa-arrow-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-section-one">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-12">
              <div className="sec-title text-center">
                <div className="section-title">
                  <h1 className="title split-text">Related Blog Post</h1>
                </div>
              </div>
            </div>
          </div>
          <BlogCard limit={3} />
        </div>
      </div>
    </IntellioLayout>
  );
};

export default BlogDetailsPage;
