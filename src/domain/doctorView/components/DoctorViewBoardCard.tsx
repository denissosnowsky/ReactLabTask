import styled from "styled-components";
import MainText from "../../../ui/MainText/MainText";
import SecondaryText from "../../../ui/SecondaryText/SecondaryText";
import UserLogo from "../../../ui/UserLogo/UserLogo";
import onlineIcon from "../assets/online.svg";
import notOnlineIcon from "../assets/notOnline.svg";
import waitIcon from "../assets/wait.svg";
import timeIcon from "../assets/time.svg";
import boardIcon from "../assets/board.svg";
import SettingsButton from "./SettingsButton";
import { PatientDataAPI } from "../types/types";
import { Ref, useEffect, useMemo, useRef, useState } from "react";
import { nameCutter } from "../utils/nameCutter";

const Card = styled.div`
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

const UserName = styled.div`
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

const UserStatus = styled(SecondaryText)`
  line-height: 16px;
  font-size: 13px;
  font-weight: 500;
`;

const StatusImage = styled.img`
  height: 8px;
  width: 8px;
  margin-right: 8px;
  margin-top: 3px;
  @media (max-width: 576px) {
    margin-top: 6px;
  }
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

const CardMainTime = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
  min-height: 24px;
  line-height: 24px;
`;

const CardMainInvite = styled.div`
  display: flex;
  gap: 18px;
`;

const CardTime = styled(MainText)`
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

interface DoctorViewBoardCardPropsType {
  data: PatientDataAPI;
}

const DoctorViewBoardCard: React.FC<DoctorViewBoardCardPropsType> = ({
  data,
}) => {
  const NAME_TEXT_HEIGHT = 32;
  const MENU_ARRAY = ["Create a resolution", "Edit an appontment", "Delete"];

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
    <Card>
      <CardHeader>
        <Logo />
        <UserName>
          <UserNameText ref={nameTextRef} height={`${NAME_TEXT_HEIGHT}px`}>
            {isNameShort ? nameCutter(data.name) : data.name}
          </UserNameText>
          <UserStatusWrapper>
            <StatusImage
              alt="status"
              src={
                data.confirmed === "yes"
                  ? onlineIcon
                  : data.confirmed === "no"
                  ? notOnlineIcon
                  : waitIcon
              }
            />
            <UserStatus>
              {data.confirmed === "yes"
                ? "Appointment is confirmed"
                : data.confirmed === "no"
                ? "Appointment is canceled"
                : "Waiting for confirmation... "}
            </UserStatus>
          </UserStatusWrapper>
        </UserName>
        <CardHeaderSettingsButton>
          <SettingsButton data={MENU_ARRAY} />
        </CardHeaderSettingsButton>
      </CardHeader>

      <CardMain>
        <CardMainTime>
          <CardMainIcon alt="time" src={timeIcon} />
          <CardTime>{data.date}</CardTime>
        </CardMainTime>
        <CardMainInvite>
          <CardMainIcon alt="invite" src={boardIcon} />
          <MainText>{data.invitation}</MainText>
        </CardMainInvite>
      </CardMain>
    </Card>
  );
};

export default DoctorViewBoardCard;
