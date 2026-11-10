import { About1 } from "@/components/About";
import { Banner1 } from "@/components/Banner";
import { Binifits1 } from "@/components/Binifits";
import Brand from "@/components/Brand";
import { Feature1 } from "@/components/Feature";
import { Integrations1 } from "@/components/Integrations";
import { Pricing1 } from "@/components/Pricing";
import { Testimonial1 } from "@/components/Testimonial";
import { Workflow1 } from "@/components/Workflow";
import IntellioLayout from "@/layout/IntellioLayout";

const HomePage = () => {
  return (
    <IntellioLayout>
      <Banner1 />
      <Brand wrapperClass="brand-area-one" />
      <Workflow1 />
      <Binifits1 />
      <Feature1 />
      <Integrations1 />
      <About1 />
      <Pricing1 />
      <Testimonial1 />
    </IntellioLayout>
  );
};

export default HomePage;
