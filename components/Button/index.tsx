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
          "bg-tea-green  text-gunmetal": variant === "is-primary" && !disabled,
          "border-tea-green border text-tea-green":
            variant === "is-secondary" && !disabled,
          "bg-rose text-tea-green cursor-not-allowed": disabled,
          "bg-rose text-gray-600 cursor-not-allowed": !isValid || isFetching,
        },
        "rounded-full px-6 py-2 text-lg"
      )}
    >
      {label}
    </button>
  );
};
