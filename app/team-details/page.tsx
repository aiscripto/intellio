import { CallToAction3 } from "@/components/CallToAction";
import IntellioLayout from "@/layout/IntellioLayout";
import Image from "next/image";
import React from "react";

const TeamDetailsPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="team-details-page-title"
        style={{ backgroundImage: "url(images/inner-img/team-bg.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Our Team Details</h5>
              <h1 className="page-title split-text">Meet Our Expert Team</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <div className="row">
            <div className="team-details-area">
              <div className="auto-container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="team-thumb">
                      <figure className="reveal">
                        <Image
                          width={520}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "520px",
                            height: "auto",
                            objectFit: "cover",
                          }}
                          src="/images/inner-img/team-details.jpg"
                          alt="team details"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="team-details-right">
                      <div className="team-details-content">
                        <div className="team-member-title">
                          <h4>Anowar Hossin Omio</h4>
                          <p>Dream-IT Founder &amp; CEO</p>
                        </div>
                        <p className="desc">
                          Monotonectally whiteboard proactive value with leading
                          niche markets rather than fully tested results
                          Appropriately evolve customized channels before viral
                          leadership skills. Energistically repurpose
                          mission-critical niches whereas economically sound
                          synergy. Intrinsicly cultivate business experiences
                          before parallel quality vectors. Uniquely incubate
                          client-focused scenarios whereas leveraged
                          partnerships. Holisticly supply economically sound
                          functionalities for impactful testing procedures
                          market research communicate virtual web services
                          before holistic convergence main Collaboratively
                          synthesize holistic infomediaries with cross
                        </p>
                      </div>
                      <div className="row add-bg">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="contact-info-box">
                            <div className="contact-info-icon">
                              <i className="fa-solid fa-phone" />
                            </div>
                            <div className="contact-info-content">
                              <h4>Call us Any time</h4>
                              <p>+123 (4567) 890</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="contact-info-box">
                            <div className="contact-info-icon">
                              <i className="fa-regular fa-envelope" />
                            </div>
                            <div className="contact-info-content">
                              <h4>Send E-Mail</h4>
                              <p>info@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="team-details-social-icon">
                        <ul>
                          <li>Social Media</li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-pinterest-p" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team-details-location-box">
                        <div className="contact-info-icon">
                          <i className="fa-regular fa-location-dot" />
                        </div>
                        <div className="contact-info-content">
                          <h4>Location</h4>
                          <p>
                            21 King Street 5th Floor Hamilton, Ontario Canada
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="team-details-skills">
                      <h4>My Skills</h4>
                      <div className="wrapper">
                        <div className="skills">
                          <div className="skill-item">
                            <div className="donation-skill-title">
                              <h5>Brand Management</h5>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div
                                  className="bar progress-line"
                                  data-width={60}
                                >
                                  <div className="skill-percentage">
                                    <div className="count-box counted">
                                      <span
                                        className="count-text"
                                        data-speed={3000}
                                        data-stop={60}
                                      >
                                        60
                                      </span>
                                      %
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skills">
                          <div className="skill-item">
                            <div className="donation-skill-title">
                              <h5>Content Creation</h5>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div
                                  className="bar progress-line"
                                  data-width={70}
                                >
                                  <div className="skill-percentage">
                                    <div className="count-box counted">
                                      <span
                                        className="count-text"
                                        data-speed={3000}
                                        data-stop={70}
                                      >
                                        70
                                      </span>
                                      %
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
                  <div className="col-lg-6">
                    <div className="team-details-skills">
                      <h4>Success Project </h4>
                      <div className="wrapper">
                        <div className="skills">
                          <div className="skill-item">
                            <div className="donation-skill-title">
                              <h5>Digital Marketing</h5>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div
                                  className="bar progress-line"
                                  data-width={80}
                                >
                                  <div className="skill-percentage">
                                    <div className="count-box counted">
                                      <span
                                        className="count-text"
                                        data-speed={3000}
                                        data-stop={80}
                                      >
                                        80
                                      </span>
                                      %
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skills">
                          <div className="skill-item">
                            <div className="donation-skill-title">
                              <h5>Data Campaigns</h5>
                            </div>
                            <div className="skill-bar">
                              <div className="bar-inner">
                                <div
                                  className="bar progress-line"
                                  data-width={90}
                                >
                                  <div className="skill-percentage">
                                    <div className="count-box counted">
                                      <span
                                        className="count-text"
                                        data-speed={3000}
                                        data-stop={90}
                                      >
                                        90
                                      </span>
                                      %
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction3 />
    </IntellioLayout>
  );
};

export default TeamDetailsPage;
