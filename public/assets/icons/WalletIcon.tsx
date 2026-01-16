export default function WalletIcon({
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
        d="M6 20q-1.65 0-2.825-1.175T2 16V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v8q0 1.65-1.175 2.825T18 20zM6 8h12q.55 0 1.05.125t.95.4V8q0-.824-.587-1.412A1.93 1.93 0 0 0 18 6H6q-.824 0-1.412.588A1.93 1.93 0 0 0 4 8v.525q.45-.275.95-.4A4.3 4.3 0 0 1 6 8m-1.85 3.25 11.125 2.7q.225.05.45 0t.425-.2l3.475-2.9a2.2 2.2 0 0 0-.7-.612A1.9 1.9 0 0 0 18 10H6q-.65 0-1.137.338t-.713.912"
      />
    </svg>
  );
}
