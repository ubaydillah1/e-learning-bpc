import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils"; // Adjusted path based on file location

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: (string | { value: string | number; label: string })[];
  placeholder?: string;
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, options, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-9 w-full appearance-none items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 pr-8 text-sm shadow-xs transition-[color,box-shadow] placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 truncate",
            className,
          )}
          ref={ref}
          {...props}
        >
          {placeholder !== undefined && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options?.map((option) => {
            const value = typeof option === "string" ? option : option.value;
            const label = typeof option === "string" ? option : option.label;
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 opacity-50" />
      </div>
    );
  },
);
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
