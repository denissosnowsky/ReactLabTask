import styled from "styled-components";
import logo from "./assets/logo.png";

const LogoStyle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo: React.FC = () => {
  return (
    <LogoStyle>
      <img alt="logo" src={logo} />
    </LogoStyle>
  );
};

export default Logo;
