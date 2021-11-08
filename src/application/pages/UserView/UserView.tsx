import UserViewBoardFilled from "../../../domain/userView/UserViewBoardFilled";
import UserViewBoardHeader from "../../../domain/userView/UserViewBoardHeader";
import UserViewBoardMain from "../../../domain/userView/UserViewBoardMain";
import UserViewBoardNav from "../../../domain/userView/UserViewBoardNav";
import UserViewHeader from "../../../domain/userView/UserViewHeader";
import UserViewMain from "../../../domain/userView/UserViewMain";
import UserViewWindowWrapper from "../../../domain/userView/UserViewWindowWrapper";
import { data } from "../../../db";

const UserView: React.FC = () => {
  return (
    <UserViewWindowWrapper>
      <UserViewHeader />
      <UserViewMain>
        <UserViewBoardNav />
        <UserViewBoardHeader />
        <UserViewBoardMain>
          <UserViewBoardFilled data={data.appointments} />
        </UserViewBoardMain>
      </UserViewMain>
    </UserViewWindowWrapper>
  );
};

export default UserView;
