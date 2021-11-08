import LinkForgetPassword from "domain/signIn/LinkForgetPassword";
import SignInAside from "domain/signIn/SIgnInAside";
import SignInFooter from "domain/signIn/SignInFooter";
import SignInFormik from "domain/signIn/SignInFormik";
import BackGroundImage from "ui/BackGroundImage/BackGroundImage";
import Header from "ui/Header/Header";
import WindowWrapper from "ui/WindowWrapper/WindowWrapper";
import { routes } from "routes/routes";

const SignIn: React.FC = () => {
  return (
    <WindowWrapper>
      <BackGroundImage />
      <SignInAside>
        <Header>Sign In</Header>
        <SignInFormik />
        <LinkForgetPassword text="Forgot Password?" to={routes.restorePass}/>
        <SignInFooter />
      </SignInAside>
    </WindowWrapper>
  );
};

export default SignIn;
