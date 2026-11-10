import { About3 } from "@/components/About";
import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import { Faq2 } from "@/components/Faq";
import { Marquee2 } from "@/components/Marquee";
import Process from "@/components/Process";
import Team from "@/components/Team";
import IntellioLayout from "@/layout/IntellioLayout";
import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
  const thumbs = [
    {
      src: "/images/demo-img/dashbord-thumb1.png",
      width: 536,
      col: "col-lg-5",
    },
    {
      src: "/images/demo-img/dashbord-thumb2.png",
      width: 312,
      col: "col-lg-3",
    },
    {
      src: "/images/demo-img/dashbord-thumb3.png",
      width: 424,
      col: "col-lg-4",
    },
  ];
  return (
    <IntellioLayout>
      <section
        className="about-page-title"
        style={{
          backgroundImage: "url(images/inner-img/about-page-bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Our Company</h5>
              <h1 className="page-title split-text">About Our Company</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <div className="row">
            {thumbs.map(({ src, col, width }, i) => (
              <div className={col} key={i}>
                <div className="dashbord-thumb">
                  <figure className="reveal">
                    <Image
                      width={width}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: `${width}px`,
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src={src}
                      alt={`dashboard thumb ${i + 1}`}
                    />
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About3 />
      <Brand
        title={true}
        containerClass="auto-container brand-container overflow-hidden"
        wrapperClass="brand-area-one style-four inner"
      />
      <Process containerClass="process-section-one inner" layout={2} />
      <Team />
      <Marquee2 />
      <Faq2 />
      <Blog />
    </IntellioLayout>
  );
};

export default AboutPage;
