import styled from "styled-components";
import Button from "../../ui/Button/Button";

const DoctorViewBoardNavStyle = styled.nav`
  height: 96px;
  display: flex;
  gap: 12px;
  @media (max-width: 576px) {
    gap: 24px;
  }
`;

const NavButton = styled(Button)`
  width: 160px;
  min-height: 40px;
  height: 40px;
  @media (max-width: 576px) {
    width: 120px;
    min-width: 120px;
  }
`;

const DoctorViewBoardNav: React.FC = () => {
  return (
    <DoctorViewBoardNavStyle>
      <NavButton text="Patients" />
      <NavButton text="Resolutions" variant="light" />
    </DoctorViewBoardNavStyle>
  );
};

export default DoctorViewBoardNav;
