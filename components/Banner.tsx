import Image from "next/image";
import Link from "next/link";

export const Banner1: React.FC = () => {
  return (
    <div
      className="banner-section-one"
      style={{ backgroundImage: "url(/images/demo-img/banner-bg-1.png)" }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content-wrap">
              <div className="banner-content">
                <h5 className="split_chars">Elevate Your Workflow</h5>
                <h2 className="split_chars">Unlock Growth Potential</h2>
                <h2 className="split_chars">
                  Innovative <span>SAAS</span>
                </h2>
                <p className="text-anime-3">
                  Monotonectally whiteboard proactive value with leading
                  continually to niche markets rather than fully tested result
                </p>
                <Link href="/">
                  Request a Demo <i className="fa-light fa-arrow-right" />
                </Link>
              </div>
              <div className="banner-saas-badge">
                <div className="saas-cusor">
                  <span>AI Saas Innovation</span>
                </div>
                <div className="modern-cusor">
                  <span>Modern Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fulid">
        <div className="row banner-container">
          <div className="col-lg-3">
            <div className="banner-thumb">
              <figure className="reveal">
                <Image
                  width={330}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-thumb1.png"
                  alt="banner thumb"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumb">
              <figure className="reveal">
                <Image
                  width={686}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-thumb2.png"
                  alt="banner thumb"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="banner-thumb">
              <figure className="reveal">
                <Image
                  width={330}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-thumb3.png"
                  alt="banner thumb"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div id="js-particles" />
    </div>
  );
};

export const Banner2: React.FC = () => {
  return (
    <div
      className="banner-section-two"
      style={{ backgroundImage: "url(images/demo-img/banner-bg2.png)" }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content-wrap">
              <div className="banner-content">
                <h5 className="split_chars">
                  <svg
                    width={14}
                    height={12}
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.38561 11.9999C6.34326 11.9999 6.30137 11.9913 6.26258 11.9748C6.22378 11.9583 6.18891 11.9342 6.16017 11.9039L0.0815684 5.5059C0.0410469 5.46325 0.0141836 5.41003 0.00426649 5.35275C-0.00565067 5.29547 0.00180835 5.23662 0.0257308 5.1834C0.0496532 5.13018 0.0890012 5.08491 0.138959 5.05311C0.188917 5.02131 0.247317 5.00438 0.307013 5.00438H3.23292C3.27685 5.00438 3.32026 5.01356 3.36024 5.03128C3.40022 5.049 3.43582 5.07486 3.46465 5.10712L5.49615 7.38125C5.7157 6.9246 6.1407 6.16424 6.88652 5.23772C7.98909 3.868 10.0399 1.85355 13.5487 0.0350571C13.6165 -8.32163e-05 13.6954 -0.00920352 13.7698 0.00949718C13.8442 0.0281979 13.9086 0.0733601 13.9505 0.136066C13.9923 0.198772 14.0085 0.274464 13.9958 0.348195C13.983 0.421926 13.9424 0.488336 13.8818 0.534313C13.8684 0.5445 12.5155 1.58113 10.9586 3.4799C9.52566 5.22724 7.62085 8.0844 6.68355 11.773C6.66708 11.8378 6.62879 11.8953 6.57477 11.9365C6.52075 11.9776 6.45413 12 6.38552 12L6.38561 11.9999Z"
                      fill="#6766FF"
                    />
                  </svg>
                  Elevate your Startup Business
                </h5>
                <h2 className="split_chars">Transforming Ideas</h2>
                <h2 className="split_chars">
                  Into{" "}
                  <span>
                    <Image
                      width={184}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "184px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/demo-img/banner-title-img.png"
                      alt="title img"
                    />
                  </span>{" "}
                  Realistic
                </h2>
                <h2 className="split_chars">Online Business</h2>
                <div className="banner-btn">
                  <Link href="/index">
                    Request a Demo <i className="fa-light fa-arrow-right" />
                  </Link>
                </div>
                <div className="banner-btn2">
                  <Link href="/about">
                    Learn More <i className="fa-light fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="banner-thumb">
              <figure className="reveal">
                <Image
                  width={1320}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "1320px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  src="/images/demo-img/banner-thumb21.png"
                  alt="banner-thumb21"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div id="js-particles" />
    </div>
  );
};

export const Banner3: React.FC = () => {
  return (
    <div
      className="banner-section-three"
      style={{ backgroundImage: "url(images/demo-img/banner-bg3.png)" }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="banner-content-wrap">
              <div className="banner-content">
                <h5 className="split_chars">
                  <svg
                    width={14}
                    height={13}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.29952 12.1663C6.25774 12.1663 6.21641 12.1576 6.17814 12.1409C6.13986 12.1241 6.10547 12.0996 6.07711 12.069L0.0804686 5.58232C0.0404934 5.53907 0.0139924 5.48511 0.00420897 5.42704C-0.00557448 5.36897 0.00178397 5.3093 0.0253838 5.25535C0.0489837 5.20139 0.0878012 5.15549 0.137086 5.12325C0.18637 5.09101 0.243983 5.07384 0.302874 5.07384H3.18933C3.23266 5.07385 3.2755 5.08315 3.31493 5.10112C3.35437 5.11909 3.3895 5.14531 3.41794 5.178L5.42204 7.48365C5.63863 7.02067 6.05791 6.24978 6.79367 5.31042C7.88137 3.92172 9.90455 1.87936 13.366 0.0356649C13.4329 3.7701e-05 13.5107 -0.00920898 13.5841 0.00975084C13.6575 0.0287107 13.7211 0.0744987 13.7624 0.138074C13.8037 0.201649 13.8196 0.278389 13.8071 0.353142C13.7945 0.427894 13.7544 0.495225 13.6946 0.541839C13.6814 0.552167 12.3468 1.60316 10.8108 3.52824C9.39723 5.29979 7.5181 8.19654 6.59343 11.9362C6.57719 12.0019 6.53941 12.0603 6.48612 12.102C6.43283 12.1437 6.36711 12.1664 6.29943 12.1664L6.29952 12.1663Z"
                      fill="#6766FF"
                    />
                  </svg>
                  Transform Business
                </h5>
                <h2 className="split_chars">Transform Business</h2>
                <h2 className="split_chars">With the Power of AI</h2>
                <h2 className="split_chars">Digital Growth</h2>
                <p className="text-anime-3">
                  Monotonectally whiteboard proactive with leading continually
                  niche markets rather than fully tested
                </p>
                <Link href="/about">
                  Get Started <i className="fa-light fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="banner-ai-diagram">
              <div className="diagram-ai">AI</div>
              <div className="diagram-item one">
                <span>Instant Insights</span>
              </div>
              <div className="diagram-item two">
                <span>Smart Visuals</span>
              </div>
              <div className="diagram-item three">
                <span>AI Automation</span>
              </div>
              <div className="diagram-item four">
                <span>Latest Tools</span>
              </div>
              <div className="diagram-item five">
                <span>Ask Anything</span>
              </div>
              <div className="diagram-item six">
                <span>Predictive Power</span>
              </div>
              <div className="diagram-shape">
                <Image
                  width={321}
                  height={0}
                  sizes="100vw"
                  style={{ width: "321px", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-diagram-img.png"
                  alt="diagram img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="js-particles" />
    </div>
  );
};

export const Banner4: React.FC = () => {
  return (
    <div
      className="banner-section-four"
      style={{ backgroundImage: "url(images/demo-img/banner-bg4.jpg)" }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content-wrap">
              <div className="banner-content">
                <h5 className="split_chars">
                  <svg
                    width={14}
                    height={12}
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.38561 11.9999C6.34326 11.9999 6.30137 11.9913 6.26258 11.9748C6.22378 11.9583 6.18891 11.9342 6.16017 11.9039L0.0815684 5.5059C0.0410469 5.46325 0.0141836 5.41003 0.00426649 5.35275C-0.00565067 5.29547 0.00180835 5.23662 0.0257308 5.1834C0.0496532 5.13018 0.0890012 5.08491 0.138959 5.05311C0.188917 5.02131 0.247317 5.00438 0.307013 5.00438H3.23292C3.27685 5.00438 3.32026 5.01356 3.36024 5.03128C3.40022 5.049 3.43582 5.07486 3.46465 5.10712L5.49615 7.38125C5.7157 6.9246 6.1407 6.16424 6.88652 5.23772C7.98909 3.868 10.0399 1.85355 13.5487 0.0350571C13.6165 -8.32163e-05 13.6954 -0.00920352 13.7698 0.00949718C13.8442 0.0281979 13.9086 0.0733601 13.9505 0.136066C13.9923 0.198772 14.0085 0.274464 13.9958 0.348195C13.983 0.421926 13.9424 0.488336 13.8818 0.534313C13.8684 0.5445 12.5155 1.58113 10.9586 3.4799C9.52566 5.22724 7.62085 8.0844 6.68355 11.773C6.66708 11.8378 6.62879 11.8953 6.57477 11.9365C6.52075 11.9776 6.45413 12 6.38552 12L6.38561 11.9999Z"
                      fill="#6766FF"
                    />
                  </svg>
                  AI Integrated Solutions
                </h5>
                <h2 className="split_chars">Innovative AI Chatbot Solutions</h2>
                <h2 className="split_chars">
                  For Smart <span>Technology</span>
                </h2>
                <p className="text-anime-3">
                  Monotonectally whiteboard proactive with leading continually
                  technological niche markets rather than fully tested markets
                </p>
                <div className="banner-btn">
                  <Link href="/about">
                    Get Started <i className="fa-light fa-arrow-right" />
                  </Link>
                </div>
                <div className="banner-btn2">
                  <Link href="/about">
                    Learn More <i className="fa-light fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="banner-review-box">
                <div className="reviews-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/google.png"
                    alt="google"
                  />
                </div>
                <div className="review-content">
                  <h4>Reviews (4.9)</h4>
                  <ul className="review-ratting">
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="banner-shape1">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-shape41.png"
                  alt="shape"
                />
              </div>
              <div className="banner-shape2">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-shape42.png"
                  alt="shape"
                />
              </div>
              <div className="banner-shape3">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-shape43.png"
                  alt="shape"
                />
              </div>
              <div className="banner-shape4">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src="/images/demo-img/banner-shape44.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
