import styled from "styled-components";
import { Ref, useEffect, useRef, useState } from "react";
import UserLogo from "../UserLogo/UserLogo";
import MainText from "../MainText/MainText";
import { nameCutter } from "../../utils/nameCutter";
import SettingsButton from "../SettingsButton/SettingsButton";

const CardWrapper = styled.div`
  height: fit-content;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  height: 96px;
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  gap: 16px;
  &::after {
    content: "";
    background-color: #dce0ec;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  @media (max-width: 576px) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 3px;
  }
`;

const Logo = styled(UserLogo)`
  height: 48px;
  width: 48px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardHeaderSettingsButton = styled.div`
  height: 48px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

interface UserNameTextStyleType {
  height: string;
}

const UserNameText = styled(MainText)<UserNameTextStyleType>`
  height: fit-content;
  min-height: ${(props) => props.height};
  line-height: 32px;
  font-size: 17px;
  font-weight: 600;
  @media (max-width: 1806px) {
    font-size: 15px;
  }
  @media (max-width: 840px) {
    font-size: 17px;
  }
`;

const UserStatusWrapper = styled.span`
  min-height: 16px;
  display: flex;
`;

const CardMain = styled.div`
  flex: 1;
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: 32px;
  padding-right: 32px;
  @media (max-width: 576px) {
    padding: 16px;
  }
`;

const CardMainMessage1 = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
  min-height: 24px;
  line-height: 24px;
`;

const CardMainMessage2 = styled.div`
  display: flex;
  gap: 18px;
`;

const CardMessage1 = styled(MainText)`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  @media (max-width: 1806px) {
    font-size: 12px !important;
  }
  @media (max-width: 840px) {
    font-size: 15px !important;
  }
`;

const CardMainIcon = styled.img`
  height: 20px;
  width: 20px;
`;

interface CardPropsType {
  settingsMenu: Array<string>;
  name: string;
  message1: string;
  message2: string;
  status: any;
  message1Icon: string;
  message2Icon: string;
}

const Card: React.FC<CardPropsType> = ({
  settingsMenu,
  name,
  message1,
  message2,
  message1Icon,
  message2Icon,
  status,
}) => {
  const NAME_TEXT_HEIGHT = 32;

  const nameTextRef: Ref<HTMLSpanElement> = useRef(null);
  const [isNameShort, setIsNameShort] = useState(false);

  useEffect(() => {
    if (
      nameTextRef.current?.getBoundingClientRect().height! > NAME_TEXT_HEIGHT
    ) {
      setIsNameShort(true);
    }
  }, [isNameShort]);

  return (
    <CardWrapper>
      <CardHeader>
        <Logo />
        <UserInfo>
          <UserNameText ref={nameTextRef} height={`${NAME_TEXT_HEIGHT}px`}>
            {isNameShort ? nameCutter(name) : name}
          </UserNameText>
          <UserStatusWrapper>{status}</UserStatusWrapper>
        </UserInfo>
        <CardHeaderSettingsButton>
          <SettingsButton data={settingsMenu} />
        </CardHeaderSettingsButton>
      </CardHeader>

      <CardMain>
        <CardMainMessage1>
          <CardMainIcon alt="message one" src={message1Icon} />
          <CardMessage1>{message1}</CardMessage1>
        </CardMainMessage1>
        <CardMainMessage2>
          <CardMainIcon alt="message two" src={message2Icon} />
          <MainText>{message2}</MainText>
        </CardMainMessage2>
      </CardMain>
    </CardWrapper>
  );
};

export default Card;
