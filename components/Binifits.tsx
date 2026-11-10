import { BenefitInterface, MarqueeInterface } from "@/utility/objectInterface";
import Image from "next/image";
import React from "react";
import Marquee from "./Marquee";

const marqueeItems: MarqueeInterface[] = [
  { text: "ARTIFICIAL", highlight: true },
  { text: "INNOVATION", highlight: false },
  { text: "TECHNOLOGY", highlight: true },
  { text: "INNOVATION", highlight: false },
  { text: "ARTIFICIAL", highlight: true },
  { text: "INNOVATION", highlight: false },
];

const benefits: BenefitInterface[] = [
  {
    icon: "/images/demo-img/binifits-icon1.png",
    title: "Task Management",
    description: "Download and use",
    className: "",
  },
  {
    icon: "/images/demo-img/binifits-icon2.png",
    title: "Task Management",
    description: "Download and use",
    className: "two",
  },
  {
    icon: "/images/demo-img/binifits-icon3.png",
    title: "Task Management",
    description: "Download and use",
    className: "three",
  },
  {
    icon: "/images/demo-img/binifits-icon4.png",
    title: "Task Management",
    description: "Download and use",
    className: "four",
  },
];

interface BenefitBoxProps {
  benefit: BenefitInterface;
}

const BenefitBox: React.FC<BenefitBoxProps> = ({ benefit }) => (
  <div className={`single-binifits-box ${benefit.className}`}>
    <div className="binifits-box">
      <div className="binifits-icon">
        <Image
          width={32}
          height={0}
          sizes="100vw"
          style={{ width: "34px", height: "auto", objectFit: "cover" }}
          src={benefit.icon}
          alt="icon"
        />
      </div>
      <div className="binifits-content">
        <div className="title">
          <h4 className="text-anime-3">{benefit.title}</h4>
        </div>
        <div className="description">
          <p>{benefit.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export const Binifits1: React.FC = () => {
  return (
    <div
      className="binifits-marquee-area-one"
      style={{
        backgroundImage: "url(/images/demo-img/binifits-marquee-bg1.png)",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Marquee items={marqueeItems} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center d-flex">
          <div className="col-xl-4 col-lg-4 col-md-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <BenefitBox key={index} benefit={benefit} />
            ))}
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="binifits-thumb">
              <figure className="reveal">
                <Image
                  width={403}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/mobile.png"
                  alt="mobile app"
                />
              </figure>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {benefits.slice(2, 4).map((benefit, index) => (
              <BenefitBox key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Benifits2: React.FC = () => {
  const benefits: {
    img: string;
    title: string;
    text: string;
  }[] = [
    {
      img: "/images/demo-img/binifits-icon21.png",
      title: "Real time sales Insights",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
    {
      img: "/images/demo-img/binifits-icon23.png",
      title: "Smart AI Chatbot",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
    {
      img: "/images/demo-img/binifits-icon22.png",
      title: "Seamless Integrations",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
    {
      img: "/images/demo-img/binifits-icon23.png",
      title: "Scalable Growth",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
    {
      img: "/images/demo-img/binifits-icon24.png",
      title: "Increased Efficiency",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
    {
      img: "/images/demo-img/binifits-icon25.png",
      title: "Latest Technology",
      text: "Monotonectally whiteboard proactive value niche markets rather than media",
    },
  ];
  return (
    <section className="benifits-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Benifits</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Empowering Business to Success
                </h1>
                <h1 className="title split-text">Targeted Innovations</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
              <div className="single-binifits-box">
                <div className="binifits-content">
                  <div className="binifits-icon">
                    <Image
                      width={25}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "25px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src={benefit.img}
                      alt={benefit.title}
                    />
                  </div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="binifits-effient fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/binifits-effiect21.png"
          alt="effient"
        />
      </div>
    </section>
  );
};
