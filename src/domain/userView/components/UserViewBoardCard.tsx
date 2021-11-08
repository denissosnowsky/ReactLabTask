import timeIcon from "../assets/time.svg";
import heartIcon from "../assets/heart.svg";
import { AppointmentsDataAPI } from "../types/types";
import Card from "../../../ui/Card/Card";
import SecondaryText from "../../../ui/SecondaryText/SecondaryText";

interface UserViewBoardCardPropsType {
  data: AppointmentsDataAPI;
}

const UserViewBoardCard: React.FC<UserViewBoardCardPropsType> = ({ data }) => {
  const MENU_ARRAY = [""];

  return (
    <>
      <Card
        settingsMenu={MENU_ARRAY}
        name={data.name}
        message1={data.date}
        message2={data.reason}
        message1Icon={timeIcon}
        message2Icon={heartIcon}
        status={<SecondaryText>{data.type}</SecondaryText>}
      />
    </>
  );
};

export default UserViewBoardCard;
