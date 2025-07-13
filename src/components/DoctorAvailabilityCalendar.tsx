'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, isSameDay } from 'date-fns';

interface Availability {
  date: string;
  time: string;
}

interface Props {
  availability: Availability[];
}

export default function DoctorAvailabilityCalendar({ availability }: Props) {
  const [value, setValue] = useState<Date>(new Date());

  // Group availability by date
  const bookedDatesMap = availability.reduce((acc, slot) => {
    acc[slot.date] = [...(acc[slot.date] || []), slot.time];
    return acc;
  }, {} as Record<string, string[]>);

  const tileContent = ({ date }: { date: Date }) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const times = bookedDatesMap[formattedDate];

    if (!times) return null;

    return (
      <div className="text-xs mt-1 space-y-1">
        {times.map((time, idx) => (
          <div key={idx} className="bg-red-100 text-red-700 rounded px-1">
            {time}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="font-semibold mb-2">Doctor's Schedule</h3>
      <Calendar
        onChange={(nextValue) => {
          if (nextValue instanceof Date) {
            setValue(nextValue);
          }
        }}
        value={value}
        tileContent={tileContent}
        minDate={new Date()}
      />
    </div>
  );
}
