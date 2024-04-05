import type { FC, SVGProps } from "react";

const Arrow: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.4389 0.548784C11.0068 0.540658 11.4614 0.995216 11.4533 1.56314L11.3492 8.83259C11.3411 9.40052 10.8734 9.86827 10.3054 9.8764C9.73751 9.88452 9.28295 9.42997 9.29108 8.86204L9.3619 4.07099L2.29259 11.1403C1.88475 11.5481 1.23504 11.5574 0.838704 11.1611C0.442365 10.7648 0.451661 10.115 0.859506 9.7072L7.92651 2.6402L3.14006 2.70641C2.57213 2.71454 2.11758 2.25998 2.1257 1.69205C2.13383 1.12413 2.60158 0.656374 3.16951 0.648249L10.439 0.54424L10.4389 0.548784Z" />
    </svg>
  );
};

export default Arrow;
