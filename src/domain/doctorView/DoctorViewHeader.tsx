import styled from "styled-components";
import Logo from "../../ui/Logo/Logo";
import UserBlock from "./components/UserBlock";

const DoctorViewHeaderStyle = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
    height: 72px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const DoctorViewHeader = () => {
  return (
    <DoctorViewHeaderStyle>
      <Logo />
      <UserBlock />
    </DoctorViewHeaderStyle>
  );
};

export default DoctorViewHeader;
