import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ footer }: { footer?: number }) => {
  const footers: Record<number, () => React.ReactElement | null> = {
    1: Footer1,
    2: Footer2,
  };

  const FooterComponent = footers[footer ?? 1] ?? Footer2;
  return <FooterComponent />;
};

export default Footer;

const Footer1 = () => {
  return (
    <footer
      className="main-footer-one"
      style={{ backgroundImage: "url(images/demo-img/footer-bg.png)" }}
    >
      <div className="auto-container">
        <div className="row">
          {/*Footer Column*/}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget-content social">
              <div className="logo">
                <Logo />
              </div>
              <div className="footer-desc">
                Stay Update with our
                <br /> Latest Offerings
              </div>
              <div className="footer-btn">
                <Link href="/">
                  Request Demo <i className="fa-light fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/*Footer Column*/}
          <div className="col-xl-2 col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <h3 className="footer-title">Products</h3>
              <ul className="footer-menu">
                <li>
                  <Link href="feature">Features</Link>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="blog">Newsletter</Link>
                </li>
                <li>
                  <Link href="faq">Faq’s</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Footer Column*/}
          <div className="col-xl-2 col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <h3 className="footer-title">Utility</h3>
              <ul className="footer-menu">
                <li>
                  <a href="#">Passwords</a>
                </li>
                <li>
                  <a href="#">Licensing</a>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="team">Instructions</Link>
                </li>
                <li>
                  <a href="#">Error - 404</a>
                </li>
              </ul>
            </div>
          </div>
          {/*Footer Column*/}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget-content contact">
              <h3 className="footer-title">Newsletter</h3>
              <div className="footer-content">
                <div className="newsletter">
                  Sign Up our newsletter get
                  <br />
                  Latest Updates
                </div>
                <form action="https://formspree.io/f/myyleorq" method="POST">
                  <div className="subscribe-box">
                    <input
                      type="text"
                      name="Email"
                      placeholder="Email"
                      required={true}
                    />
                    <button type="submit">
                      <span>
                        <i className="fa-solid fa-location-arrow" />
                      </span>
                    </button>
                  </div>
                </form>
                <div className="footer-line1">
                  <Image
                    width={70}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "70px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/footer-line1.png"
                    alt="line"
                  />
                </div>
                <div className="footer-line2">
                  <Image
                    width={70}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "70px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/footer-line2.png"
                    alt="line"
                  />
                </div>
                <div className="footer-line3">
                  <Image
                    width={70}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "70px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/footer-line3.png"
                    alt="line"
                  />
                </div>
                <div className="footer-line4">
                  <Image
                    width={70}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "70px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src="/images/demo-img/footer-line4.png"
                    alt="line"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row">
              <div className="copyright-text">
                © Copyright Reserved by&nbsp;Dream IT Solution
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="js-particles-footer" />
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer
      className="main-footer-two"
      style={{ backgroundImage: "url(images/demo-img/footer-bg2.png)" }}
    >
      <div className="auto-container">
        <div className="row">
          {/*Footer Column*/}
          <div className="col-xl-12">
            <div className="footer-content">
              <div className="footer-logo">
                <div className="logo">
                  <Link href="/">
                    <Image
                      width={142}
                      height={43}
                      src="/images/footer-logo2.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="feature">Features</Link>
                  </li>
                  <li>
                    <a href="#">Integrations</a>
                  </li>
                  <li>
                    <a href="#">Licensing</a>
                  </li>
                  <li>
                    <Link href="faq">Faq</Link>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-social-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-automation-title">
                <div className="typing" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Bottom*/}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row">
            <div className="copyright-text">
              © Copyright All Rights Reserved by&nbsp;Dream IT Solution
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
