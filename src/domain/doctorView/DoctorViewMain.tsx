import styled from "styled-components";

const DoctorViewMainWrapper = styled.main`
  overflow: hidden;
  flex: 1;
  border-radius: 16px;
`;

const DoctorViewMainStyle = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f9faff;
  padding: 40px 16px 40px 48px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    padding: 40px 22px 40px 22px;
  }
`;

const DoctorViewMain: React.FC = ({ children }) => {
  return (
    <DoctorViewMainWrapper>
      <DoctorViewMainStyle>{children}</DoctorViewMainStyle>
    </DoctorViewMainWrapper>
  );
};

export default DoctorViewMain;
