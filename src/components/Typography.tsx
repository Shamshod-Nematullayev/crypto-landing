import React from "react";

function Typography({
  className,
  variant,
  children,
}: {
  className?: string;
  variant?: "h1" | "h2" | "body1" | "body2";
  children?: React.ReactNode;
}) {
  let classVariant = "";
  switch (variant) {
    case "h1":
      classVariant = "text-[36px] font-semibold";
      break;
    case "h2":
      classVariant = "text-[32px] font-semibold";
      break;
    case "body1":
      classVariant = "text-[24px] font-normal";
      break;
    case "body2":
      classVariant = "text-[20px] font-normal";
      break;
  }
  return <span className={`${classVariant} ${className}`}>{children}</span>;
}

export default Typography;
