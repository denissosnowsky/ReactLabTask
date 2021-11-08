import styled from "styled-components";
import Logo from "ui/Logo/Logo";
import UserBlock from "ui/UserBlock/UserBlock";

const UserViewHeaderStyle = styled.header`
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

const UserViewHeader = () => {
  return (
    <UserViewHeaderStyle>
      <Logo />
      <UserBlock />
    </UserViewHeaderStyle>
  );
};

export default UserViewHeader;
