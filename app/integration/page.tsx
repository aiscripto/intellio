import { Faq2 } from "@/components/Faq";
import { Marquee2 } from "@/components/Marquee";
import IntellioLayout from "@/layout/IntellioLayout";
import Image from "next/image";
import React from "react";

const IntegrationPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="integration-page-title"
        style={{ backgroundImage: "url(images/inner-img/integration-bg.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Integrations</h5>
              <h1 className="page-title split-text">Integrations</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="single-integration">
                <div className="integration-thumb fade-in">
                  <figure>
                    <Image
                      width={1320}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/integration-thumb21.png"
                      alt="thumb"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee2 />
      <Faq2 />
    </IntellioLayout>
  );
};

export default IntegrationPage;
