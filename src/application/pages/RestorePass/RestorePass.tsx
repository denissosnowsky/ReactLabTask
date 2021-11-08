import RestorePassAside from "domain/restorePass/RestorePassAside";
import RestorePassFormik from "domain/restorePass/RestorePassFormik";
import RestorePassHeader from "domain/restorePass/RestorePassHeader";
import RestorePassMessage from "domain/restorePass/RestorePassMessage";
import BackGroundImage from "ui/BackGroundImage/BackGroundImage";
import WindowWrapper from "ui/WindowWrapper/WindowWrapper";

const RestorePass: React.FC = () => {
  return (
    <WindowWrapper>
      <BackGroundImage />
      <RestorePassAside>
        <RestorePassHeader />
        <RestorePassMessage />
        <RestorePassFormik />
      </RestorePassAside>
    </WindowWrapper>
  );
};

export default RestorePass;
