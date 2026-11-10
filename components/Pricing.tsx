"use client";
import {
  MarqueeInterface,
  PricingPlanInterface,
} from "@/utility/objectInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Marquee from "./Marquee";

interface PricingData {
  monthly: PricingPlanInterface[];
  yearly: PricingPlanInterface[];
}

const marqueeItems: MarqueeInterface[] = [
  { text: "PRICING PLANS", highlight: true },
  { text: "PRICING PLANS", highlight: false },
  { text: "PRICING", highlight: true },
  { text: "PRICING PLANS", highlight: false },
  { text: "PRICING", highlight: true },
  { text: "PRICING PLANS", highlight: false },
];

const features: string[] = [
  "60+ Premium features",
  "Unlimited supports",
  "90+ Expert members",
  "Data insights",
  "Free Hosting plans",
  "Lifetime updates",
];

const pricingData: PricingData = {
  monthly: [
    { name: "Basic", price: 19, period: "Monthly" },
    { name: "Standard", price: 39, period: "Monthly", isActive: true },
    { name: "Standard", price: 69, period: "Monthly" },
  ],
  yearly: [
    { name: "Basic", price: 49, period: "yearly" },
    { name: "Standard", price: 79, period: "yearly", isActive: true },
    { name: "Business", price: 99, period: "yearly" },
  ],
};

interface PricingCardProps {
  plan: PricingPlanInterface;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => (
  <div className="col-xl-4 col-lg-6 col-md-6">
    <div className={`pricing-single-item ${plan.isActive ? "active" : ""}`}>
      <h3 className="pricing-plan">
        <span>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            src="/images/demo-img/pricing-icon.png"
            alt="icon"
          />
        </span>
        {plan.name}
      </h3>
      <div className="pricing-money">
        <h3>
          <span className="dollar">$</span>
          {plan.price}
          <span className={plan.period === "Monthly" ? "monthly" : "yearly"}>
            /{plan.period}
          </span>
        </h3>
      </div>
      <div className="pricing-body">
        <div className="pricing-title">
          <h2>Features</h2>
        </div>
        <div className="pricing-feature">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <Image
                  width={22}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "22px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  src="/images/demo-img/check.png"
                  alt="check"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`pricing-btn ${plan.isActive ? "style_one" : ""}`}>
        <Link href="/pricing">
          Choose Plans
          <i className="fa-light fa-arrow-right" />
        </Link>
      </div>
    </div>
  </div>
);

const PriceTab = () => {
  return (
    <Tab.Container defaultActiveKey={"monthly"}>
      <div className="tab">
        <Nav as={"ul"} className="tabs">
          <Nav.Item as={"li"}>
            <Nav.Link as={"a"} eventKey={"monthly"}>
              Monthly
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as={"li"}>
            <Nav.Link as={"a"} eventKey={"yearly"}>
              Yearly
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="tab_content">
          <Tab.Content>
            <Tab.Pane eventKey={"monthly"}>
              <div className="tabs_item">
                <div className="row">
                  {pricingData.monthly.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                  ))}
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={"yearly"}>
              <div className="tabs_item">
                <div className="row">
                  {pricingData.yearly.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                  ))}
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
  );
};

export const Pricing1: React.FC = () => {
  return (
    <section className="pricing-plan-section-one">
      <div className="row">
        <div className="col-xl-12">
          <Marquee items={marqueeItems} />
        </div>
      </div>
      <div className="pricing-effient fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/pricing-top-effient.png"
          alt="top effient"
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <PriceTab />
          </div>
        </div>
      </div>
      <div className="pricing-circle-effient fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/pricing-circle-effient.png"
          alt="circle effient"
        />
      </div>
    </section>
  );
};

export const Pricing2: React.FC = () => {
  return (
    <section className="pricing-plan-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Pricing Plans</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">Choose Perfect Affordable</h1>
                <h1 className="title split-text">Chief Pricing Plans</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <PriceTab />
          </div>
        </div>
      </div>
      <div className="pricing-effient21 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/pricing-two-effient.png"
          alt="pricing effient"
        />
      </div>
    </section>
  );
};

export const Price3Content: React.FC = () => {
  return (
    <div className="row">
      {pricingData.monthly.map((plan, index) => (
        <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
          <div className="pricing-single-item">
            <h5 className="pricing-tag">
              <Link href="/pricing">POPULAR</Link>
            </h5>
            <h3 className="pricing-plan">
              <span>
                <Image
                  width={30}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "30px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  src="/images/demo-img/pricing-icon.png"
                  alt="icon"
                />
              </span>
              {plan.name}
            </h3>
            <div className="pricing-money">
              <h3>
                <span className="dollar">{plan.price}</span>USD
              </h3>
            </div>
            <div className="pricing-desc">
              <p>Billed Annually for 30% Off</p>
            </div>
            <div className="pricing-btn">
              <Link href="/pricing">
                Choose Plans
                <i className="fa-light fa-arrow-right" />
              </Link>
            </div>
            <div className="pricing-body">
              <div className="pricing-title">
                <h4>Key Features</h4>
              </div>
              <div className="pricing-feature">
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <span>
                        <Image
                          width={12}
                          height={9}
                          sizes="100vw"
                          style={{
                            width: "12px",
                            height: "9px",
                            objectFit: "cover",
                          }}
                          src="/images/demo-img/pricing-check.png"
                          alt="check"
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pricing-effient">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src="/images/demo-img/pricing-box3.png"
                alt="effient"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Pricing3: React.FC = () => {
  return (
    <section className="pricing-plan-section-three">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Pricing Plans</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Choose the Perfect Plan to Power
                </h1>
                <h1 className="title split-text">Your AI-Driven Success</h1>
              </div>
            </div>
          </div>
        </div>
        <Price3Content />
      </div>
      <div className="pricing-top-circle fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/pricing-top3.png"
          alt="pricing circle"
        />
      </div>
    </section>
  );
};
