"use client";
import { TestimonialInterface } from "@/utility/objectInterface";
import { sliderProps } from "@/utility/sliderProps";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Testimonial1: React.FC = () => {
  return (
    <section className="testimonia-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="sec-title text-center">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Testimonials</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Real Story from active Users
                </h1>
                <h1 className="title split-text">About Tracking Apps</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <TestimonialCard props={sliderProps.testimonial} />
        </div>
      </div>
      <div id="js-particles-testimonial" />
      <div className="testimonial-circle-shape fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/testimonial-shape.png"
          alt="circle shape"
        />
      </div>
    </section>
  );
};

export const Testimonial2: React.FC = () => {
  return (
    <section className="testimonia-section-two">
      <div className="auto-container">
        <div className="row testi-arrow-box">
          <div className="col-xl-4">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Testimonials</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">Real Story from Our</h1>
                <h1 className="title split-text">Dedicated Clients</h1>
                <h1 className="title split-text">About Service</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row">
              <TestimonialCard
                props={sliderProps.testimonial2}
                swiperClass="testi-active"
              />
            </div>
          </div>
          <div className="ai-testi-arrow-box">
            <button
              className="slider-prev"
              tabIndex={0}
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button
              className="slider-next"
              tabIndex={0}
              aria-label="Next slide"
            >
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
      <div className="testi-effient21 fade-in">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/testi-two-effient.png"
          alt="effient"
        />
      </div>
    </section>
  );
};

export const Testimonial3: React.FC = () => {
  return (
    <section className="testimonia-section-three">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="testi-thumb-wrapper">
              <div className="testi-thumb">
                <figure>
                  <Image
                    width={308}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "308px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/testi-thumb41.png"
                    alt="thumb41"
                  />
                </figure>
              </div>
              <div className="testi-thumb-circle">
                <Image
                  width={552}
                  height={0}
                  sizes="100vw"
                  style={{ width: "552px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/testi-thumb-circle.png"
                  alt="circle"
                />
              </div>
              <div className="testi-avatars-img">
                <div className="testimonial-autor1">
                  <Image
                    width={77}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "77px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/testi-autor41.png"
                    alt="autor41"
                  />
                </div>
                <div className="testimonial-autor2">
                  <Image
                    width={77}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "77px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/testi-autor42.png"
                    alt="autor42"
                  />
                </div>
                <div className="testimonial-autor3">
                  <Image
                    width={77}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "77px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/testi-autor43.png"
                    alt="autor43"
                  />
                </div>
                <div className="testimonial-autor4">
                  <Image
                    width={77}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "77px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/testi-autor44.png"
                    alt="autor44"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Tetimonials</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  Real Story from Our Organic
                </h1>
                <h1 className="title split-text">Active Customers</h1>
              </div>
            </div>
            <div className="row">
              <TestimonialCard
                props={sliderProps.testimonial3}
                swiperClass="testi-active2"
                layout={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials: TestimonialInterface[] = [
  {
    quote:
      "Continually create ubiquitous leadership magnetic ideas next-generation interface competencies corporate next-generation scenarios whereas",
    rating: 5,
    author: "Jakulin Farnandez",
    role: "UI/UX Designer",
    image: "/images/demo-img/testi-autor1.png",
  },
  {
    quote:
      "Continually create ubiquitous leadership magnetic ideas next-generation interface competencies corporate next-generation scenarios whereas",
    rating: 5,
    author: "Anjelina Shelly",
    role: "UI/UX Designer",
    image: "/images/demo-img/testi-autor2.png",
  },
  {
    quote:
      "Continually create ubiquitous leadership magnetic ideas next-generation interface competencies corporate next-generation scenarios whereas",
    rating: 5,
    author: "Sonia Sarlins",
    role: "UI/UX Designer",
    image: "/images/demo-img/testi-autor3.png",
  },
];

const TestimonialCard: React.FC<{
  swiperClass?: string;
  props?: object;
  layout?: number;
}> = ({
  swiperClass = "testimonial-active",
  props = sliderProps.testimonial,
  layout = 1,
}) => {
  const allTestimonials = [...testimonials, ...testimonials];
  return (
    <Swiper className={`swiper ${swiperClass}`} {...props}>
      <div className="swiper-wrapper">
        {allTestimonials.map((testimonial, index) => {
          const stars = Array.from({ length: testimonial.rating }).map(
            (_, i) => (
              <li key={i}>
                <i className="fa-solid fa-star" />
              </li>
            )
          );
          return (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="col-lg-12">
                <div className="testi-box">
                  <div className="single-testi-box">
                    {layout === 1 ? (
                      <>
                        <div className="testi-quote">
                          <Image
                            width={40}
                            height={0}
                            sizes="100vw"
                            style={{
                              width: "40px",
                              height: "auto",
                              objectFit: "cover",
                            }}
                            src="/images/demo-img/testi-quote.png"
                            alt="quote"
                          />
                        </div>
                        <div className="testi-desc">
                          <p>"{testimonial.quote}"</p>
                        </div>
                        <div className="testi-ratting">
                          <ul>{stars}</ul>
                        </div>
                        <div className="testi-autor-box">
                          <div className="testi-autor">
                            <Image
                              width={66}
                              height={0}
                              sizes="100vw"
                              style={{
                                width: "66px",
                                height: "auto",
                                objectFit: "cover",
                              }}
                              src={testimonial.image}
                              alt="autor"
                            />
                          </div>
                          <div className="testi-autor-content">
                            <h5 className="autor-title">
                              {testimonial.author}
                            </h5>
                            <p className="autor-desi">{testimonial.role}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="testi-autor-box">
                          <div className="testi-autor-content">
                            <h5 className="autor-title">
                              {testimonial.author}
                            </h5>
                            <p className="autor-desi">{testimonial.role}</p>
                            <ul className="testi-ratting">{stars}</ul>
                          </div>
                          <div className="testi-autor">
                            <Image
                              width={90}
                              height={0}
                              sizes="100vw"
                              style={{
                                width: "90px",
                                height: "auto",
                                objectFit: "cover",
                              }}
                              src={testimonial.image}
                              alt="autor"
                            />
                          </div>
                        </div>
                        <div className="testi-desc">
                          <p>
                            <Image
                              width={40}
                              height={0}
                              sizes="100vw"
                              style={{
                                width: "40px",
                                height: "auto",
                                objectFit: "cover",
                              }}
                              src="/images/demo-img/testi-quote.png"
                              alt="quote"
                            />
                            {testimonial.quote}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </div>
      <div className="swiper-pagination" />
    </Swiper>
  );
};
