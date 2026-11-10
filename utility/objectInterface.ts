export interface MarqueeInterface {
  text: string;
  highlight?: boolean;
  icon?: string;
}
export interface BenefitInterface {
  icon: string;
  title: string;
  description: string;
  className: string;
}
export interface BrandInterface {
  src: string;
  alt: string;
  width: number;
}
export interface FeatureInterface {
  title: string;
  description: string;
  image: string;
  imageSize?: number;
  className: string;
  listItems?: string[];
  gridClass: string;
  diagram?: boolean;
}
export interface IntegrationInterface {
  subtitle: string;
  title: string[];
  description: string;
  listItems: string[];
  buttonText: string;
  buttonLink: string;
  image: string;
  shapeImage: string;
  effectImage: string;
}
export interface PricingPlanInterface {
  name: string;
  price: number;
  period: "Monthly" | "yearly";
  isActive?: boolean;
}
export interface TestimonialInterface {
  quote: string;
  rating: number;
  author: string;
  role: string;
  image: string;
}
export interface CounterInterface {
  count: string;
  suffix: string;
  description: string;
  icon: string;
}
export interface TeamInterface {
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    pinterest?: string;
  };
}
