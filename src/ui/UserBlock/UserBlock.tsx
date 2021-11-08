import styled from "styled-components";
import MainText from "../MainText/MainText";
import SecondaryText from "../SecondaryText/SecondaryText";
import UserLogo from "../UserLogo/UserLogo";

const UserBlockStyle = styled.div`
  height: 80px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const UserBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const MainTextName = styled(MainText)`
  font-weight: 600;
  line-heigth: 19px;
`;

const SecondaryTextType = styled(SecondaryText)`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
`;

const UserLogoWithStatus = styled(UserLogo)`
  &::after {
    position: absolute;
    right: 0px;
    top: 0px;
    content: "";
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #34c197;
    border: 3px solid #e4ebff;
  }
`;

const UserBlock: React.FC = () => {
  return (
    <UserBlockStyle>
      <UserBlockWrapper>
        <MainTextName>Miranda Nelson</MainTextName>
        <SecondaryTextType>Doctor</SecondaryTextType>
      </UserBlockWrapper>
      <UserLogoWithStatus />
    </UserBlockStyle>
  );
};

export default UserBlock;
