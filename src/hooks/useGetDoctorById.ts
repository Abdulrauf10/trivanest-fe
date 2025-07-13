import { useQuery } from '@tanstack/react-query';
import { getDoctorById } from '@/lib/api/doctor';

const usegetDoctorById = (doctorId: string) => {
  return useQuery({
    queryKey: ['doctor-by-id', doctorId],
    queryFn: () => getDoctorById(doctorId),
    enabled: !!doctorId,
  });
};

export default usegetDoctorById;
