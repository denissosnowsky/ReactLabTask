import { routes } from "routes/routes";
import HeaderWithIcon from "ui/HeaderWithIcon/HeaderWithIcon";

const RestorePassSentHeader: React.FC = () => {
  return (
      <HeaderWithIcon to={routes.signIn}>Restore Password</HeaderWithIcon>
  );
};

export default RestorePassSentHeader;
