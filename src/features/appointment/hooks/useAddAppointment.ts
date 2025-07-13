import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import { addAppointment, editAppointment } from '@/lib/api/appointment';
import { AppointmentPost } from '@/types/appointment';

const appointmentSchema = z.object({
  patient_name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  time: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:mm)'),
  doctor_id: z.string().min(1, 'Doctor ID is required'),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

interface UseAddAppointmentProps {
  isEdit?: boolean;
  defaultValues?: AppointmentPost;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useAddAppointment = ({
  isEdit = false,
  defaultValues = {
    patient_name: '',
    email: '',
    date: '',
    time: '',
    doctor_id: '',
  },
  onSuccess,
  onError,
}: UseAddAppointmentProps) => {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<AppointmentFormValues> = async (data) => {
    try {
      if (isEdit && defaultValues?.id) {
        await editAppointment(defaultValues.id, data as AppointmentPost);
      } else {
        await addAppointment(data as AppointmentPost);
      }

      toast('Appointment has been scheduled', {
        description: `Please check ${data.email} for confirmation.`,
        action: {
          label: 'Okay',
          onClick: () => {},
        },
      });

      onSuccess?.();
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Failed to save appointment.',
      });
      onError?.(error);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    isSubmitted: form.formState.isSubmitted,
  };
};
