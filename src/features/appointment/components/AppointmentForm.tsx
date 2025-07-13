'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export type AppointmentFormValues = {
  patient_name: string;
  email: string;
  date: string;
  time: string;
  doctor_id: string;
};

interface Props {
  formId?: string;
  onSubmit: () => void;
}

export const AppointmentForm: React.FC<Props> = ({ formId, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useFormContext<AppointmentFormValues>();

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Patient Name</label>
        <Input {...register('patient_name')} />
        {errors.patient_name && (
          <p className="text-red-500 text-sm">{errors.patient_name.message}</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <Input {...register('email')} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>Date</label>
        <Input type="date" {...register('date')} />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date.message}</p>
        )}
      </div>

      <div>
        <label>Time</label>
        <Input type="time" {...register('time')} />
        {errors.time && (
          <p className="text-red-500 text-sm">{errors.time.message}</p>
        )}
      </div>

      <div>
        <label>Doctor ID</label>
        <Input {...register('doctor_id')} />
        {errors.doctor_id && (
          <p className="text-red-500 text-sm">{errors.doctor_id.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Book Appointment'}
      </Button>
    </form>
  );
};
