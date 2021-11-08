export type PatientDataAPI = {
  id: number;
  name: string;
  confirmed: "yes" | "no" | "wait";
  date: string;
  invitation: string;
};

export type AppointmentsDataAPI = {
  id: number;
  name: string;
  type: string;
  date: string;
  reason: string;
};
