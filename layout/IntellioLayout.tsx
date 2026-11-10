"use client";
import {
  useFadeInAnimation,
  useRevealAnimation,
  useTextAnimation,
} from "@/utility";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
const IntellioLayout = ({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer?: number;
}) => {
  const pathname = usePathname();
  useRevealAnimation();
  useTextAnimation();
  useFadeInAnimation();
  return (
    <div className="page-wrapper" key={pathname}>
      <Header />
      <main>{children}</main>
      <Footer footer={footer} />
      <ScrollToTop />
    </div>
  );
};

export default IntellioLayout;
