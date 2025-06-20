export const Facebook = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.896 0H1.104C0.494 0 0 0.494 0 1.104V18.896C0 19.506 0.494 20 1.104 20H10.682V12.255H8.076V9.237H10.682V7.01C10.682 4.426 12.26 3.02 14.565 3.02C15.669 3.02 16.617 3.102 16.894 3.139V5.839H15.296C14.042 5.839 13.8 6.435 13.8 7.309V9.236H16.789L16.399 12.254H13.799V20H18.896C19.506 20 20 19.506 20 18.896V1.104C20 0.494 19.506 0 18.896 0Z"
        fill="#2B2B2B"
      />
    </svg>
  );
};
