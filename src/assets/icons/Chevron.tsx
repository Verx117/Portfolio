import type { FC, SVGProps } from "react";

const Chevron: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 16 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0.669493 15.0884C-0.223164 14.2099 -0.223164 12.7831 0.669493 11.9045L12.0955 0.658924C12.9882 -0.219639 14.4379 -0.219639 15.3305 0.658924C16.2232 1.53749 16.2232 2.96428 15.3305 3.84284L5.51841 13.5L15.3234 23.1572C16.216 24.0357 16.216 25.4625 15.3234 26.3411C14.4307 27.2196 12.981 27.2196 12.0884 26.3411L0.662351 15.0955L0.669493 15.0884Z" />
    </svg>
  );
};

export default Chevron;