import classNames from "classnames";
import React from "react";
interface ButtonProps {
  label: string;
  variant: "is-primary" | "is-secondary";
  disabled?: boolean;
  isValid?: boolean;
  isFetching?: boolean;
  className?: string;
}
export const Button = ({
  label,
  variant,
  disabled = false,
  isValid = true,
  isFetching = false,
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        {
          "bg-purple-600  text-white": variant === "is-primary" && !disabled,
          "border-purple-600 border text-purple-600":
            variant === "is-secondary" && !disabled,
          "bg-purple-100 text-purple-600 cursor-not-allowed": disabled,
          "bg-purple-100 text-gray-600 cursor-not-allowed":
            !isValid || isFetching,
        },
        "rounded-full px-6 py-2 text-lg"
      )}
    >
      {label}
    </button>
  );
};
