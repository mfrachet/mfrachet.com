import type { ElementType } from "react";

export interface TitleProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
}

export const Title = ({ children, as: El = "span", className }: TitleProps) => {
  return (
    <El className={`text-white font-bold leading-normal ${className || ""}`}>
      {children}
    </El>
  );
};
