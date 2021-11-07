import RestorePassSentAside from "../../../domain/restorePassSent/RestorePassSentAside";
import RestorePassSentHeader from "../../../domain/restorePassSent/RestorePassSentHeader";
import RestorePassSentMessage from "../../../domain/restorePassSent/RestorePassSentMessage";
import BackGroundImage from "../../../ui/BackGroundImage/BackGroundImage";
import WindowWrapper from "../../../ui/WindowWrapper/WindowWrapper";

const RestorePassSent: React.FC = () => {
  return (
    <WindowWrapper>
      <BackGroundImage />
      <RestorePassSentAside>
        <RestorePassSentHeader />
        <RestorePassSentMessage />
      </RestorePassSentAside>
    </WindowWrapper>
  );
};

export default RestorePassSent;
