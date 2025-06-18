import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const AddressSvgIcon: React.FC<IconProps> = ({
  color = "#FFFFFF",
  size = 60,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36.5 34.5H46.5L54 52H4L11.5 34.5H21.5M31.5 17C31.5 17.663 31.2366 18.2989 30.7678 18.7678C30.2989 19.2366 29.663 19.5 29 19.5C28.337 19.5 27.7011 19.2366 27.2322 18.7678C26.7634 18.2989 26.5 17.663 26.5 17C26.5 16.337 26.7634 15.7011 27.2322 15.2322C27.7011 14.7634 28.337 14.5 29 14.5C29.663 14.5 30.2989 14.7634 30.7678 15.2322C31.2366 15.7011 31.5 16.337 31.5 17ZM14 17C14 29.5 29 42 29 42C29 42 44 29.5 44 17C44 8.4575 37.285 2 29 2C20.715 2 14 8.4575 14 17Z"
      stroke={color}
      strokeWidth="4"
    />
  </svg>
);
