import styled from "styled-components";
import Link from "../../ui/Link/Link";
import SecondaryText from "../../ui/SecondaryText/SecondaryText";
import { routes } from "../../application/routes/routes";

const SecondaryTextPaddingRight = styled(SecondaryText)`
  padding-right: 12px;
`;

const SignInFooterWrapper = styled.footer`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  margin-top: 257px;
  @media (max-width: 576px) {
    flex: 1;
    display: flex;
    margin-bottom: 44px;
    align-items: end;
    margin-top: 0px;
  }
`;

const SignInFooter: React.FC = () => {
  return (
    <Wrapper>
      <SignInFooterWrapper>
        <SecondaryTextPaddingRight>
          Don’t have an account?
        </SecondaryTextPaddingRight>
        <Link text="Sign up" to={routes.signUp}></Link>
      </SignInFooterWrapper>
    </Wrapper>
  );
};

export default SignInFooter;
