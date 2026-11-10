import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-section-one">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="choose-thumb-wrapper">
              <div className="choose-thumb">
                <figure className="reveal">
                  <Image
                    width={470}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "470px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/choose-thumb1.png"
                    alt="thumb"
                  />
                </figure>
              </div>
              <div className="circle-text">
                <svg viewBox="0 0 300 300">
                  {/* Circle path */}
                  <defs>
                    <path
                      id="circlePath1"
                      d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                    />
                  </defs>
                  {/* Text along the circle */}
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      CREATIVE INNOVATION BUSINESS STARTUP
                    </textPath>
                  </text>
                </svg>
                {/* Center symbol */}
                <div className="circle-icon">
                  <i className="fa-light fa-arrow-right" />
                </div>
              </div>
              <div className="choose-thumb-circle">
                <Image
                  width={494}
                  height={0}
                  sizes="100vw"
                  style={{ width: "494px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-thumb-circle.png"
                  alt="circle"
                />
              </div>
              <div className="choose-effiect2">
                <Image
                  width={882}
                  height={0}
                  sizes="100vw"
                  style={{ width: "882px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-effiect2.png"
                  alt="effiect1"
                />
              </div>
              <div className="choose-shape1">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape1.png"
                  alt="shape1"
                />
              </div>
              <div className="choose-shape2">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape2.png"
                  alt="shape1"
                />
              </div>
              <div className="choose-shape3">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape3.png"
                  alt="shape1"
                />
              </div>
              <div className="choose-shape4">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape4.png"
                  alt="shape1"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Why Choose us</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">All in One Workspace Every</h1>
                <h1 className="title split-text">Modern Technology</h1>
              </div>
              <div className="section-desc">
                <p>
                  Monotonectally whiteboard proactive value with leading
                  continually niche markets rather than fully tested result
                  maximizing total linkage dramatically procrastinate markets
                </p>
              </div>
            </div>
            <div className="choose-wrapper-box">
              <div className="choose-icon-box">
                <div className="choose-icon-content">
                  <div className="choose-icon">
                    <Image
                      width={30}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "30px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/choose-icon1.png"
                      alt="icon"
                    />
                  </div>
                  <div className="choose-content">
                    <h4>24 Hours Premium Supports</h4>
                  </div>
                </div>
              </div>
              <div className="choose-icon-box">
                <div className="choose-icon-content">
                  <div className="choose-icon">
                    <Image
                      width={30}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "30px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/choose-icon2.png"
                      alt="icon"
                    />
                  </div>
                  <div className="choose-content">
                    <h4>100+ Professional Members</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose-btn">
              <Link href="/about">
                Get Started
                <i className="fa-light fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-effiect1">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/choose-effiect1.png"
          alt="effect2"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
