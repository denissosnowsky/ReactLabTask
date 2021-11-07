import styled from "styled-components";
import SecondaryText from "../../ui/SecondaryText/SecondaryText";
import historyImage from "./assets/medicalHistory.svg";

const DoctorViewBoardEmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const DoctorViewBoardEmptyInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 40px;
  flex-direction: column;
`;

const DoctorViewBoardEmptyInfoText = styled(SecondaryText)`
  text-align: center;
`;

const DoctorViewBoardEmpty: React.FC = () => {
  return (
    <DoctorViewBoardEmptyWrapper>
      <DoctorViewBoardEmptyInfoBlock>
        <img alt="noClients" src={historyImage} />
        <DoctorViewBoardEmptyInfoText>
          You have no patients yet.
          <br />
          To create a patient profile, please contact your administrator.
        </DoctorViewBoardEmptyInfoText>
      </DoctorViewBoardEmptyInfoBlock>
    </DoctorViewBoardEmptyWrapper>
  );
};

export default DoctorViewBoardEmpty;
