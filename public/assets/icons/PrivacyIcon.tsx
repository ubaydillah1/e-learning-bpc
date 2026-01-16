export default function PrivacyIcon({
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
        d="M11.313 18h2.374v-7.2h-2.374zM12.5 8.4q.505 0 .847-.346.342-.345.34-.854 0-.51-.341-.854A1.14 1.14 0 0 0 12.5 6a1.14 1.14 0 0 0-.845.346q-.342.345-.342.854-.001.509.341.856.344.346.846.344m0 15.6q-4.126-1.05-6.814-4.786T3 10.92V3.6L12.5 0 22 3.6v7.32q0 4.56-2.686 8.296T12.5 24m0-2.52q3.087-.99 5.106-3.96t2.019-6.6V5.25L12.5 2.55l-7.125 2.7v5.67q0 3.63 2.019 6.6t5.106 3.96"
      />
    </svg>
  );
}
