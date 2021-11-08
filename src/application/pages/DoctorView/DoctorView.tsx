import DoctorViewHeader from "../../../domain/doctorView/DoctorViewHeader";
import DoctorViewMain from "../../../domain/doctorView/DoctorViewMain";
import DoctorViewBoardNav from "../../../domain/doctorView/DoctorViewBoardNav";
import DoctorViewWindowWrapper from "../../../domain/doctorView/DoctorViewWindowWrapper";
import DoctorViewBoardHeader from "../../../domain/doctorView/DoctorViewBoardHeader";
import DoctorViewBoardMain from "../../../domain/doctorView/DoctorViewBoardMain";
import DoctorViewBoardFilled from "../../../domain/doctorView/DoctorViewBoardFilled";
import DoctorViewBoardEmpty from "../../../domain/doctorView/DoctorViewBoardEmpty";
import { data } from "../../../db";
import { emptyData } from "../../../emptyDb";

const DoctorView: React.FC = () => {
  return (
    <DoctorViewWindowWrapper>
      <DoctorViewHeader />
      <DoctorViewMain>
        <DoctorViewBoardNav />
        <DoctorViewBoardHeader />
        <DoctorViewBoardMain>
          {
            /* emptyData.length */ data.patients.length > 0 ? (
              <DoctorViewBoardFilled data={data.patients /* emptyData */} />
            ) : (
              <DoctorViewBoardEmpty />
            )
          }
        </DoctorViewBoardMain>
      </DoctorViewMain>
    </DoctorViewWindowWrapper>
  );
};

export default DoctorView;
