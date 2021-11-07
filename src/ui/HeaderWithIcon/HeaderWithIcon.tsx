import styled from "styled-components";
import arrowIcon from "./assets/arrow-left.svg";
import { To } from "../../../node_modules/react-router-dom";
import { NavLinkWithoutTextDecor } from "../NavLinkWithoutTextDecor/NavLinkWithoutTextDecor";

const HeaderWithIconStyle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #202225;
  height: 32px;
  line-height: 32px;
  display: flex;
  cursor: pointer;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const IconWrapper = styled.span`
  width: 40px;
  position: relative;
`;

const Icon = styled.img`
  position: relative;
  left: 30%;
  transform: translateX(-50%);
`;

interface HeaderWithIconPropsType {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  to: To;
}

const HeaderWithIcon: React.FC<HeaderWithIconPropsType> = ({
  children,
  style,
  className,
  to,
}) => {
  return (
    <NavLinkWithoutTextDecor to={to} style={{ textDecoration: "none" }}>
      <HeaderWithIconStyle style={style} className={className && className}>
        <IconWrapper>
          <Icon alt="back" src={arrowIcon} />
        </IconWrapper>
        <span>{children}</span>
      </HeaderWithIconStyle>
    </NavLinkWithoutTextDecor>
  );
};

export default HeaderWithIcon;
