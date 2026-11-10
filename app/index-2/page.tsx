import { About2 } from "@/components/About";
import { Analysis1 } from "@/components/Analysis";
import { Banner2 } from "@/components/Banner";
import { Benifits2 } from "@/components/Binifits";
import Brand from "@/components/Brand";
import { CallToAction1 } from "@/components/CallToAction";
import { Integrations2 } from "@/components/Integrations";
import { Pricing2 } from "@/components/Pricing";
import { Results1 } from "@/components/Results";
import { Testimonial2 } from "@/components/Testimonial";
import { Workflow2 } from "@/components/Workflow";
import IntellioLayout from "@/layout/IntellioLayout";

const HomePage2 = () => {
  return (
    <IntellioLayout>
      <Banner2 />
      <Brand title={true} />
      <About2 />
      <Workflow2 />
      <Analysis1 />
      <Results1 />
      <Integrations2 />
      <Testimonial2 />
      <Benifits2 />
      <Pricing2 />
      <CallToAction1 />
    </IntellioLayout>
  );
};

export default HomePage2;
