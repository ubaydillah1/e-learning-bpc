export default function BloodIcon({
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
        d="m12 4 .759-.651a1 1 0 0 0-1.518 0zm0 0-.76-.65-.005.005-.013.016-.215.26A31 31 0 0 0 8.64 7.049C7.367 9.19 6 12.133 6 15h2c0-2.31 1.133-4.866 2.36-6.93a29 29 0 0 1 2.203-3.181l.196-.238zm6 11c0-2.867-1.367-5.81-2.64-7.952a31 31 0 0 0-2.367-3.416l-.215-.261-.013-.016-.004-.004-.002-.002-.759.65-.759.652.002.002.045.054q.051.06.149.182a29 29 0 0 1 2.203 3.18C14.866 10.135 16 12.69 16 15zm-2 0a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4 4a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6z"
      />
    </svg>
  );
}
