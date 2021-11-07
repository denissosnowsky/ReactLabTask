import { FieldInputProps } from "formik";

type InputType = "text" | "password" | "number" | "email";

export type FormikInputPropsType = {
  style?: React.CSSProperties | undefined;
  type: InputType;
  placeholder: string;
  name: string;
};

export interface InputForFormikPropsType {
  style?: React.CSSProperties | undefined;
  width?: string;
  type: InputType;
  placeholder: string;
  icon: string;
  iconAlt?: string;
  name: string;
}
