import styled from "styled-components";
import DoctorViewBoardCard from "./components/DoctorViewBoardCard";
import { PatientDataAPI } from "./types/types";

const DoctorViewBoardFilledWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: max-content;
  column-gap: 20px;
  padding-right: 32px;
  @media (max-width: 1472px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    margin-top: 42px;
  }
  @media (max-width: 576px) {
    padding-right: 0px;
  }
`;

interface DoctorViewBoardFilledPropsType {
  data: Array<PatientDataAPI>;
}

const DoctorViewBoardFilled: React.FC<DoctorViewBoardFilledPropsType> = ({
  data,
}) => {
  return (
    <DoctorViewBoardFilledWrapper>
      {data.map((item) => (
        <DoctorViewBoardCard key={item.id} data={item} />
      ))}
    </DoctorViewBoardFilledWrapper>
  );
};

export default DoctorViewBoardFilled;
