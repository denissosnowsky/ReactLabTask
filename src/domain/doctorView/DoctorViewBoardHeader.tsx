import styled from "styled-components";
import Header from "ui/Header/Header";
import SearchInput from "ui/SearchInput/SearchInput";
import Selector from "ui/Selector/Selector";

const DoctorViewBoardHeaderStyle = styled.header`
  height: 32px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
`;

const DoctorViewBoardHeaderFilters = styled.div`
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

const DoctorViewBoardHeader: React.FC = () => {
  return (
    <DoctorViewBoardHeaderStyle>
      <MediaHeader>My Patients</MediaHeader>
      <DoctorViewBoardHeaderFilters>
        <SearchInput />
        <Selector labelName="Sort by" options={["Date", "Name"]} />
      </DoctorViewBoardHeaderFilters>
    </DoctorViewBoardHeaderStyle>
  );
};

export default DoctorViewBoardHeader;
