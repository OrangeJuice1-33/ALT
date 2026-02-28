"use client";

import React, { useState, useRef, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, X } from "lucide-react";

interface DatePickerProps {
  value: string; // YYYY-MM-DD format
  onChange: (date: string) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
}

export default function DatePicker({ 
  value, 
  onChange, 
  placeholder = "Select date",
  minDate,
  maxDate 
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectedDate = value ? new Date(value + "T00:00:00") : null;
  
  // Get calendar days for current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const handleDateSelect = (date: Date) => {
    if (minDate && date < minDate) return;
    if (maxDate && date > maxDate) return;
    
    onChange(format(date, "yyyy-MM-dd"));
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setIsOpen(false);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today);
    handleDateSelect(today);
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div ref={containerRef} className="relative">
      {/* Input Field */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-zinc-900 px-4 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-600 focus:border-blue-500 focus:outline-none transition-colors flex items-center justify-between text-left"
      >
        <span className={`text-sm font-medium ${value ? "text-white" : "text-zinc-400"}`}>
          {value ? format(new Date(value + "T00:00:00"), "dd/MM/yyyy") : placeholder}
        </span>
        <div className="flex items-center gap-2">
          {value && (
            <X
              size={16}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
              onClick={handleClear}
            />
          )}
          <CalendarIcon size={18} className="text-zinc-400" />
        </div>
      </button>

      {/* Calendar Popup */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-zinc-900/98 backdrop-blur-xl border border-zinc-700 rounded-xl shadow-2xl p-6 w-[420px] sm:w-[450px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={goToPreviousMonth}
              className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft size={20} className="text-zinc-300" />
            </button>
            
            <h3 className="text-lg font-bold text-white">
              {format(currentMonth, "MMMM yyyy")}
            </h3>
            
            <button
              onClick={goToNextMonth}
              className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Next month"
            >
              <ChevronRight size={20} className="text-zinc-300" />
            </button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-sm text-zinc-300 font-semibold text-center py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => {
              const isCurrentMonth = isSameMonth(day, currentMonth);
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const isTodayDate = isToday(day);
              const dayStart = new Date(day);
              dayStart.setHours(0, 0, 0, 0);
              const todayStart = new Date();
              todayStart.setHours(0, 0, 0, 0);
              
              const isDisabled = 
                (minDate && dayStart < minDate) || 
                (maxDate && dayStart > maxDate) ||
                (dayStart < todayStart && !isTodayDate);

              return (
                <button
                  key={day.toString()}
                  onClick={() => handleDateSelect(day)}
                  disabled={isDisabled}
                  className={`
                    aspect-square rounded-xl text-base font-medium transition-all
                    ${!isCurrentMonth ? "text-zinc-500" : "text-zinc-100"}
                    ${isSelected 
                      ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/50 scale-105" 
                      : isTodayDate
                      ? "bg-zinc-800 text-white font-bold ring-2 ring-blue-500"
                      : "hover:bg-zinc-800 hover:text-white"
                    }
                    ${isDisabled ? "opacity-25 cursor-not-allowed hover:bg-transparent hover:text-zinc-500" : "cursor-pointer"}
                  `}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-700">
            <button
              onClick={handleClear}
              className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-zinc-800 font-medium"
            >
              Clear
            </button>
            <button
              onClick={goToToday}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors px-4 py-2 rounded-lg hover:bg-blue-500/10 font-semibold"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
