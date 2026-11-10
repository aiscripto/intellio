"use client";
import Logo from "@/components/Logo";
import { useStickyHeader } from "@/utility";
import Link from "next/link";
import { Fragment, useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  useStickyHeader();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <Fragment>
      <div className="intellio-header-area" id="sticky-header">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="header-logo">
                <Logo linkClass="active_logo" />
                <Logo linkClass="logo_two" />
              </div>
            </div>
            <div className="col-lg-7">
              <Nav />
            </div>
            <div className="col-lg-3">
              <div className="header-right-wrapper">
                <div className="header-sidebar">
                  <div className="header-btn">
                    <Link href="/contact">
                      Free Trail
                      <i className="fa-solid fa-arrow-down-to-line" />
                    </Link>
                  </div>
                  <div className="header-sidbar-button">
                    <button
                      className="menubars"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#menubar"
                      onClick={() => setToggleSidebar(true)}
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
      <Sidebar open={toggleSidebar} close={() => setToggleSidebar(false)} />
    </Fragment>
  );
};
export default Header;
const Nav = () => {
  return (
    <div className="header-menu">
      <ul className="nav_scroll">
        <li>
          <a href="#">
            Home <i className="fa-light fa-angle-down" />
          </a>
          <ul className="sub_menu">
            <li>
              <Link href="/">Ai Saas</Link>
            </li>
            <li>
              <Link href="/index-2">Ai Startup</Link>
            </li>
            <li>
              <Link href="/index-3">Ai Agency</Link>
            </li>
            <li>
              <Link href="/index-4">Ai Chatbot</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="#">
            pages <i className="fa-light fa-angle-down" />
          </a>
          <ul className="sub_menu">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/feature">Feature</Link>
            </li>
            <li>
              <Link href="/integration">integration</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/service-details">Service Details</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team-details">Team Details</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/faq">Faq</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/service">Services</Link>
        </li>
        <li>
          <a href="#">
            Blog <i className="fa-light fa-angle-down" />
          </a>
          <ul className="sub_menu">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

/*
     * 1st level menu
      toggle("home", setActiveMenu, activeMenu)}
      style={show("home", activeMenu)}
     * 2nd level menu
      onClick={() => toggle("home", setMultiMenu, multiMenu)}
      style={show("home", multiMenu)}
*/
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [multiMenu, setMultiMenu] = useState<string>("");
  const toggle = (menu: string, setter: (v: string) => void, current: string) =>
    setter(current === menu ? "" : menu);
  const show = (menu: string, current: string) => ({
    display: current === menu ? "block" : "none",
  });
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className="meanmenu-reveal"
            onClick={(e) => {
              e.preventDefault();
              setToggleNav(!toggleNav);
            }}
          >
            <span /> <span /> <span />
          </a>
          <nav className="mean-nav">
            <div className="mobile-logo">
              <Logo linkClass="logo_img" />
            </div>
            <ul
              className="nav_scroll"
              style={{ display: toggleNav ? "block" : "none" }}
            >
              <li>
                <a href="#">
                  Home <i className="fa-light fa-angle-down" />
                </a>
                <ul className="sub_menu" style={show("home", activeMenu)}>
                  <li>
                    <Link href="/">Ai Saas</Link>
                  </li>
                  <li>
                    <Link href="index-2">Ai Startup</Link>
                  </li>
                  <li>
                    <Link href="index-3">Ai Agency</Link>
                  </li>
                  <li>
                    <Link href="index-4">Ai Chatbot</Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => toggle("home", setActiveMenu, activeMenu)}
                >
                  +
                </a>
              </li>
              <li>
                <Link href="about">About</Link>
              </li>
              <li>
                <a href="#">
                  pages <i className="fa-light fa-angle-down" />
                </a>
                <ul className="sub_menu" style={show("pages", activeMenu)}>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="feature">Feature</Link>
                  </li>
                  <li>
                    <Link href="integration">integration</Link>
                  </li>
                  <li>
                    <Link href="service">Service</Link>
                  </li>
                  <li>
                    <Link href="service-details">Service Details</Link>
                  </li>
                  <li>
                    <Link href="team">Team</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Details</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="faq">Faq</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => toggle("pages", setActiveMenu, activeMenu)}
                >
                  +
                </a>
              </li>
              <li>
                <Link href="service">Services</Link>
              </li>
              <li>
                <a href="#">
                  Blog <i className="fa-light fa-angle-down" />
                </a>
                <ul className="sub_menu" style={show("Blog", activeMenu)}>
                  <li>
                    <Link href="blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="blog-details">Blog Details</Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => toggle("Blog", setActiveMenu, activeMenu)}
                >
                  +
                </a>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};
