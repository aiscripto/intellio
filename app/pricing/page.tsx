import { Faq2 } from "@/components/Faq";
import { Marquee2 } from "@/components/Marquee";
import { Price3Content } from "@/components/Pricing";
import IntellioLayout from "@/layout/IntellioLayout";
import React from "react";

const PricingPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="pricing-page-title"
        style={{ backgroundImage: "url(images/inner-img/pricing-bg.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Pricing Plan</h5>
              <h1 className="page-title split-text">Pricing Plans</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <Price3Content />
        </div>
      </section>
      <Marquee2 />
      <Faq2 />
    </IntellioLayout>
  );
};

export default PricingPage;
