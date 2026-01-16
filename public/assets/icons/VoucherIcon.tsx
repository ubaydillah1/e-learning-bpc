export default function VoucherIcon({
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.714}
        d="M8.606 9.954a1.68 1.68 0 1 0 0-3.358 1.68 1.68 0 0 0 0 3.358m6.857 6.893a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.714}
        d="M22.714 6.911v1.994a3.429 3.429 0 0 0 0 6.297v1.995c0 1.893-1.36 3.16-3.428 3.429-5.69.737-8.872.742-14.572 0-2.01-.263-3.428-1.536-3.428-3.429v-1.995a3.428 3.428 0 0 0 0-6.297V6.911c0-1.894 1.431-3.09 3.428-3.428 5.632-.957 8.858-.813 14.572 0 1.889.267 3.428 1.534 3.428 3.428"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.714}
        d="M8.068 15.635c3.471-2.856 5.206-4.572 7.865-7.864"
      />
    </svg>
  );
}
