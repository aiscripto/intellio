import Image from "next/image";
import Link from "next/link";

export const ServicesItem: React.FC = () => {
  const services: {
    id: number;
    title: string;
    desc: string;
    icon: string;
    active?: boolean;
    link: string;
  }[] = [
    {
      id: 1,
      title: "Custom AI Solution",
      desc: "Conveniently predominate holistic expertise technology before leveraged quality vectors negotiate high function standards transform solutions",
      icon: "/images/demo-img/service-icon1.png",
      link: "service-details",
    },
    {
      id: 2,
      title: "AI Model Training",
      desc: "Conveniently predominate holistic expertise technology before leveraged quality vectors negotiate high function standards transform solutions",
      icon: "/images/demo-img/service-icon2.png",
      active: true,
      link: "service-details",
    },
    {
      id: 3,
      title: "Predictive Solutions",
      desc: "Conveniently predominate holistic expertise technology before leveraged quality vectors negotiate high function standards transform solutions",
      icon: "/images/demo-img/service-icon3.png",
      link: "service-details",
    },
    {
      id: 4,
      title: "AI Model Training",
      desc: "Conveniently predominate holistic expertise technology before leveraged quality vectors negotiate high function standards transform solutions",
      icon: "/images/demo-img/service-icon2.png",
      active: true,
      link: "service-details",
    },
    {
      id: 5,
      title: "AI Model Training",
      desc: "Conveniently predominate holistic expertise technology before leveraged quality vectors negotiate high function standards transform solutions",
      icon: "/images/demo-img/service-icon2.png",
      active: true,
      link: "service-details",
    },
  ];
  return (
    <div className="row">
      <div className="col-xl-6 col-lg-6">
        <div className="service-wrapper" id="sticky-box">
          <div className="sec-title">
            <div className="section-sub-title">
              <h5 className="sub-title split_chars">Services</h5>
            </div>
            <div className="section-title">
              <h1 className="title split-text">Regular Software Updates of</h1>
              <h1 className="title split-text">Continue Improvement detail</h1>
              <h1 className="title split-text">Trending Technology</h1>
            </div>
          </div>
          <div className="service-btn">
            <Link href="/service-details">
              Explore More
              <i className="fa-light fa-arrow-right" />
            </Link>
          </div>
          <div className="service-thumb">
            <figure className="reveal">
              <Image
                width={450}
                height={0}
                sizes="100vw"
                style={{
                  width: "450px",
                  height: "auto",
                  objectFit: "cover",
                }}
                src="/images/demo-img/service-thumb1.png"
                alt="thumb"
              />
            </figure>
            <div className="service-thumb-shape">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src="/images/demo-img/service-thumb-effent.png"
                alt="thumb-effient"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="row" id="scroll-container">
          <div className="col-xl-12">
            {services.map((service) => (
              <div className="single-service-box" key={service.id}>
                <div className="service-inner">
                  <div
                    className={
                      service.active ? "service-icon-active" : "service-icon"
                    }
                  >
                    <Image
                      width={35}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "35px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src={service.icon}
                      alt="icon"
                    />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link href={service.link}>
                      LEARN MORE
                      <i className="fa-light fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="service-section-one">
      <div className="auto-container">
        <ServicesItem />
      </div>
      <div className="service-effient">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src="/images/demo-img/about-effient21.png"
          alt="service effient"
        />
      </div>
    </section>
  );
};

export default Services;
