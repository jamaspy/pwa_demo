import { PricingCard } from "@/components/Cards";
import { pricing } from "@/content/pricing";
import React from "react";

export const Pricing = () => {
  return (
    <div className="bg-[#FFF9F0] p-12">
      <div className="p-12 flex flex-col md:flex-row gap-8">
        {pricing.map((item, index: number) => (
          <PricingCard
            key={index}
            color={item.color}
            forWho={item.forWho}
            price={item.price}
            subheading={item.subheading}
            features={item.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
