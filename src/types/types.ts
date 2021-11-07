export type PatientDataAPI = {
  id: number;
  name: string;
  confirmed: "yes" | "no" | "wait";
  date: string;
  invitation: string;
};
