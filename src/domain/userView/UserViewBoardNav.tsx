import styled from "styled-components";
import Button from "ui/Button/Button";

const UserViewBoardNavStyle = styled.nav`
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

const ResolutionButton = styled(NavButton)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const UserViewBoardNav: React.FC = () => {
  return (
    <UserViewBoardNavStyle>
      <NavButton text="Profile" variant="light" />
      <NavButton text="Appointments" />
      <ResolutionButton text="Resolutions" variant="light" />
    </UserViewBoardNavStyle>
  );
};

export default UserViewBoardNav;
