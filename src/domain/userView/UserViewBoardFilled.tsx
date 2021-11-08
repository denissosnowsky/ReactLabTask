import styled from "styled-components";
import UserViewBoardCard from "./components/UserViewBoardCard";
import { AppointmentsDataAPI } from "./types/types";

const UserViewBoardFilledWrapper = styled.div`
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

interface UserViewBoardFilledPropsType {
  data: Array<AppointmentsDataAPI>;
}

const UserViewBoardFilled: React.FC<UserViewBoardFilledPropsType> = ({
  data,
}) => {
  return (
    <UserViewBoardFilledWrapper>
      {data.map((item) => (
        <UserViewBoardCard data={item} key={item.id}></UserViewBoardCard>
      ))}
    </UserViewBoardFilledWrapper>
  );
};

export default UserViewBoardFilled;
