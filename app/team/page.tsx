import { CallToAction3 } from "@/components/CallToAction";
import { TeamFull } from "@/components/Team";
import IntellioLayout from "@/layout/IntellioLayout";
import React from "react";

const TeamPage: React.FC = () => {
  return (
    <IntellioLayout>
      <TeamFull />
      <CallToAction3 />
    </IntellioLayout>
  );
};

export default TeamPage;
