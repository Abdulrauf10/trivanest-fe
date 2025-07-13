// app/appointment/page.tsx
'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import { useAddAppointment } from './hooks/useAddAppointment';
import { AppointmentForm } from './components/AppointmentForm';
import DoctorAvailabilityCalendar from '@/components/DoctorAvailabilityCalendar';
import usegetDoctorById from '@/hooks/useGetDoctorById';

const doctorsList = [
  { id: '328aafd8-1b24-4779-80ae-6c751a3bbcb2', name: 'Dr. Kim' },
  // Add more doctors here
];

export default function AppointmentPage() {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(
    doctorsList[0]?.id || null,
  );

  const {
    data: doctorData,
    isLoading,
    isError,
  } = usegetDoctorById(selectedDoctorId || '');

  const availability = doctorData
    ? [
        {
          date: doctorData.day === 'Monday' ? '2025-04-07' : '2025-04-08',
          time: doctorData.time,
        },
      ]
    : [];

  const handleSuccess = () => {
    toast('Appointment scheduled', {
      description: 'Please check your email for confirmation.',
      action: {
        label: 'Okay',
        onClick: () => {},
      },
    });
  };

  const { form, submitHandler, isSubmitting } = useAddAppointment({
    isEdit: false,
    defaultValues: {
      doctor_id: selectedDoctorId || '',
    },
    onSuccess: handleSuccess,
    onError: () => {
      toast.error('Failed to book appointment');
    },
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto">
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>

        <select
          value={selectedDoctorId || ''}
          onChange={(e) => setSelectedDoctorId(e.target.value)}
          className="mb-4 p-2 border rounded"
        >
          {doctorsList.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name}
            </option>
          ))}
        </select>

        <form onSubmit={form.handleSubmit(submitHandler)}>
          <AppointmentForm formId="appointment-form" onSubmit={submitHandler} />
        </form>
      </div>

      {/* Calendar Section */}
      <div className="md:w-1/2 w-full">
        {isLoading ? (
          <div>Loading schedule...</div>
        ) : (
          <DoctorAvailabilityCalendar availability={availability} />
        )}
      </div>
    </div>
  );
}
