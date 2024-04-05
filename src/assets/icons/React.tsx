import type { FC, SVGProps } from "react";

const React: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 16 14" fill="none" {...props}>
    <path
      d="M13.0688 4.53687C12.9 4.48062 12.7312 4.4275 12.5625 4.3775C12.5906 4.26188 12.6156 4.14626 12.6406 4.03064C13.025 2.16824 12.7719 0.671448 11.9187 0.177725C11.0969 -0.294125 9.75625 0.196474 8.4 1.37766C8.26562 1.49328 8.13437 1.61515 8.00937 1.73702C7.925 1.65577 7.8375 1.57453 7.75 1.4964C6.32812 0.233972 4.90313 -0.29725 4.05 0.199599C3.23125 0.674573 2.9875 2.08387 3.33125 3.84628C3.36562 4.02127 3.40313 4.19314 3.44688 4.36813C3.24688 4.42437 3.05 4.48687 2.86562 4.55249C1.19687 5.13058 0 6.04304 0 6.98674C0 7.96168 1.275 8.93976 3.00938 9.53347C3.15 9.58035 3.29063 9.62722 3.43438 9.66784C3.3875 9.85533 3.34687 10.0397 3.30938 10.2303C2.98125 11.9646 3.2375 13.3395 4.05625 13.8114C4.9 14.2988 6.31875 13.7989 7.7 12.5896C7.80937 12.4927 7.91875 12.3927 8.02812 12.2865C8.16562 12.4208 8.30937 12.5489 8.45312 12.6739C9.79062 13.8239 11.1125 14.2895 11.9281 13.8176C12.7719 13.3301 13.0469 11.8521 12.6906 10.0522C12.6625 9.91471 12.6313 9.77409 12.5969 9.63035C12.6969 9.60222 12.7937 9.57097 12.8906 9.53972C14.6938 8.94288 16 7.97731 16 6.98674C16 6.03991 14.7688 5.12121 13.0688 4.53687ZM8.84062 1.88388C10.0031 0.871438 11.0875 0.474584 11.5813 0.758944C12.1094 1.06205 12.3125 2.28699 11.9812 3.89628C11.9594 4.00252 11.9375 4.10564 11.9094 4.20876C11.2156 4.05252 10.5125 3.94002 9.80625 3.87753C9.4 3.29631 8.95625 2.74009 8.475 2.21824C8.59688 2.10262 8.71562 1.99325 8.84062 1.88388ZM5.225 8.60852C5.38438 8.88038 5.54688 9.15224 5.71875 9.41786C5.23125 9.36473 4.74688 9.28661 4.26875 9.18349C4.40625 8.73352 4.57812 8.26792 4.77812 7.79294C4.92188 8.06793 5.06875 8.33979 5.225 8.60852ZM4.27812 4.84935C4.72812 4.74936 5.20625 4.66811 5.70312 4.60561C5.5375 4.86497 5.375 5.13059 5.22188 5.39932C5.06875 5.66493 4.91875 5.93679 4.77812 6.21178C4.58125 5.74618 4.41562 5.28995 4.27812 4.84935ZM5.13438 7.00236C5.34063 6.57113 5.56562 6.14928 5.80312 5.73368C6.04063 5.31808 6.29688 4.91497 6.56563 4.51812C7.03438 4.48374 7.5125 4.465 8 4.465C8.4875 4.465 8.96875 4.48374 9.43437 4.51812C9.7 4.91185 9.95312 5.31495 10.1938 5.72743C10.4344 6.13991 10.6594 6.56176 10.8719 6.98986C10.6625 7.42109 10.4375 7.84607 10.1969 8.26479C9.95937 8.6804 9.70625 9.0835 9.44063 9.48348C8.975 9.51785 8.49063 9.53347 8 9.53347C7.50938 9.53347 7.03437 9.51785 6.575 9.48973C6.30312 9.09287 6.04688 8.68665 5.80625 8.27104C5.56563 7.85544 5.34375 7.43359 5.13438 7.00236ZM10.7781 8.60227C10.9375 8.32729 11.0875 8.04918 11.2344 7.76794C11.4344 8.22105 11.6094 8.6804 11.7625 9.15224C11.2781 9.26161 10.7875 9.34598 10.2937 9.40223C10.4625 9.13975 10.6219 8.87101 10.7781 8.60227ZM11.2281 6.21178C11.0812 5.93679 10.9312 5.66181 10.775 5.39307C10.6219 5.12746 10.4625 4.86497 10.2969 4.60561C10.8 4.66811 11.2812 4.75248 11.7312 4.8556C11.5875 5.31807 11.4187 5.76805 11.2281 6.21178ZM8.00625 2.69634C8.33438 3.05257 8.64375 3.42755 8.93125 3.81503C8.3125 3.78691 7.69063 3.78691 7.07188 3.81503C7.37813 3.41193 7.69375 3.03695 8.00625 2.69634ZM4.38125 0.780818C4.90625 0.474584 6.07188 0.912061 7.3 1.9995C7.37813 2.06825 7.45625 2.14324 7.5375 2.21824C7.05312 2.74009 6.60625 3.29631 6.19688 3.87753C5.49062 3.94002 4.79063 4.04939 4.09688 4.20251C4.05625 4.04314 4.02187 3.88065 3.9875 3.71816C3.69375 2.20574 3.8875 1.06518 4.38125 0.780818ZM3.61562 9.01788C3.48438 8.98038 3.35625 8.93976 3.22813 8.89601C2.5625 8.68665 1.80625 8.35541 1.25937 7.92106C0.94375 7.70232 0.73125 7.36484 0.671875 6.98674C0.671875 6.41489 1.65937 5.68368 3.08437 5.18683C3.2625 5.12434 3.44375 5.06809 3.625 5.01497C3.8375 5.69306 4.09375 6.35864 4.39062 7.00236C4.09062 7.65545 3.83125 8.33041 3.61562 9.01788ZM7.25938 12.0802C6.74375 12.5521 6.14687 12.927 5.49687 13.1833C5.15 13.3489 4.75 13.3645 4.39375 13.2239C3.89688 12.9364 3.69062 11.8334 3.97187 10.3491C4.00625 10.1741 4.04375 9.99907 4.0875 9.82721C4.7875 9.9772 5.49375 10.0803 6.20937 10.1334C6.62187 10.7178 7.075 11.2771 7.55937 11.8021C7.45937 11.899 7.35938 11.9927 7.25938 12.0802ZM8.025 11.3209C7.70625 10.9771 7.3875 10.5959 7.07812 10.1866C7.37813 10.1991 7.6875 10.2053 8 10.2053C8.32187 10.2053 8.6375 10.1991 8.95 10.1834C8.6625 10.5803 8.35312 10.9584 8.025 11.3209ZM12.1094 12.2583C12.0813 12.6396 11.8938 12.9958 11.5938 13.2364C11.0969 13.5239 10.0375 13.1489 8.89375 12.1677C8.7625 12.0552 8.63125 11.9333 8.49687 11.8084C8.975 11.2803 9.41563 10.7209 9.81563 10.1334C10.5312 10.0741 11.2437 9.9647 11.9469 9.80534C11.9781 9.93345 12.0063 10.0616 12.0312 10.1866C12.1844 10.8615 12.2094 11.5646 12.1094 12.2583ZM12.6781 8.89913C12.5906 8.92726 12.5031 8.95538 12.4125 8.98038C12.1938 8.29917 11.925 7.63358 11.6156 6.98674C11.9156 6.34927 12.1688 5.69305 12.3813 5.02122C12.5438 5.06809 12.7 5.11809 12.85 5.16808C14.3063 5.66806 15.3281 6.41177 15.3281 6.98049C15.3281 7.59295 14.2375 8.38354 12.6781 8.89913ZM8 8.43041C8.79062 8.43041 9.43125 7.78982 9.43125 6.99924C9.43125 6.20865 8.79062 5.56806 8 5.56806C7.20937 5.56806 6.56875 6.20865 6.56875 6.99924C6.56875 7.78982 7.20937 8.43041 8 8.43041Z"
      fill="#61DAFB"
    />
  </svg>
);

export default React;