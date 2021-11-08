import timeIcon from "../assets/time.svg";
import boardIcon from "../assets/board.svg";
import { PatientDataAPI } from "../types/types";
import Card from "../../../ui/Card/Card";
import DoctorUserStatus from "./DoctorUserStatus";

interface DoctorViewBoardCardPropsType {
  data: PatientDataAPI;
}

const DoctorViewBoardCard: React.FC<DoctorViewBoardCardPropsType> = ({
  data,
}) => {
  const MENU_ARRAY = ["Create a resolution", "Edit an appontment", "Delete"];

  return (
    <>
      <Card
        settingsMenu={MENU_ARRAY}
        name={data.name}
        message1={data.date}
        message2={data.invitation}
        message1Icon={timeIcon}
        message2Icon={boardIcon}
        status={<DoctorUserStatus confirmed={data.confirmed} />}
      />
    </>
  );
};

export default DoctorViewBoardCard;
