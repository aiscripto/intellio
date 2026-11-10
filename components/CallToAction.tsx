import Image from "next/image";
import Link from "next/link";

export const CallToAction1: React.FC = () => {
  return (
    <section className="call-to-action-one">
      <div className="auto-container">
        <div className="call-container">
          <div
            className="row call-to-wrapper"
            style={{ backgroundImage: "url(images/demo-img/call-to-bg.png)" }}
          >
            <div className="col-xl-12">
              <div className="call-to-content">
                <div className="call-to-icon">
                  <Image
                    width={40}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "40px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/call-to-icon.png"
                    alt="icon"
                  />
                </div>
                <h2 className="call-title">Grow Your Startup within 14 Days</h2>
                <p className="call-disc">
                  Monotonectally whiteboard proactive value with leading
                  continually niche markets rather than fully tested results
                </p>
                <Link className="call-to-btn" href="contact">
                  14 Days Free Trail
                  <i className="fa-solid fa-arrow-down-to-line" />
                </Link>
              </div>
            </div>
          </div>
          <div id="cta-particles" />
        </div>
      </div>
      <div className="call-to-effient fade-in">
        <Image
          width={1520}
          height={0}
          sizes="100vw"
          style={{
            width: "1520px",
            height: "auto",
            objectFit: "cover",
          }}
          src="/images/demo-img/call-to-effient.png"
          alt=""
        />
      </div>
    </section>
  );
};

export const CallToAction2: React.FC = () => {
  return (
    <section className="call-to-action-two">
      <div className="call-container">
        <div className="row call-to-wrapper">
          <div className="col-xl-7">
            <div className="call-to-content">
              <div className="sec-title">
                <div className="section-sub-title">
                  <h5 className="sub-title split_chars">Join Us Now</h5>
                </div>
                <div className="section-title">
                  <h1 className="title split-text">
                    Impowering Your Business Grow
                  </h1>
                  <h1 className="title split-text">
                    Smart AI Solutions to Next level
                  </h1>
                  <h1 className="title split-text">Innovation Success</h1>
                </div>
              </div>
              <div className="call-to-btn">
                <Link href="contact">
                  Get Started <i className="fa-light fa-arrow-right" />
                </Link>
              </div>
              <div className="call-arrow">
                <Image
                  width={72}
                  height={0}
                  sizes="100vw"
                  style={{ width: "72px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/call-arrow.png"
                  alt="call arrow"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="call-thumb-wrapper">
              <div className="call-thumb">
                <figure className="reveal">
                  <Image
                    width={546}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "546px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/call-thumb42.png"
                    alt="call thumb"
                  />
                </figure>
              </div>
              <div className="call-shape1">
                <Image
                  width={32}
                  height={0}
                  sizes="100vw"
                  style={{ width: "32px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape1.png"
                  alt="shape1"
                />
              </div>
              <div className="call-shape2">
                <Image
                  width={30}
                  height={0}
                  sizes="100vw"
                  style={{ width: "30px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape2.png"
                  alt="shape1"
                />
              </div>
              <div className="call-shape3">
                <Image
                  width={28}
                  height={0}
                  sizes="100vw"
                  style={{ width: "28px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape3.png"
                  alt="shape1"
                />
              </div>
              <div className="call-shape4">
                <Image
                  width={24}
                  height={0}
                  sizes="100vw"
                  style={{ width: "24px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape4.png"
                  alt="shape1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-effient fade-in">
          <Image
            width={686}
            height={0}
            sizes="100vw"
            style={{ width: "686px", height: "auto", objectFit: "cover" }}
            src="/images/demo-img/call-top-effiect41.png"
            alt="top effiect"
          />
        </div>
      </div>
    </section>
  );
};

export const CallToAction3: React.FC = () => {
  return (
    <section className="call-to-action-inner">
      <div className="call-container">
        <div className="row call-to-wrapper">
          <div className="col-xl-7">
            <div className="call-to-content">
              <div className="sec-title">
                <div className="section-sub-title">
                  <h5 className="sub-title split_chars">Join Us Now</h5>
                </div>
                <div className="section-title">
                  <h1 className="title split-text">Join our Team for better</h1>
                  <h1 className="title split-text">Lead the worlds</h1>
                </div>
              </div>
              <div className="call-to-btn">
                <Link href="/contact">
                  Join Us Now <i className="fa-light fa-arrow-right" />
                </Link>
              </div>
              <div className="call-arrow">
                <Image
                  width={72}
                  height={0}
                  sizes="100vw"
                  style={{ width: "72px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/call-arrow.png"
                  alt="call arrow"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="call-thumb-wrapper">
              <div className="call-thumb">
                <figure className="reveal">
                  <Image
                    width={271}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "271px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/inner-img/call-thumb-in.png"
                    alt="call thumb"
                  />
                </figure>
              </div>
              <div className="call-shape1">
                <Image
                  width={32}
                  height={0}
                  sizes="100vw"
                  style={{ width: "32px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape1.png"
                  alt="shape1"
                />
              </div>
              <div className="call-shape2">
                <Image
                  width={30}
                  height={0}
                  sizes="100vw"
                  style={{ width: "30px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape2.png"
                  alt="shape1"
                />
              </div>
              <div className="call-shape3">
                <Image
                  width={28}
                  height={0}
                  sizes="100vw"
                  style={{ width: "28px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape3.png"
                  alt="shape1"
                />
              </div>
              <div className="call-shape4">
                <Image
                  width={24}
                  height={0}
                  sizes="100vw"
                  style={{ width: "24px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/choose-shape4.png"
                  alt="shape1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-effient fade-in">
          <Image
            width={686}
            height={0}
            sizes="100vw"
            style={{ width: "686px", height: "auto", objectFit: "cover" }}
            src="/images/demo-img/call-top-effiect41.png"
            alt="top effiect"
          />
        </div>
      </div>
    </section>
  );
};
