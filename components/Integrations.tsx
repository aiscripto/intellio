import { IntegrationInterface } from "@/utility/objectInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const integrationData: IntegrationInterface = {
  subtitle: "Integrations",
  title: ["Foundation for High Perform", "Business Capability"],
  description:
    "Monotonectally whiteboard proactive value with leading continually to niche markets rather than fully tested result",
  listItems: [
    "Whiteboard proactive value leading",
    "Top notch customers Integrations",
  ],
  buttonText: "Explore More",
  buttonLink: "about",
  image: "/images/demo-img/integration-thumb.png",
  shapeImage: "/images/demo-img/integration-thumb-shape.png",
  effectImage: "/images/demo-img/integration-effient.png",
};

export const Integrations1: React.FC = () => {
  const {
    subtitle,
    title,
    description,
    listItems,
    buttonText,
    buttonLink,
    image,
    shapeImage,
    effectImage,
  } = integrationData;

  return (
    <section className="integration-section-one">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="integration-thumb">
              <figure className="reveal">
                <Image
                  width={576}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src={image}
                  alt="thumb"
                />
              </figure>
              <div className="integration-shape">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src={shapeImage}
                  alt="shape"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">{subtitle}</h5>
              </div>
              <div className="section-title">
                {title.map((line, index) => (
                  <h1 key={index} className="title split-text">
                    {line}
                  </h1>
                ))}
              </div>
              <div className="section-desc">
                <p className="text-anime-3">{description}</p>
              </div>
            </div>
            <div className="integration-list-item">
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>
                    <Image
                      width={22}
                      height={20}
                      sizes="100vw"
                      style={{
                        width: "22",
                        height: "20",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/check.png"
                      alt="check"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="integration-btn">
              <Link href={buttonLink}>
                {buttonText}
                <i className="fa-solid fa-arrow-down-to-line" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="integration-effient fade-in">
        <Image
          width={1311}
          height={0}
          sizes="100vw"
          style={{
            width: "1311px",
            height: "auto",
            objectFit: "cover",
          }}
          src={effectImage}
          alt="effient"
        />
      </div>
    </section>
  );
};

export const Integrations2: React.FC<{ containerClass?: string }> = ({
  containerClass = "integration-section-two",
}) => {
  return (
    <section className={containerClass}>
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Integrations</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Integrated with Smart AI Tools
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
          <div className="col-xl-12">
            <div className="integration-thumb fade-in">
              <figure className="reveal">
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
      <div className="integration-effient21 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/about-effient21.png"
          alt="about effient"
        />
      </div>
      <div id="js-particles-testimonial" />
    </section>
  );
};
