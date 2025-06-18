import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const QuestionsSvgIcon: React.FC<IconProps> = ({
  color = "#2B2B2B",
  size = 60,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 81 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M54.5625 26.4375L66.2813 14.7188M54.5625 54.5625L66.2813 66.2813M26.4375 54.5625L14.7188 66.2813M26.4375 26.4375L14.7188 14.7188M78 40.5C78 61.2107 61.2107 78 40.5 78C19.7893 78 3 61.2107 3 40.5C3 19.7893 19.7893 3 40.5 3C61.2107 3 78 19.7893 78 40.5ZM59.25 40.5C59.25 50.8553 50.8553 59.25 40.5 59.25C30.1447 59.25 21.75 50.8553 21.75 40.5C21.75 30.1447 30.1447 21.75 40.5 21.75C50.8553 21.75 59.25 30.1447 59.25 40.5Z"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
