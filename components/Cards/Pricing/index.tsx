import { Button } from "@/components";
import classNames from "classnames";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
export const PricingCard = ({
  color,
  forWho,
  price,
  subheading,
  features,
}: any) => {
  return (
    <div
      className={classNames(
        {
          "border-purple-600": color === "purple",
          "border-[#53E6CC]": color === "green",
        },
        `border-2 rounded-tl-3xl rounded-br-3xl flex flex-col justify-between items-center flex-1 p-8`
      )}
    >
      <p
        className={classNames(
          {
            "text-purple-600": color === "purple",
            "text-[#53E6CC]": color === "green",
          },
          ` font-bold mb-8`
        )}
      >
        {forWho}
      </p>
      <div className="text-center">
        <p className="text-4xl font-bold mb-4">{price}</p>
        <p className="text-xl mb-4">{subheading}</p>
      </div>
      <div className="text-center mt-12 h-full flex flex-col justify-between">
        <ul className="text-left">
          {features.map((feature: string, index: number) => (
            <li key={index}>
              <BiBadgeCheck
                className={classNames(
                  {
                    "text-purple-600": color === "purple",
                    "text-[#53E6CC]": color === "green",
                  },
                  "w-8 h-8 inline mr-2"
                )}
              />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant={color === "purple" ? "is-primary" : "is-secondary"}
          is-primary
          label="Signup"
          className="mt-12"
        />
      </div>
    </div>
  );
};
