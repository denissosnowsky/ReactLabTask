import styled from "styled-components";
import SecondaryText from "../../../ui/SecondaryText/SecondaryText";
import onlineIcon from "../assets/online.svg";
import notOnlineIcon from "../assets/notOnline.svg";
import waitIcon from "../assets/wait.svg";

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

interface DoctorUserStatusPropsType {
  confirmed: "yes" | "no" | "wait";
}

const DoctorUserStatus: React.FC<DoctorUserStatusPropsType> = ({
  confirmed,
}) => {
  return (
    <>
      <StatusImage
        alt="status"
        src={
          confirmed === "yes"
            ? onlineIcon
            : confirmed === "no"
            ? notOnlineIcon
            : waitIcon
        }
      />
      <UserStatus>
        {confirmed === "yes"
          ? "Appointment is confirmed"
          : confirmed === "no"
          ? "Appointment is canceled"
          : "Waiting for confirmation... "}
      </UserStatus>
    </>
  );
};

export default DoctorUserStatus;
