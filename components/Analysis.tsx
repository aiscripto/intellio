import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Analysis1: React.FC = () => {
  return (
    <section className="about-section-three">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about-thumb">
              <figure className="reveal">
                <Image
                  width={578}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  src="/images/demo-img/about-thumb31.png"
                  alt="thumb"
                />
              </figure>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Analysis</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">Personalize Saas Solutions</h1>
                <h1 className="title split-text">For Your Challanges</h1>
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
              </ul>
            </div>
            <div className="about-btn">
              <Link href="/about">
                Explore More
                <i className="fa-light fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-effient21 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/about-effient21.png"
          alt="about effient"
        />
      </div>
    </section>
  );
};
