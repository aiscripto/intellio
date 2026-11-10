import IntellioLayout from "@/layout/IntellioLayout";
import Image from "next/image";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <IntellioLayout>
      <section
        className="contact-page-title"
        style={{ backgroundImage: "url(images/inner-img/blog-details.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="title-content">
              <h5 className="page-sub-title split_chars">Contact Us</h5>
              <h1 className="page-title split-text">Contact Us</h1>
              <p className="page-desc title-anim">
                Monotonectally whiteboard proactive with leading business to
                niche markets rather than tested
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="contact-thumb h-100">
                <figure className="reveal h-100">
                  <Image
                    width={520}
                    height={620}
                    src="/images/inner-img/contact-thumb.jpg"
                    alt="contact thumb"
                  />
                </figure>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact-form-area">
                <div className="sec-title">
                  <div className="section-sub-title">
                    <h5 className="sub-title split_chars">Contact</h5>
                  </div>
                  <div className="section-title">
                    <h1 className="title split-text">Leave A Reply</h1>
                  </div>
                </div>
                <form action="https://formspree.io/f/myyleorq" method="POST">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-input-box">
                        <input
                          type="text"
                          name="Your Name"
                          placeholder="Your Name"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-input-box">
                        <input
                          type="text"
                          name="Email"
                          placeholder="Your E-Mail"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-input-box">
                        <input
                          type="text"
                          name="Web Site"
                          placeholder="Enter Website"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-input-box">
                        <textarea
                          name="Message"
                          id="Meassage"
                          placeholder="Write a Comments..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="blog-details-submi-button">
                        <button type="submit">
                          Submit Now
                          <i className="fa-light fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IntellioLayout>
  );
};

export default ContactPage;
