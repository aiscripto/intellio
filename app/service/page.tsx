import { ServicesItem } from "@/components/Services";
import IntellioLayout from "@/layout/IntellioLayout";
import React from "react";

const ServicePage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="service-page-title"
        style={{
          backgroundImage: "url(images/inner-img/about-page-bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="service-section-one p-0 bg-transparent">
          <div className="auto-container">
            <div className="row">
              <div className="title-content">
                <h5 className="page-sub-title split_chars">Our Service</h5>
                <h1 className="page-title split-text">Service Our Company</h1>
                <p className="page-desc title-anim">
                  Monotonectally whiteboard proactive with leading business to
                  niche markets rather than tested
                </p>
              </div>
            </div>
            <ServicesItem />
          </div>
        </div>
      </section>
    </IntellioLayout>
  );
};

export default ServicePage;
