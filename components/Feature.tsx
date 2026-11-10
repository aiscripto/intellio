import { FeatureInterface } from "@/utility/objectInterface";
import Image from "next/image";
import React from "react";

const features: FeatureInterface[] = [
  {
    title: "Business Growth Statistics",
    description:
      "Monotonectally whiteboard proactive value with leading main<br />niche markets rather than fully tested",
    image: "/images/demo-img/feature-thumb1.png",
    imageSize: 608,
    className: "",
    gridClass: "col-xl-6 col-lg-6",
  },
  {
    title: "Monthly Report Statistics",
    description:
      "Monotonectally whiteboard proactive value with leading main<br />niche markets rather than fully tested",
    image: "/images/demo-img/feature-thumb2.png",
    imageSize: 608,
    className: "two",
    gridClass: "col-xl-6 col-lg-6",
  },
  {
    title: "User Engagements",
    description:
      "Monotonectally whiteboard proactive value<br />niche markets rather than",
    image: "/images/demo-img/feature-thumb3.png",
    imageSize: 384,
    className: "three",
    gridClass: "col-xl-4 col-lg-4",
  },
  {
    title: "Payment Transfer",
    description:
      "Monotonectally whiteboard proactive value leading<br />niche markets rather than fully",
    image: "/images/demo-img/feature-thumb4.png",
    imageSize: 384,
    className: "four",
    gridClass: "col-xl-8 col-lg-8",
    listItems: [
      "Whiteboard proactive value leading",
      "Continually generate turnkey potentialities<br />before competitive apps",
      "Dramatically monetize competitive",
    ],
  },
];

const features2: FeatureInterface[] = [
  {
    title: "Automated Charts",
    description:
      "Monotonectally whiteboard proactive with leading continually niche markets rather than fully tested",
    image: "/images/demo-img/feature-thumb31.png",
    imageSize: 566,
    className: "",
    gridClass: "col-xl-6 col-lg-6",
  },
  {
    title: "Smart Security Integration",
    description:
      "Monotonectally whiteboard proactive with leading continually niche markets rather than fully tested",
    image: "/images/demo-img/feature-thumb32.png",
    imageSize: 440,
    className: "two",
    gridClass: "col-xl-6 col-lg-6",
  },
  {
    title: "Smart Growth system",
    description:
      "Monotonectally whiteboard proactive with niche markets rather than",
    image: "/images/demo-img/feature-thumb33.png",
    imageSize: 325,
    className: "three",
    gridClass: "col-xl-4 col-lg-4",
  },
  {
    title: "Deep Insights AI Automation",
    description:
      "Monotonectally whiteboard proactive with leading main niche markets rather than fully tested",
    image: "",
    imageSize: 120,
    className: "four",
    gridClass: "col-xl-8 col-lg-8",
    listItems: [
      "Whiteboard proactive value",
      "Continually generate market",
      "Dramatically monetize",
    ],
    diagram: true,
  },
];

interface FeatureBoxProps {
  feature: FeatureInterface;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({ feature }) => (
  <div className={feature.gridClass}>
    <div className={`single-feature-box ${feature.className}`}>
      <div className="feature-content">
        <h4 className="text-anime-3">{feature.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: feature.description }} />
        {feature.listItems && (
          <div className="feature-list-iteam">
            <ul>
              {feature.listItems.map((item, index) => (
                <li key={index}>
                  <Image
                    width={22}
                    height={20}
                    src="/images/demo-img/check.png"
                    alt="check"
                  />{" "}
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {feature.diagram && (
          <div className="feature-diagram">
            <h2 className="feature-circle">AI</h2>
            <div className="feature-connections">
              <div className="node">Development</div>
              <div className="node two">Investment</div>
              <div className="node">Build &amp; Hold</div>
            </div>
            <div className="feature-diagram-line">
              <Image
                width={246}
                height={0}
                sizes="100vw"
                style={{ width: "246px", height: "auto", objectFit: "cover" }}
                src="/images/demo-img/feat-ai-line.png"
                alt="diagram"
              />
            </div>
          </div>
        )}
      </div>
      {feature.image && (
        <div className="feature-thumb">
          <figure className="reveal">
            <Image
              width={feature.imageSize}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              src={feature.image}
              alt="thumb"
            />
          </figure>
        </div>
      )}
    </div>
  </div>
);

export const Feature1: React.FC<{
  containerClass?: string;
  item?: number;
}> = ({ containerClass = "feature-section-one", item = 1 }) => {
  const featuresItems = item === 1 ? features : features2;
  return (
    <section className={containerClass}>
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Powerful Features</h5>
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
          {featuresItems.slice(0, 2).map((feature, index) => (
            <FeatureBox key={index} feature={feature} />
          ))}
        </div>
        <div className="row">
          {featuresItems.slice(2, 4).map((feature, index) => (
            <FeatureBox key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
