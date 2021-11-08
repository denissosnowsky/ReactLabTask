import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputForFormik from "ui/InputForFormik/InputForFormik";
import personIcon from "assets/person.svg";
import checkIcon from "assets/check.svg";
import messageIcon from "assets/message.svg";
import lockIcon from "assets/lock.svg";
import styled from "styled-components";
import Button from "ui/Button/Button";

const FromStyle = styled(Form)`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  @media (max-width: 576px) {
    gap: 24px;
    padding-top: 24px;
  }
`;

const ButtonWithMargin = styled(Button)`
  margin-top: 24px;
  @media (max-width: 576px) {
    margin-top: 8px;
    height: 48px;
  }
`;

const SignUpFormik: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
          confirmPassword: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <FromStyle>
          <InputForFormik
            name="firstName"
            type="text"
            placeholder="First Name"
            icon={personIcon}
            iconAlt="First Name"
          />
          <InputForFormik
            name="lastName"
            type="text"
            placeholder="Last Name"
            icon={personIcon}
            iconAlt="Last Name"
          />
          <InputForFormik
            name="email"
            type="email"
            placeholder="Email"
            icon={messageIcon}
            iconAlt="Email"
          />
          <InputForFormik
            name="password"
            type="password"
            placeholder="Passowrd"
            icon={lockIcon}
            iconAlt="Passowrd"
          />
          <InputForFormik
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            icon={checkIcon}
            iconAlt="Confirm Password"
          />

          <ButtonWithMargin type="submit" text="Sign Up" icon="default" />
        </FromStyle>
      </Formik>
    </>
  );
};

export default SignUpFormik;
