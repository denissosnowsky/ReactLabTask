import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputForFormik from "ui/InputForFormik/InputForFormik";
import messageIcon from "assets/message.svg";
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

const RestorePassFormik: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
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
            name="email"
            type="email"
            placeholder="Email"
            icon={messageIcon}
            iconAlt="Email"
          />

          <ButtonWithMargin
            type="submit"
            text="Send Reset Link"
            icon="default"
          />
        </FromStyle>
      </Formik>
    </>
  );
};

export default RestorePassFormik;
