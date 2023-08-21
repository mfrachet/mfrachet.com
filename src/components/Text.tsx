import type { ElementType } from "react";

export interface TextProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
}

export const Text = ({ children, as: El = "span", className }: TextProps) => {
  return (
    <El className={`text-white leading-normal ${className || ""}`}>
      {children}
    </El>
  );
};
