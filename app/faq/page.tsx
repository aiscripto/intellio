import { CallToAction3 } from "@/components/CallToAction";
import { FaqPageContent } from "@/components/Faq";
import IntellioLayout from "@/layout/IntellioLayout";
import React from "react";

const FaqPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="accordion-page-title"
        style={{
          backgroundImage: "url(images/inner-img/faq-bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Faq’s</h5>
              <h1 className="page-title split-text">
                Frequently asked Question
              </h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <div className="accordion-section-one p-0 bg-transparent">
            <FaqPageContent />
          </div>
        </div>
      </section>
      <CallToAction3 />
    </IntellioLayout>
  );
};

export default FaqPage;
