import type { IframeHTMLAttributes } from "react";

export const Iframe = (props: IframeHTMLAttributes<HTMLIFrameElement>) => {
  return (
    <iframe
      width="100%"
      className="w-full rounded-xl"
      height={600}
      {...props}
    />
  );
};
