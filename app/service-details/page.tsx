import IntellioLayout from "@/layout/IntellioLayout";
import Image from "next/image";
import React from "react";

const ServiceDetailsPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="service-details-page-title"
        style={{ backgroundImage: "url(images/inner-img/team-bg.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">
                Our service Details
              </h5>
              <h1 className="page-title split-text">Our Expert service</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <div className="row">
            <div className="services-details-area">
              <div className="auto-container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="services-details-thumb">
                          <figure>
                            <Image
                              height={852}
                              width={620}
                              src="/images/inner-img/service-details-thumb.png"
                              alt="thumb"
                            />
                          </figure>
                        </div>
                        <div className="services-details-content">
                          <h4 className="services-details-title">
                            proactive with leading business
                          </h4>
                          <p className="services-details-desc">
                            Monotonectally whiteboard proactive value with
                            leading niche markets rather than fully tested
                            results Appropriately evolve customized channels
                            before viral leadership skills. Energistically
                            repurpose mission-critical niches whereas
                            economically sound synergy. Intrinsicly cultivate
                            business experiences before parallel quality
                            vectors. Uniquely incubate client-focused scenarios
                            whereas leveraged partnerships. Holisticly supply
                            economically sound functionalities for impactful
                            testing procedures market research communicate
                            virtual web services before holistic convergence
                            main Collaboratively synthesize holistic
                            infomediaries with cross
                          </p>
                          <p className="services-details-desc">
                            Monotonectally whiteboard proactive value with
                            leading niche markets rather than fully tested
                            results Appropriately evolve customized channels
                            before viral leadership skills. Energistically
                            repurpose mission-critical niches whereas
                            economically sound synergy.{" "}
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="service-details-icon-box">
                              <div className="service-details-icon-thumb">
                                <Image
                                  width={46}
                                  height={48}
                                  src="/images/demo-img/about-icon1.png"
                                  alt="icon"
                                />
                              </div>
                              <div className="service-details-box-content">
                                <h4>Web Application Development</h4>
                                <p>
                                  We analyze your unique business needs to
                                  develop machine learning
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="service-details-icon-box">
                              <div className="service-details-icon-thumb">
                                <Image
                                  width={42}
                                  height={42}
                                  src="/images/demo-img/about-icon2.png"
                                  alt="icon"
                                />
                              </div>
                              <div className="service-details-box-content">
                                <h4>Mobile Apps Interface</h4>
                                <p>
                                  Our approach focuses on delivering end-to-end
                                  AI solutions that optimize
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="services-details-text">
                          <div className="service-details-text-icon">
                            <Image
                              width={77}
                              height={77}
                              src="/images/demo-img/testi-autor41.png"
                              alt="img"
                            />
                          </div>
                          <div className="service-details-text-content">
                            <p>
                              Competently architect intermandated deliverables
                              client niches continually underwhelm
                            </p>
                          </div>
                        </div>
                        <h4 className="services-details-title">
                          What the Benifits?
                        </h4>
                        <p className="services-details-desc">
                          Alternative innovation to ethical network
                          environmental whiteboard pursue compelling results for
                          premier methods empowerment. Dramatically architect go
                          forward opportunities{" "}
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-benifits-box">
                              <div className="benifits-thumb">
                                <Image
                                  width={414}
                                  height={371}
                                  src="/images/demo-img/call-thumb11.png"
                                  alt="img"
                                />
                              </div>
                              <div className="benifits-content">
                                <h4>AI Model Training</h4>
                                <ul>
                                  <li>
                                    <i className="fa-regular fa-check" />
                                    New Modern Equipments
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-check" />
                                    Expert’s Volunteers
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-benifits-box">
                              <div className="benifits-thumb">
                                <Image
                                  width={414}
                                  height={371}
                                  src="/images/demo-img/call-thumb42.png"
                                  alt="img"
                                />
                              </div>
                              <div className="benifits-content">
                                <h4>Custom AI Solution</h4>
                                <ul>
                                  <li>
                                    <i className="fa-regular fa-check" />
                                    New Modern Equipments
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-check" />
                                    Expert’s Volunteers
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="widget-sidber">
                          <div className="widget-sidber-content">
                            <h4>Categories</h4>
                          </div>
                          <div className="widget-category">
                            <ul>
                              <li>
                                <a href="#">
                                  AI Development
                                  <i className="fa-solid fa-arrow-right-long" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Machine Learning
                                  <i className="fa-solid fa-arrow-right-long" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Predictive Analytics
                                  <i className="fa-solid fa-arrow-right-long" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Chatbot Solutions
                                  <i className="fa-solid fa-arrow-right-long" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Model Training
                                  <i className="fa-solid fa-arrow-right-long" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="widget-sidber">
                          <div className="widget-sidber-content">
                            <h4>Downloads</h4>
                          </div>
                          <div className="widget-sidber-download-button">
                            <a href="#">
                              <i className="fa-regular fa-file-lines" />
                              Service Report
                              <span>
                                <i className="fa-solid fa-download" />
                              </span>
                            </a>
                            <a className="active" href="#">
                              <i className="fa-regular fa-file-lines" />
                              Download Lists
                              <span>
                                <i className="fa-solid fa-download" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="widget-sidber-contact-box">
                          <div className="widget-sidber-contact">
                            <span>
                              <i className="fa-regular fa-circle-phone" />
                            </span>
                          </div>
                          <p className="widget-sidber-contact-text">
                            Call Us Anytime
                          </p>
                          <h3 className="widget-sidber-contact-number">
                            +123 (4567) 890
                          </h3>
                          <span className="widget-sidber-contact-gmail">
                            <i className="fa-solid fa-envelope" />{" "}
                            mailto:example@gmail.com
                          </span>
                          <div className="widget-sidber-contact-btn">
                            <a href="contact.html">
                              Contact Us
                              <i className="fa-solid fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IntellioLayout>
  );
};

export default ServiceDetailsPage;
