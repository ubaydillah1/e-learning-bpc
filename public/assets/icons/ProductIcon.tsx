export default function ProductIcon({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.25 1.406 21 6.281V18.47l-9.75 4.863-9.75-4.863V6.28zm7.324 5.344L11.25 3.094 8.426 4.5l7.277 3.68zm-7.324 3.656 2.79-1.383-7.29-3.68L3.926 6.75zM3 7.97v9.562l7.5 3.75V11.72zm9 13.312 7.5-3.75V7.97l-7.5 3.75z"
      />
    </svg>
  );
}
