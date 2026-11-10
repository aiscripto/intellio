import { Benifits2 } from "@/components/Binifits";
import { Faq2 } from "@/components/Faq";
import { FeatureBox } from "@/components/Feature";
import { Marquee2 } from "@/components/Marquee";
import IntellioLayout from "@/layout/IntellioLayout";
import { FeatureInterface } from "@/utility/objectInterface";
import React from "react";

const AboutPage: React.FC = () => {
  const featuresItems: FeatureInterface[] = [
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
  return (
    <IntellioLayout>
      <section
        className="feature-page-title"
        style={{ backgroundImage: "url(images/inner-img/feature-bg.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Features</h5>
              <h1 className="page-title split-text">Core Features</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
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

      <Benifits2 />
      <Marquee2 />
      <Faq2 />
    </IntellioLayout>
  );
};

export default AboutPage;
