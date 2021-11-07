import { useField } from "formik";
import InputForForm from "../InputForForm/InputForForm";
import { InputForFormikPropsType } from "./types/types";

const InputForFormik: React.FC<InputForFormikPropsType> = ({
  style,
  width,
  type,
  placeholder,
  icon,
  name,
  iconAlt,
}) => {
  const [field, meta] = useField({ type, placeholder, style, name });
  return (
    <InputForForm
      type={type}
      placeholder={placeholder}
      style={style && style}
      name={name}
      icon={icon}
      width={width && width}
      iconAlt={iconAlt && iconAlt}
      isErrored={meta.touched && Boolean(meta.error)}
      formikInputFieldProps={field}
    />
  );
};

export default InputForFormik;
