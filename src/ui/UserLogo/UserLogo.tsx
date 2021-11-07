import styled from "styled-components";
import logo from "../../assets/avatar.png";

const LogoStyle = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

interface UserLogoPropsType {
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
}

const UserLogo: React.FC<UserLogoPropsType> = ({ className, style }) => {
  return (
    <LogoStyle style={style} className={className && className}>
      <Image alt="userLogo" src={logo} />
    </LogoStyle>
  );
};

export default UserLogo;
