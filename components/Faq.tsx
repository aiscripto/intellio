"use client";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const leftFAQs: FAQItem[] = [
  {
    id: 1,
    question: "How can AI benefit my business?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
  {
    id: 2,
    question: "Do I need coding skills to use your AI platform?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
  {
    id: 3,
    question: "Can I use AI with my existing software?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
  {
    id: 4,
    question: "What kinds of tools do you have?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
];

const rightFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What industries can your AI solutions support?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
  {
    id: 2,
    question: "What’s the latest technology for AI?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
  {
    id: 3,
    question: "Do you support Payoneer/Paypal?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
  {
    id: 4,
    question: "Do you offer custom services?",
    answer:
      "Monotonectally whiteboard proactive value with leading niche markets rather than fully tested results",
  },
];
const renderAccordion = (items: FAQItem[], active?: true) => (
  <div className="tab_container">
    <div className="tab_content">
      <Accordion as={"ul"} defaultActiveKey={active ? `event-1` : null}>
        {items.map((faq) => (
          <Accordion.Item as={"li"} eventKey={`event-${faq.id}`} key={faq.id}>
            <Accordion.Header>
              <span /> {faq.question}
            </Accordion.Header>
            <Accordion.Body>
              <p>{faq.answer}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  </div>
);
export const FaqPageContent: React.FC = () => {
  return (
    <div className="row">
      <div className="col-xl-6 col-lg-6">{renderAccordion(leftFAQs)}</div>
      <div className="col-xl-6 col-lg-6">{renderAccordion(rightFAQs)}</div>
    </div>
  );
};
const Faq: React.FC = () => {
  return (
    <div className="accordion-section-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">FAQ’s</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Frequently Asked Questions to{" "}
                </h1>
                <h1 className="title split-text">Guide Your AI Journey</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">{renderAccordion(leftFAQs)}</div>
          <div className="col-xl-6 col-lg-6">{renderAccordion(rightFAQs)}</div>
        </div>
      </div>
      <div className="accordion-effient fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/accrodion-effient.png"
          alt="accordion effient"
        />
      </div>
      <div className="accordion-shape1 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/accrodion-shape1.png"
          alt="accordion shape"
        />
      </div>
      <div className="accordion-shape2 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/accrodion-shape2.png"
          alt="accordion shape"
        />
      </div>
    </div>
  );
};

export default Faq;

export const Faq2: React.FC = () => {
  return (
    <div className="accordion-section-one four">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="accordian-wrapper">
              <div className="sec-title">
                <div className="section-sub-title">
                  <h5 className="sub-title split_chars">FAQ’s</h5>
                </div>
                <div className="section-title">
                  <h1 className="title split-text">
                    Frequently Asked Questions
                  </h1>
                  <h1 className="title split-text">Guide Your AI Journey</h1>
                </div>
              </div>
              <div className="accordian-thumb-wrap">
                <div className="accordian-thumb">
                  <figure className="reveal">
                    <Image
                      width={388}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "388px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/accordian-thumb2.png"
                      alt="accordian-thumb"
                    />
                  </figure>
                </div>
                <div className="accordian-dot">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/accordian-thumb-dot.png"
                    alt="accordian dot"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            {/* Start Accordion */}
            <div className="tab_container">
              <div className="tab_content">
                {renderAccordion(leftFAQs, true)}
              </div>
            </div>
            {/* End Accordion */}
          </div>
        </div>
      </div>
      <div className="accordion-effient fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/accrodion-effient.png"
          alt="accordion effient"
        />
      </div>
      <div className="accordion-shape1 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/accrodion-shape1.png"
          alt="accordion shape"
        />
      </div>
      <div className="accordion-shape2 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/accrodion-shape2.png"
          alt="accordion shape"
        />
      </div>
    </div>
  );
};
