"use client";
import Image from "next/image";
import React, { Fragment } from "react";

const Process: React.FC<{ containerClass?: string; layout?: number }> = ({
  containerClass = "process-section-one",
  layout = 1,
}) => {
  const processData: {
    icon: string;
    title: string;
    description: string;
    number: string;
    active?: boolean;
  }[] = [
    {
      icon: "/images/demo-img/process-icon1.png",
      title: "Download Our Apps",
      description:
        "Monotonectally whiteboard proactive with niche markets rather than",
      number: "01",
    },
    {
      icon: "/images/demo-img/process-icon2.png",
      title: "Activation Function",
      description:
        "Monotonectally whiteboard proactive with niche markets rather than",
      number: "02",
      active: true,
    },
    {
      icon: "/images/demo-img/process-icon3.png",
      title: "Ready for Use Now",
      description:
        "Monotonectally whiteboard proactive with niche markets rather than",
      number: "03",
    },
  ];
  return (
    <section className={containerClass}>
      <div className="auto-container">
        {layout == 1 ? (
          <div className="row">
            <div className="col-xl-12">
              <div className="process-section-title">
                <h2>PROCESS</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-xl-12">
              <div className="sec-title text-center">
                <div className="section-sub-title">
                  <h5 className="sub-title split_chars">Process</h5>
                </div>
                <div className="section-title">
                  <h1 className="title split-text">
                    Follow 3 Easy Steps for Finished
                  </h1>
                  <h1 className="title split-text">Your Working Process</h1>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {processData.map(
            ({ icon, title, description, number, active }, i) => (
              <div className="col-xl-4 col-lg-6" key={i}>
                <div className={`single-process-box${active ? " active" : ""}`}>
                  <div className="process-icon">
                    <Image
                      width={40}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "40px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src={icon}
                      alt={title}
                    />
                  </div>
                  <div className="process-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div className="process-number">
                    <span>{number}</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {layout == 1 ? (
        <Fragment>
          <div className="process-shape1">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              src="/images/demo-img/process-shape1.png"
              alt="shape"
            />
          </div>
          <div className="process-shape2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              src="/images/demo-img/process-shape2.png"
              alt="shape"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="process-shape1">
            <Image
              width={497}
              height={0}
              sizes="100vw"
              style={{ width: "497px", height: "auto", objectFit: "cover" }}
              src="/images/inner-img/procss-shape1.png"
              alt="shape"
            />
          </div>
          <div className="process-shape2">
            <Image
              width={498}
              height={0}
              sizes="100vw"
              style={{ width: "498px", height: "auto", objectFit: "cover" }}
              src="/images/inner-img/procss-shape2.png"
              alt="shape"
            />
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default Process;

export const Process2: React.FC = () => {
  interface ProcessTab {
    id: string;
    number: string;
    title: string;
    icon: string;
    desc: string;
    btnLink: string;
    img: string;
    activeContent?: {
      subtitle: string;
      heading: string;
      link: string;
    };
  }

  const processTabs: ProcessTab[] = [
    {
      id: "tab1",
      number: "01",
      title: "Download Our Apps",
      icon: "/images/demo-img/process-icon40.png",
      desc: "Monotonectally whiteboard proactive with leading niche markets rather than fully tested results into innovative action items",
      btnLink: "#",
      img: "/images/demo-img/process-download-img.png",
    },
    {
      id: "tab2",
      number: "02",
      title: "Activation Function",
      icon: "/images/demo-img/process-icon41.png",
      desc: "Monotonectally whiteboard proactive with leading niche markets rather than fully tested results into innovative action items",
      btnLink: "#",
      img: "/images/demo-img/process-actived-img.png",
    },
    {
      id: "tab3",
      number: "03",
      title: "Ready for Use Now",
      icon: "/images/demo-img/process-icon41.png",
      desc: "Monotonectally whiteboard proactive with leading niche markets rather than fully tested results into innovative action items",
      btnLink: "#",
      img: "/images/demo-img/process-active-img.png",
      activeContent: {
        subtitle: "Ready",
        heading: "Ready Successful!",
        link: "#",
      },
    },
  ];
  const [activeTab, setActiveTab] = React.useState("tab1");

  return (
    <section className="process-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Working Process</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  3 Easy process for finished setup
                </h1>
              </div>
              <div className="section-desc">
                <p className="text-anime-3">
                  Monotonectally whiteboard proactive value with leading
                  continually niche markets rather than fully tested results
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {processTabs.map((tab) => (
            <div key={tab.id} className="col-xl-4 col-lg-4 col-md-6">
              <div
                className={`process-item tab-btn ${
                  activeTab === tab.id ? "active" : ""
                }`}
                data-tab={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="process-number">
                  <span>{tab.number}</span>
                </div>
                <div className="process-line">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/process-line.png"
                    alt="line"
                  />
                </div>
                <div className="process-title">
                  <h3>{tab.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row process-wrapper">
          {processTabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="single-process-box">
                    <div className="process-content">
                      <div className="process-icon">
                        <Image
                          width={30}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "30px",
                            height: "auto",
                            objectFit: "cover",
                          }}
                          src={tab.icon}
                          alt="icon"
                        />
                      </div>
                      <h4 className="title">{tab.title}</h4>
                      <p className="desc">{tab.desc}</p>
                      <a className="btn" href={tab.btnLink}>
                        Explore More
                        <i className="fa-light fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  {tab.activeContent ? (
                    <div className="process-active-box">
                      <div className="process-dot">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="process-sub-title">
                        <h5>{tab.activeContent.subtitle}</h5>
                      </div>
                      <div className="active-icon">
                        <span>
                          <i className="fa-solid fa-check" />
                        </span>
                      </div>
                      <div className="active-content">
                        <h2>{tab.activeContent.heading}</h2>
                        <a href={tab.activeContent.link}>
                          LET’S GO
                          <i className="fa-light fa-arrow-right" />
                        </a>
                      </div>
                      <div className="process-shape">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                          src="/images/demo-img/process-shape41.png"
                          alt="shape4"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="process-thumb-box">
                      <div className="process-thumb">
                        <figure className="reveal">
                          <Image
                            width={618}
                            height={0}
                            sizes="100vw"
                            style={{
                              width: "618px",
                              height: "auto",
                              objectFit: "cover",
                            }}
                            src={tab.img}
                            alt={tab.title}
                          />
                        </figure>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
