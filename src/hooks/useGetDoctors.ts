import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllDoctor } from '@/lib/api/doctor';
import { Filters } from '@/types/filter';
import { DoctorListResponse } from '@/types/doctor';

const DEFAULT_FILTERS: Filters = {
  limit: 10,
};

export const useDoctors = (filters: Filters = {}) => {
  return useInfiniteQuery<DoctorListResponse, Error>({
    queryKey: ['doctors', filters],
    queryFn: ({ pageParam = 1 }) =>
      getAllDoctor({
        ...DEFAULT_FILTERS,
        ...filters,
        page: pageParam as number,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.total / lastPage.limit);
      const nextPage =
        allPages.length < totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
    refetchOnWindowFocus: false,
  });
};
