export default function ShoppingCartFillIcon({
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
      <path fill="currentColor" d="M22.5 6.5h-16l2 9h12z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      />
    </svg>
  );
}
