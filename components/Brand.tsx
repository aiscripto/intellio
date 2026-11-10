"use client";
import { BrandInterface } from "@/utility/objectInterface";
import { sliderProps } from "@/utility/sliderProps";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Brand: React.FC<{
  containerClass?: string;
  wrapperClass?: string;
  title?: boolean;
}> = ({
  containerClass = "auto-container",
  wrapperClass = "brand-area-one style-two",
  title = false,
}) => {
  const brandImages: BrandInterface[] = [
    { src: "band-img.png", alt: "brand img", width: 115 },
    { src: "band-img2.png", alt: "brand img", width: 115 },
    { src: "band-img3.png", alt: "brand img", width: 115 },
    { src: "band-img4.png", alt: "brand img", width: 106 },
    { src: "band-img5.png", alt: "brand img", width: 115 },
    { src: "band-img6.png", alt: "brand img", width: 115 },
    { src: "band-img2.png", alt: "brand img", width: 115 },
    { src: "band-img.png", alt: "brand img", width: 115 },
    { src: "band-img3.png", alt: "brand img", width: 115 },
    { src: "band-img4.png", alt: "brand img", width: 106 },
  ];
  return (
    <div className={wrapperClass}>
      <div className={containerClass}>
        {title && (
          <div className="row">
            <div className="col-xl-12">
              <div className="brand-desc">
                <p>
                  <span>160+ </span>Trusted companies in the world
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <Swiper {...sliderProps.brandSlider} className="swiper band-active">
            <div className="swiper-wrapper">
              {brandImages.map((brand, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="col-lg-12">
                    <div className="brand-box">
                      <div className="brand-thumb">
                        <Image
                          width={brand.width}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: `${brand.width}px`,
                            height: "auto",
                            objectFit: "cover",
                          }}
                          src={`/images/demo-img/${brand.src}`}
                          alt={brand.alt}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;
