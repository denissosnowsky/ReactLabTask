import styled from "styled-components";
import Link from "ui/Link/Link";
import SecondaryText from "ui/SecondaryText/SecondaryText";
import { routes } from "routes/routes";

const SecondaryTextPaddingRight = styled(SecondaryText)`
  padding-right: 12px;
`;

const SignUpFooterWrapper = styled.footer`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  margin-top: 120px;
  @media (max-width: 576px) {
    flex: 1;
    display: flex;
    margin-bottom: 44px;
    align-items: end;
    margin-top: 0px;
  }
`;

const SignUpFooter: React.FC = () => {
  return (
    <Wrapper>
      <SignUpFooterWrapper>
        <SecondaryTextPaddingRight>
          Already have an account?
        </SecondaryTextPaddingRight>
        <Link text="Sign in" to={routes.signIn}></Link>
      </SignUpFooterWrapper>
    </Wrapper>
  );
};

export default SignUpFooter;
