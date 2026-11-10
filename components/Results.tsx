import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Results1: React.FC = () => {
  return (
    <section className="about-section-four">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Results</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Foundation for High Perform
                </h1>
                <h1 className="title split-text">Business Capability</h1>
              </div>
              <div className="section-desc">
                <p className="text-anime-3">
                  Monotonectally whiteboard proactive value with leading
                  continually to niche markets rather than fully tested result
                </p>
              </div>
            </div>
            <div className="about-item-list">
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
                    alt="check"
                  />
                  Whiteboard proactive value leading
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
                    alt="check"
                  />
                  Top notch customers Integrations technology
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
                    alt="check"
                  />
                  Whiteboard proactive value leading
                </li>
              </ul>
            </div>
            <div className="about-btn">
              <Link href="/about">
                Explore More
                <i className="fa-light fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4">
            <div className="summary-single-box">
              <div className="summary-title">
                <h2>Summary</h2>
              </div>
              <div className="summary-scedule">
                <ul>
                  <li>
                    <p>
                      <Image
                        width={24}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "24",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        src="/images/demo-img/summary-icon1.png"
                        alt="icon"
                      />
                      Overview
                    </p>
                    <span>3,690</span>
                  </li>
                  <li>
                    <p>
                      <Image
                        width={30}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "30",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        src="/images/demo-img/summary-icon2.png"
                        alt="icon"
                      />
                      Campaigns
                    </p>
                    <span>6,593</span>
                  </li>
                  <li>
                    <p>
                      <Image
                        width={26}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "26",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        src="/images/demo-img/summary-icon3.png"
                        alt="icon"
                      />
                      Keywords
                    </p>
                    <span>10,980</span>
                  </li>
                  <li>
                    <p>
                      <Image
                        width={26}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "26",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        src="/images/demo-img/summary-icon4.png"
                        alt="icon"
                      />
                      Active Users
                    </p>
                    <span>2,000</span>
                  </li>
                </ul>
                <div className="summary-saas-badge">
                  <div className="saas-cusor">
                    <span>AI Saas Innovation </span>
                  </div>
                  <div className="innovation-cusor">
                    <span>AI Saas Innovation</span>
                  </div>
                </div>
              </div>
              <div className="summary-box-effient fade-in">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  src="/images/demo-img/summary-box-effient.png"
                  alt="effient"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-effient-shape1 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "514px",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/about-four-shape1.png"
          alt="effient"
        />
      </div>
      <div className="about-effient-shape2 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "589px",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/about-four-shape2.png"
          alt="effient2"
        />
      </div>
    </section>
  );
};
