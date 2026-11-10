import { Banner3 } from "@/components/Banner";
import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import Dashbord from "@/components/Dashbord";
import Faq from "@/components/Faq";
import { Feature1 } from "@/components/Feature";
import { Integrations2 } from "@/components/Integrations";
import { Pricing3 } from "@/components/Pricing";
import Process from "@/components/Process";
import Project from "@/components/Project";
import { Testimonial2 } from "@/components/Testimonial";
import IntellioLayout from "@/layout/IntellioLayout";

const HomePage3 = () => {
  return (
    <IntellioLayout footer={2}>
      <Banner3 />
      <Brand title={true} />
      <Dashbord />
      <Feature1 containerClass="feature-section-three" item={2} />
      <Process />
      <Integrations2 />
      <Project />
      <Faq />
      <Testimonial2 />
      <Pricing3 />
      <Blog />
    </IntellioLayout>
  );
};

export default HomePage3;
