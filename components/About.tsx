import Image from "next/image";
import Link from "next/link";

export const About1: React.FC = () => {
  return (
    <section className="about-section-one">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">Smarter Tasks</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">All in One Workspace For</h1>
                <h1 className="title split-text">Modern Technology and</h1>
                <h1 className="title split-text">Premium Tools</h1>
              </div>
              <div className="section-desc">
                <p className="text-anime-3">
                  Monotonectally whiteboard proactive value with leading
                  continually to niche markets rather than fully tested result
                  generate process-centric communities rather than systems
                  maintaince
                </p>
              </div>
            </div>
            <div className="about-wrapper-box">
              <div className="about-icon-box">
                <div className="about-icon-content">
                  <div className="about-icon">
                    <Image
                      width={46}
                      height={48}
                      sizes="100vw"
                      style={{
                        width: "46",
                        height: "48",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/about-icon1.png"
                      alt="icon"
                    />
                  </div>
                  <div className="about-content">
                    <h4>Web Application Development</h4>
                  </div>
                </div>
              </div>
              <div className="about-icon-box">
                <div className="about-icon-content">
                  <div className="about-icon">
                    <Image
                      width={42}
                      height={42}
                      sizes="100vw"
                      style={{
                        width: "42",
                        height: "42",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/about-icon2.png"
                      alt="icon"
                    />
                  </div>
                  <div className="about-content">
                    <h4>Mobile Apps Interface Development</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-btn">
              <Link href="/about">
                Try for Free
                <i className="fa-solid fa-arrow-down-to-line" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-thumb">
              <figure className="reveal">
                <Image
                  width={648}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "648",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  src="/images/demo-img/about-thumb.png"
                  alt="thumb"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About2: React.FC = () => {
  return (
    <section className="about-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-6">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">About Us</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">Empowering Business to </h1>
                <h1 className="title split-text">Success Innovation</h1>
              </div>
              <div className="section-desc">
                <p className="text-anime-3">
                  Monotonectally whiteboard proactive value with leading
                  continually niche markets rather than fully tested result
                  maximizing total linkage dramatically procrastinate
                </p>
              </div>
            </div>
            <div className="about-wrapper-box">
              <div className="about-icon-box">
                <div className="about-icon-content">
                  <div className="about-icon">
                    <Image
                      width={26}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "26px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/about-icon21.png"
                      alt="icon"
                    />
                  </div>
                  <div className="about-content">
                    <h4>Business Growth</h4>
                    <p>
                      Markets rather than fully
                      <br />
                      tested to maximizing
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-icon-box">
                <div className="about-icon-content">
                  <div className="about-icon">
                    <Image
                      width={26}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "26px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/about-icon22.png"
                      alt="icon"
                    />
                  </div>
                  <div className="about-content">
                    <h4>Market Solutions</h4>
                    <p>
                      Markets rather than fully <br />
                      tested to maximizing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-btn">
              <Link href="/about">
                Get Started
                <i className="fa-light fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-thumb-wrapper">
              <div className="about-thumb21">
                <figure className="reveal">
                  <Image
                    width={485}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/about-thumb21.png"
                    alt="thumb"
                  />
                </figure>
              </div>
              <div className="about-thumb22">
                <figure className="reveal">
                  <Image
                    width={276}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/about-thumb22.png"
                    alt="thumb"
                  />
                </figure>
              </div>
              <div className="about-thumb23">
                <figure className="reveal">
                  <Image
                    width={276}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/about-thumb23.png"
                    alt="thumb"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-effient21 fade-in">
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
    </section>
  );
};

export const About3: React.FC = () => {
  return (
    <section className="about-section-five">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="about-thumb-wrapper">
              <div className="about-thumb">
                <figure className="reveal">
                  <Image
                    width={480}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "480px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/about-thumb51.png"
                    alt="thumb"
                  />
                </figure>
              </div>
              <div className="circle-text">
                <svg viewBox="0 0 300 300">
                  {/* Circle path */}
                  <defs>
                    <path
                      id="circlePath"
                      d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                    />
                  </defs>
                  {/* Text along the circle */}
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      INNOVATIVE AI METAVERSE AI TECHNOLOGIAS AI
                    </textPath>
                  </text>
                </svg>
                {/* Center symbol */}
                <div className="circle-icon">
                  <Image
                    width={24}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "24px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/circle-icon.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="sec-title">
              <div className="section-sub-title">
                <h5 className="sub-title split_chars">About Us</h5>
              </div>
              <div className="section-title">
                <h1 className="title split-text">
                  We’re creative next gen AI agency
                </h1>
                <h1 className="title split-text">
                  Innovation technology business
                </h1>
                <h1 className="title split-text">solution for clients</h1>
              </div>
            </div>
            <div className="about-wrapper-box">
              <div className="about-icon-box">
                <div className="about-icon-content">
                  <div className="about-icon">
                    <Image
                      width={26}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "26px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/about-icon21.png"
                      alt="icon"
                    />
                  </div>
                  <div className="about-content">
                    <h4>Business Growth</h4>
                    <p>
                      Markets rather than fully
                      <br />
                      tested to maximizing
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-icon-box">
                <div className="about-icon-content">
                  <div className="about-icon">
                    <Image
                      width={30}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "30px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/about-icon22.png"
                      alt="icon"
                    />
                  </div>
                  <div className="about-content">
                    <h4>Market Solutions</h4>
                    <p>
                      Markets rather than fully <br />
                      tested to maximizing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-btn">
              <Link href="/about">
                Get Started
                <i className="fa-light fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-effient21 fade-in">
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
    </section>
  );
};
