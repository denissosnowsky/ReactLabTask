import { routes } from "../../application/routes/routes";
import HeaderWithIcon from "../../ui/HeaderWithIcon/HeaderWithIcon";

const RestorePassHeader: React.FC = () => {
  return (
      <HeaderWithIcon to={routes.signIn}>Restore Password</HeaderWithIcon>
  );
};

export default RestorePassHeader;
