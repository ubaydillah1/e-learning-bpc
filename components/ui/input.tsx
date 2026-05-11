import * as React from "react";
import { cn } from "../../lib/utils";
import { DateInput } from "./date-input";

type NativeInputProps = React.ComponentPropsWithoutRef<"input">;

/**
 * Custom Date Input (discriminated)
 */
type DateInputStrictProps = {
  type: "date";
  value?: Date;
  onChange?: (date: Date | undefined) => void;
} & Omit<NativeInputProps, "type" | "value" | "onChange">;

/**
 * Default native input (non-date)
 */
type DefaultInputProps = NativeInputProps & {
  type?: Exclude<NativeInputProps["type"], "date">;
};

type InputProps = DateInputStrictProps | DefaultInputProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  if (props.type === "date") {
    const { className, value, onChange, disabled } =
      props as DateInputStrictProps;

    return (
      <DateInput
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
        ref={ref as unknown as React.Ref<HTMLButtonElement>}
      />
    );
  }

  const { className, type, ...rest } = props as DefaultInputProps;

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-primary-p500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive b2-r",
        className,
      )}
      ref={ref}
      {...rest}
    />
  );
});
Input.displayName = "Input";

export { Input };
