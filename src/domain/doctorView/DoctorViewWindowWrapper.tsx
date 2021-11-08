import styled from "styled-components";
import WindowWrapper from "ui/WindowWrapper/WindowWrapper";

const DoctorViewWindowWrapperStyle = styled(WindowWrapper)`
  background-color: #e4ebff;
  width: 100%;
  padding: 0px 64px 48px 64px;
  flex-direction: column;
  @media (max-width: 576px) {
    padding: 0px;
  }
`;

const DoctorViewWindowWrapper: React.FC = ({ children }) => {
  return (
    <DoctorViewWindowWrapperStyle>{children}</DoctorViewWindowWrapperStyle>
  );
};

export default DoctorViewWindowWrapper;
