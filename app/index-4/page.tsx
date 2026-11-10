import { About3 } from "@/components/About";
import { Banner4 } from "@/components/Banner";
import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import { CallToAction2 } from "@/components/CallToAction";
import { Faq2 } from "@/components/Faq";
import { Integrations2 } from "@/components/Integrations";
import { Process2 } from "@/components/Process";
import { Project2 } from "@/components/Project";
import Services from "@/components/Services";
import { Testimonial3 } from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import IntellioLayout from "@/layout/IntellioLayout";

const HomePage4 = () => {
  return (
    <IntellioLayout>
      <Banner4 />
      <About3 />
      <Brand
        title={true}
        containerClass="auto-container brand-container overflow-hidden"
        wrapperClass="brand-area-one style-four"
      />
      <Process2 />
      <Services />
      <Integrations2 containerClass="integration-section-two four" />
      <WhyChooseUs />
      <Project2 />
      <Faq2 />
      <Testimonial3 />
      <CallToAction2 />
      <Blog />
    </IntellioLayout>
  );
};

export default HomePage4;
