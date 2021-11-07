import React from "react";
import styled from "styled-components";
import arrow from "./assets/arrow-right.svg";
import { Property } from "../../../node_modules/csstype";

interface ButtonStyleProps {
  readonly isIcon: boolean;
  readonly variant: "primary" | "light";
  hg?: Property.Height;
  wd?: Property.Width;
  mt?: Property.MarginTop;
  mb?: Property.MarginBottom;
  mr?: Property.MarginRight;
  ml?: Property.MarginLeft;
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  background: ${(props) => (props.variant === "primary" ? "#7297FF" : "#fff")};
  border-radius: 8px;
  width: fit-content;
  min-width: 146px;
  min-height: 56px;
  padding: 16px 24px;
  text-align: left;
  color: ${(props) => (props.variant === "primary" ? "#fff" : "#7297FF")};
  font-size: 16px;
  font-weight: ${(props) => (props.variant === "primary" ? "600" : "400")};
  border: 0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isIcon ? "normal" : "center")};
  gap: 16px;
  height: ${(props) => props.hg && props.hg};
  width: ${(props) => props.wd && props.wd};
  margin-top: ${(props) => props.mt && props.mt};
  margin-bottom: ${(props) => props.mb && props.mb};
  margin-left: ${(props) => props.ml && props.ml};
  margin-right: ${(props) => props.mr && props.mr};
  cursor: pointer;
  @media (max-width: 576px) {
    min-height: 48px;
  }
`;

const IconSpan = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

interface ButtonPropsType {
  variant?: "primary" | "light";
  style?: React.CSSProperties | undefined;
  onClick?: (arg?: any) => void;
  text: string;
  icon?: string | "default";
  type?: "button" | "submit" | "reset" | undefined;
  hg?: Property.Height;
  wd?: Property.Width;
  mt?: Property.MarginTop;
  mb?: Property.MarginBottom;
  mr?: Property.MarginRight;
  ml?: Property.MarginLeft;
  className?: string | undefined;
}

const Button: React.FC<ButtonPropsType> = ({
  variant,
  text,
  style,
  onClick,
  icon,
  type,
  hg,
  wd,
  mt,
  mb,
  mr,
  ml,
  className
}) => {
  return (
    <ButtonStyle
      style={style}
      onClick={onClick && onClick}
      isIcon={Boolean(icon)}
      variant={variant || "primary"}
      type={type && type}
      hg={hg && hg}
      wd={wd && wd}
      mt={mt && mt}
      mb={mb && mb}
      ml={ml && ml}
      mr={mr && mr}
      className={className && className}
    >
      <span>{text}</span>
      {icon &&
        (icon === "default" ? (
          <IconSpan>
            <img alt="button" src={arrow}/>
          </IconSpan>
        ) : (
          <IconSpan>
            <img alt="button" src={icon} />
          </IconSpan>
        ))}
    </ButtonStyle>
  );
};

export default Button;
