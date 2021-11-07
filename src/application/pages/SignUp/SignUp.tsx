import SignUpAside from "../../../domain/signUp/SignUpAside";
import SignUpFooter from "../../../domain/signUp/SignUpFooter";
import SignUpFormik from "../../../domain/signUp/SignUpFormik";
import BackGroundImage from "../../../ui/BackGroundImage/BackGroundImage";
import Header from "../../../ui/Header/Header";
import WindowWrapper from "../../../ui/WindowWrapper/WindowWrapper";

const SignUp: React.FC = () => {
  return (
    <WindowWrapper>
      <BackGroundImage />
      <SignUpAside>
          <Header>Sign Up</Header>
          <SignUpFormik />
          <SignUpFooter />
      </SignUpAside>
    </WindowWrapper>
  );
};

export default SignUp;
