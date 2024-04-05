import type { FC, SVGProps } from "react";

const Tailwind: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 16 10" fill="none" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.99965 3.33309C4.5326 1.11103 5.86676 0 8 0C11.1999 0 11.6001 2.5 13.2004 2.91691C14.267 3.19412 15.2002 2.77794 16 1.66691C15.467 3.88897 14.1336 5 12.0004 5C8.79979 5 8.40025 2.5 6.79996 2.08309C5.73335 1.80515 4.80014 2.22206 3.99965 3.33309ZM0 8.33309C0.532957 6.11103 1.8657 5 3.99965 5C7.20021 5 7.59975 7.5 9.20004 7.91691C10.2659 8.19412 11.1999 7.77721 12.0004 6.66691C11.466 8.88897 10.1332 10 8 10C4.80014 10 4.39989 7.5 2.79961 7.08309C1.73299 6.80515 0.799788 7.22206 0 8.33309Z"
      fill="url(#paint0_linear_296_38)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_296_38"
        x1="4.95737e-07"
        y1="-8.88897"
        x2="16.9781"
        y2="18.2777"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2383AE" />
        <stop offset="1" stop-color="#6DD7B9" />
      </linearGradient>
    </defs>
  </svg>
);

export default Tailwind;
