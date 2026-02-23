import { WarningCircleIcon } from "@/public/assets/icons";

type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <span className="flex items-center gap-2 text-xs text-accent-r500">
      <WarningCircleIcon className="size-4 shrink-0" />
      {message}
    </span>
  );
};

export default ErrorMessage;
