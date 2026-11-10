import { CounterInterface } from "@/utility/objectInterface";
import Image from "next/image";
import React from "react";
const counters: CounterInterface[] = [
  {
    count: "3",
    suffix: "M+",
    description: "Total 300,000 monthly active<br />Users our application",
    icon: "/images/demo-img/counter-icon1.png",
  },
  {
    count: "97",
    suffix: "%",
    description: "Mostly satisfaction Rates from<br />Happy customers",
    icon: "/images/demo-img/counter-icon3.png",
  },
  {
    count: "10",
    suffix: "k+",
    description: "Over 10,000+ happy clients<br />around the world",
    icon: "/images/demo-img/counter-icon3.png",
  },
];
export const Workflow1: React.FC = () => {
  return (
    <section className="workflow-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">
                  Power Up your workflow
                </h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Empowering Business to Success Beyond
                </h1>
                <h1 className="title split-text">
                  Limits Innovation Targeted Audience the
                </h1>
                <h1 className="title split-text">
                  Next Level your IT Business
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
              <div className="about-counter">
                <div className="counter-content">
                  <div className="counter-title">
                    <h3 className="counter">{counter.count}</h3>
                    <span>{counter.suffix}</span>
                  </div>
                  <div className="counter-icon">
                    <Image
                      width={20}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "20px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src={counter.icon}
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="counter-desc">
                  <p
                    dangerouslySetInnerHTML={{ __html: counter.description }}
                  />
                </div>
                <div className="about-effiect">
                  <Image
                    width={266}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "266px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/workflow-box-eff1.png"
                    alt="eff"
                  />
                </div>
                <div className="about-effiect2">
                  <Image
                    width={212}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "212px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/workflow-box-eff2.png"
                    alt="eff"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Workflow2: React.FC = () => {
  const workflows: {
    img: string;
    title: string;
    text: string;
  }[] = [
    {
      img: "/images/demo-img/workflow-thumb1.png",
      title: "Sentiment Analysis",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
    {
      img: "/images/demo-img/workflow-thumb2.png",
      title: "Smart Workflow",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
    {
      img: "/images/demo-img/workflow-thumb3.png",
      title: "Optimize User Experience",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
  ];
  return (
    <section className="workflow-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">
                  Power Up your workflow
                </h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Regular Software Updates for
                </h1>
                <h1 className="title split-text">Continue Improvement</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {workflows.map((workflow, index) => (
            <div className="col-xl-4 col-lg-6" key={index}>
              <div className="single-workflow-box">
                <div className="workflow-thumb">
                  <figure className="reveal">
                    <Image
                      width={382}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src={workflow.img}
                      alt={workflow.title}
                    />
                  </figure>
                </div>
                <div className="workflow-content">
                  <h3>{workflow.title}</h3>
                  <p>{workflow.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
