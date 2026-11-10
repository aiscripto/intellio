import { MarqueeInterface } from "@/utility/objectInterface";
import Image from "next/image";
import React from "react";

interface MarqueeProps {
  items: MarqueeInterface[];
}
const Marquee: React.FC<MarqueeProps> = ({ items }) => (
  <div className="marquee">
    {[1, 2].map((blockNum) => (
      <div key={blockNum} className="marquee-block">
        {items.map((item, index) => (
          <h3 key={index}>
            {item.icon && (
              <Image width={38} height={38} src={item.icon} alt="icon" />
            )}
            {item.highlight ? <span>{item.text}</span> : item.text}
          </h3>
        ))}
      </div>
    ))}
  </div>
);

export default Marquee;

export const Marquee2: React.FC = () => {
  const marqueeItems: MarqueeInterface[] = [
    {
      text: "MULTI-LANGUAGE READY",
      icon: "/images/inner-img/marquee-icon.png",
    },
    {
      text: "VOICE AND TEXT ENABLED",
      icon: "/images/inner-img/marquee-icon.png",
    },
    { text: "CRM INTEGRATIONS", icon: "/images/inner-img/marquee-icon.png" },
    {
      text: "SCALABLE ANY BUSINESS",
      icon: "/images/inner-img/marquee-icon.png",
    },
  ];
  return (
    <section className="marquee-inner-section">
      <div className="inner-container">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
};
