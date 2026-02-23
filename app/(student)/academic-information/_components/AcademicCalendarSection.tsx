"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/public/assets/icons";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

// --- Types ---

interface CalendarEvent {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  color?: string; // "orange" | "blue" etc.
}

interface AcademicCalendarSectionProps {
  initialDate?: Date;
  events?: CalendarEvent[];
}

// --- Constants ---

const DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sept",
  "Okt",
  "Nov",
  "Des",
];

// --- Color Maps ---

const EVENT_COLORS: Record<
  string,
  {
    solid: string;
    light: string;
    text: string;
    border: string;
  }
> = {
  orange: {
    solid: "bg-orange-400",
    light: "bg-orange-100",
    text: "text-orange-500",
    border: "border-orange-400",
  },
  blue: {
    solid: "bg-indigo-600",
    light: "bg-indigo-100",
    text: "text-indigo-600",
    border: "border-indigo-600",
  },
  green: {
    solid: "bg-emerald-500",
    light: "bg-emerald-100",
    text: "text-emerald-600",
    border: "border-emerald-500",
  },
  red: {
    solid: "bg-red-500",
    light: "bg-red-100",
    text: "text-red-600",
    border: "border-red-500",
  },
};

const DEFAULT_COLOR = EVENT_COLORS.orange;

// --- Helpers ---

function normalize(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function getColorConfig(color?: string) {
  return EVENT_COLORS[color ?? "orange"] ?? DEFAULT_COLOR;
}

// --- Component ---

const AcademicCalendarSection = ({
  initialDate = new Date(2025, 8, 1),
  events = [],
}: AcademicCalendarSectionProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker on outside click
  useEffect(() => {
    if (!showPicker) return;
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showPicker]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // --- Navigation ---

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));

  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const goToMonth = (m: number, y: number) => {
    setCurrentDate(new Date(y, m, 1));
    setShowPicker(false);
  };

  // --- Grid Generation ---

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = (() => {
    const d = new Date(year, month, 1).getDay();
    return d === 0 ? 6 : d - 1; // Monday=0 … Sunday=6
  })();

  const prevMonthDays = new Date(year, month, 0).getDate();

  type Cell = { day: number; date: Date; current: boolean };
  const cells: Cell[] = [];

  // Previous month padding
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    cells.push({ day: d, date: new Date(year, month - 1, d), current: false });
  }

  // Current month
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({ day: i, date: new Date(year, month, i), current: true });
  }

  // Next month padding (fill to 35 or 42)
  const totalRows = cells.length > 35 ? 42 : 35;
  const remaining = totalRows - cells.length;
  for (let i = 1; i <= remaining; i++) {
    cells.push({ day: i, date: new Date(year, month + 1, i), current: false });
  }

  // --- Event Matching ---

  const findEvent = (date: Date) => {
    const t = normalize(date);
    return events.find((e) => {
      const s = normalize(e.startDate);
      const end = normalize(e.endDate);
      return t >= s && t <= end;
    });
  };

  const getEventInfo = (date: Date) => {
    const event = findEvent(date);
    if (!event) return null;

    const t = normalize(date);
    const s = normalize(event.startDate);
    const e = normalize(event.endDate);
    const isSingle = s === e;
    const isStart = t === s;
    const isEnd = t === e;
    const isMiddle = t > s && t < e;

    return { event, isSingle, isStart, isEnd, isMiddle };
  };

  // --- Events for this month ---

  const monthEvents = events.filter((e) => {
    const ms = new Date(year, month, 1);
    const me = new Date(year, month + 1, 0);
    return (
      (e.startDate <= me && e.startDate >= ms) ||
      (e.endDate >= ms && e.endDate <= me) ||
      (e.startDate <= ms && e.endDate >= me)
    );
  });
  monthEvents.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  // --- Year range for picker ---

  return (
    <section className="bg-white p-5 rounded-lg">
      <h2 className="b1-b mb-4">Kalender Akademik</h2>

      {/* ── Month Selector ── */}
      <div className="flex items-center justify-between mb-6 relative">
        <button
          onClick={() => setShowPicker((v) => !v)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="h5 text-neutral-n900">
            {MONTHS_SHORT[month]} {year}
          </span>
          <ChevronRightIcon
            className={cn(
              "text-neutral-n900 size-5 transition-transform duration-200",
              showPicker ? "-rotate-90" : "rotate-90",
            )}
          />
        </button>

        <div className="flex gap-3">
          <button onClick={prevMonth} aria-label="Bulan sebelumnya">
            <ChevronLeftIcon className="size-5 text-neutral-n900" />
          </button>
          <button onClick={nextMonth} aria-label="Bulan berikutnya">
            <ChevronRightIcon className="size-5 text-neutral-n900" />
          </button>
        </div>

        {/* ── Month / Year Picker Dropdown ── */}
        {showPicker && (
          <div
            ref={pickerRef}
            className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-n200 z-50 p-4 w-[280px] animate-in fade-in-0 zoom-in-95"
          >
            {/* Year navigation */}
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setCurrentDate(new Date(year - 1, month, 1))}
                className="p-1 hover:bg-neutral-n100 rounded-full"
              >
                <ChevronLeftIcon className="size-4 text-neutral-n900" />
              </button>
              <span className="b2-b text-neutral-n900">{year}</span>
              <button
                onClick={() => setCurrentDate(new Date(year + 1, month, 1))}
                className="p-1 hover:bg-neutral-n100 rounded-full"
              >
                <ChevronRightIcon className="size-4 text-neutral-n900" />
              </button>
            </div>

            {/* Month grid */}
            <div className="grid grid-cols-3 gap-2">
              {MONTHS_SHORT.map((m, i) => (
                <button
                  key={m}
                  onClick={() => goToMonth(i, year)}
                  className={cn(
                    "py-2 rounded-lg b3-m transition-colors",
                    i === month
                      ? "bg-primary text-white"
                      : "hover:bg-neutral-n100 text-neutral-n900",
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Calendar Grid ── */}
      <div className="mb-6">
        {/* Day headers */}
        <div className="grid grid-cols-7 mb-3 text-center">
          {DAYS.map((day, i) => (
            <div
              key={day}
              className={cn(
                "b3-b text-neutral-n600",
                i === 6 && "text-accent-r500",
              )}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Date cells */}
        <div className="grid grid-cols-7 text-center">
          {cells.map((cell, idx) => {
            const info = cell.current ? getEventInfo(cell.date) : null;
            const isSun = cell.date.getDay() === 0;

            // Determine the range background strip
            let stripClass = "";
            if (info && !info.isSingle) {
              const c = getColorConfig(info.event.color);
              if (info.isStart) stripClass = c.light;
              else if (info.isEnd) stripClass = c.light;
              else if (info.isMiddle) stripClass = c.light;
            }

            // Determine the circle style
            let circleClass = "";
            if (info) {
              const c = getColorConfig(info.event.color);
              if (info.isSingle) {
                circleClass = `${c.solid} text-white rounded-full`;
              } else if (info.isStart) {
                circleClass = `${c.solid} text-white rounded-l-full`;
              } else if (info.isEnd) {
                circleClass = `${c.solid} text-white rounded-r-full`;
              }
            }

            return (
              <div
                key={idx}
                className="relative h-10 flex items-center justify-center"
              >
                {/* Background strip for range */}
                {stripClass && (
                  <div
                    className={cn(
                      "absolute inset-y-0 h-10",
                      stripClass,
                      info?.isStart
                        ? "left-1/2 right-0"
                        : info?.isEnd
                          ? "left-0 right-1/2"
                          : "left-0 right-0",
                    )}
                  />
                )}

                {/* Date number */}
                <span
                  className={cn(
                    "relative z-10 size-10 flex items-center justify-center b2-m",
                    // Base text colors
                    !cell.current && "text-neutral-n300",
                    cell.current && !info && "text-neutral-n900",
                    cell.current && isSun && !info && "text-accent-r500",
                    // Circle highlight
                    circleClass,
                  )}
                >
                  {cell.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-neutral-n200 w-full mb-4" />

      {/* ── Events List ── */}
      {monthEvents.length > 0 ? (
        <div className="flex flex-col gap-4">
          {monthEvents.map((item) => {
            const c = getColorConfig(item.color);
            return (
              <div
                key={item.id}
                className={cn("flex gap-3 border-l-4 pl-3", c.border)}
              >
                <div>
                  <p className={cn("b2-b", c.text)}>{item.title}</p>
                  <p className="c1-r text-neutral-n400">
                    {item.startDate.getDate()}{" "}
                    {MONTHS_SHORT[item.startDate.getMonth()]}{" "}
                    {item.startDate.getFullYear()}
                    {item.startDate.getTime() !== item.endDate.getTime() &&
                      ` - ${item.endDate.getDate()} ${MONTHS_SHORT[item.endDate.getMonth()]} ${item.endDate.getFullYear()}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center py-5 text-neutral-n400">
          <p className="b2-r">Tidak ada agenda di bulan ini</p>
        </div>
      )}
    </section>
  );
};

export default AcademicCalendarSection;
