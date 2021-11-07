import styled from "styled-components";
import SecondaryText from "../../ui/SecondaryText/SecondaryText";

const SecondaryTextWithMargin = styled(SecondaryText)`
  margin-top: 32px;
  line-height: 19px;
  @media (max-width: 576px) {
    margin-top: 24px;
  }
`;

const EmailLink = styled.u`
  color: #7297ff;
  cursor: pointer;
`;

const RestorePassSentMessage: React.FC = () => {
  return (
    <SecondaryTextWithMargin>
      An email has been sent to <EmailLink>example@exam.com</EmailLink>. Check
      your inbox, and click the reset link provided.
    </SecondaryTextWithMargin>
  );
};

export default RestorePassSentMessage;
