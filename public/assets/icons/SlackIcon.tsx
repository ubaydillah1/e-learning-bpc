export default function SlackIcon({
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
        strokeWidth={2}
        d="M13 8.5c0 .83.67 1.5 1.5 1.5S16 9.33 16 8.5v-5c0-.83-.67-1.5-1.5-1.5S13 2.67 13 3.5zM19 10h1.5c.83 0 1.5-.67 1.5-1.5S21.33 7 20.5 7 19 7.67 19 8.5zM11 15.5c0-.83-.67-1.5-1.5-1.5S8 14.67 8 15.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5zM5 14H3.5c-.83 0-1.5.67-1.5 1.5S2.67 17 3.5 17 5 16.33 5 15.5zM15.5 13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM14 19h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11h-5C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8zM10 5H8.5C7.67 5 7 4.33 7 3.5S7.67 2 8.5 2s1.5.67 1.5 1.5z"
      />
    </svg>
  );
}
