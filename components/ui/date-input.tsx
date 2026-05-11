"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DateInputProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const DateInput = React.forwardRef<HTMLButtonElement, DateInputProps>(
  ({ value, onChange, placeholder, className, disabled }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            type="button"
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-start text-left font-normal border-input text-neutral-n900 h-9 px-3 focus-visible:border-primary-p500",
              "hover:bg-transparent hover:text-neutral-n900 shadow-none",
              isOpen && "border-primary-p500",
              !value && "text-neutral-n400",
              className,
            )}
          >
            {value ? format(value, "yyyy-MM-dd") : placeholder}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange?.(date);
              setIsOpen(false);
            }}
            captionLayout="dropdown"
            startMonth={new Date(1900, 0)}
            endMonth={new Date(new Date().getFullYear(), 11)}
          />
        </PopoverContent>
      </Popover>
    );
  },
);
DateInput.displayName = "DateInput";
