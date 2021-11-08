import styled from "styled-components";
import Button from "ui/Button/Button";
import Header from "ui/Header/Header";
import Selector from "ui/Selector/Selector";
import plusIcon from "./assets/plus.svg";

const UserViewBoardHeaderStyle = styled.header`
  height: 32px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
`;

const UserViewBoardHeaderFilters = styled.div`
  display: flex;
  align-items: center;
  margin-right: 44px;
  @media (max-width: 576px) {
    margin-right: 0px;
  }
`;

const MediaHeader = styled(Header)`
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const CreateButton = styled(Button)`
  width: 257px;
  min-height: 48px;
  height: 48px;
  gap: 12px;
  margin-left: 65px;
  @media (max-width: 1160px) {
    display: none;
  }
`;

const UserViewBoardHeader: React.FC = () => {
  return (
    <UserViewBoardHeaderStyle>
      <MediaHeader>My Appointments</MediaHeader>
      <UserViewBoardHeaderFilters>
        <Selector labelName="Show" options={["Upcoming"]} />
        <CreateButton
          text="Create an appointment"
          signSide="left"
          icon={plusIcon}
          fs="15px"
        />
      </UserViewBoardHeaderFilters>
    </UserViewBoardHeaderStyle>
  );
};

export default UserViewBoardHeader;
