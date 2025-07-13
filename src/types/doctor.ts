export type Doctor = {
  id: string;
  specialty: string;
  day: string;
  user_id: string;
  time: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
  };
};

export type DoctorListItem = Pick<Doctor, 'id' | 'day' | 'time'> & {
  name: string;
  specialty: string;
};

export type DoctorListResponse = {
  doctorResponse: DoctorListItem[];
  total: number;
  page: number;
  limit: number;
};
