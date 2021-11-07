import styled from "styled-components";
import { To } from "../../../node_modules/react-router-dom";
import { NavLinkWithoutTextDecor } from "../NavLinkWithoutTextDecor/NavLinkWithoutTextDecor";

interface LinkPropsType {
  text: string;
  onClick?: (arg: any) => void;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  to: To;
}

const LinkStyle = styled.u`
  height: 24px;
  line-height: 24px;
  font-size: 15px;
  font-weight: 600;
  color: #7297ff;
  cursor: pointer;
`;

const Link: React.FC<LinkPropsType> = ({
  text,
  onClick,
  style,
  className,
  to,
}) => {
  return (
    <LinkStyle
      onClick={onClick && onClick}
      style={style}
      className={className && className}
    >
      <NavLinkWithoutTextDecor to={to}>{text}</NavLinkWithoutTextDecor>
    </LinkStyle>
  );
};

export default Link;
