import styled from "styled-components";
import SecondaryText from "../../ui/SecondaryText/SecondaryText";

const SecondaryTextWithMargin = styled(SecondaryText)`
  margin-top: 32px;
  line-height: 19px;
  @media (max-width: 576px) {
    margin-top: 24px;
  }
`;

const RestorePassMessage: React.FC = () => {
  return (
    <SecondaryTextWithMargin>
      Please use your email address, and we’ll send you the link to reset your
      password
    </SecondaryTextWithMargin>
  );
};

export default RestorePassMessage;
