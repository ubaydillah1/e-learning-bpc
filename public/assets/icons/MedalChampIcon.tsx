export default function MedalChampIcon({
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
        d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-.965 12.903 7 7 0 0 0 5.345.397 7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78 9.06 19.5l.78-3.33-2.59-2.24 3.41-.29L12 10.5l1.34 3.14 3.41.29-2.59 2.24z"
      />
    </svg>
  );
}
