import { FieldInputProps } from "formik";
import { useState } from "react";
import styled from "styled-components";
import eye from "./assets/eye.svg";
import { InputType } from "./types/types";

interface InputWrapperProps {
  readonly width?: string;
  readonly isFocused: boolean;
  readonly isErrored: boolean;
}

const Wrapper = styled.div`
  position: relative;
  height: fit-content;
`;

const InputWrapper = styled.div<InputWrapperProps>`
  border: ${(props) =>
    props.isErrored
      ? "1px solid #FF2567"
      : props.isFocused
      ? "1px solid #7297FF"
      : "1px solid #dce0ec"};
  height: 56px;
  width: ${(props) => props.width || "100%"};
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  padding-bottom: 16px;
  position: relative;
  @media (max-width: 576px) {
    height: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
  }
`;

const InputFirstIconWrapper = styled.div`
  width: 64px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 576px) {
    width: 48px;
  }
`;
const InputFirstIcon = styled.img`
  position: relative;
  left: 56%;
  transform: translateX(-50%);
`;

const InputLastIconWrapper = styled(InputFirstIconWrapper)`
  cursor: pointer;
`;
const InputLastIcon = styled.img`
  position: relative;
  left: 44%;
  transform: translateX(-50%);
`;

const InputFieldWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  height: 100%;
  width: 100%;
  &::-moz-placeholder {
    color: #a1abc9;
  }
  &::-webkit-input-placeholder {
    color: #a1abc9;
  }
  @media (max-width: 576px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const ErrorBlock = styled.span`
  color: #f6657f;
  position: absolute;
  height: 16px;
  line-height: 16px;
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  bottom: -24px;
  left: 0px;
  display: inline-block;
  @media (max-width: 576px) {
    position: relative;
    bottom: 0px;
    margin-top: 16px
  }
`;

interface InputForFormPropsType {
  style?: React.CSSProperties | undefined;
  width?: string;
  type: InputType;
  placeholder: string;
  icon: string;
  iconAlt?: string;
  name: string;
  isErrored: boolean;
  formikInputFieldProps?: FieldInputProps<any>;
  className?: string | undefined;
}

const InputForForm: React.FC<InputForFormPropsType> = ({
  style,
  width,
  type,
  placeholder,
  icon,
  name,
  iconAlt,
  isErrored,
  formikInputFieldProps,
  className,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isShowedPass, SetIsShowedPass] = useState<boolean>(false);

  const handleIsShowedPass = () => {
    SetIsShowedPass((isShowedPass) => !isShowedPass);
  };

  return (
    <Wrapper>
      <InputWrapper
        width={width && width}
        isFocused={isFocused}
        isErrored={isErrored}
        className={className && className}
      >
        <InputFirstIconWrapper>
          <InputFirstIcon alt={iconAlt || "inputImage"} src={icon} />
        </InputFirstIconWrapper>
        <InputFieldWrapper>
          <InputField
            {...formikInputFieldProps}
            placeholder={placeholder}
            type={isShowedPass ? "text" : type}
            style={style}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            name={name}
          />
        </InputFieldWrapper>
        {type === "password" && (
          <InputLastIconWrapper onClick={handleIsShowedPass}>
            <InputLastIcon alt="eye" src={eye} />
          </InputLastIconWrapper>
        )}
      </InputWrapper>
      {isErrored &&
        (type === "email" ? (
          <ErrorBlock>Email not found.Please check the spelling</ErrorBlock>
        ) : type === "password" ? (
          <ErrorBlock>Password contain unsupported characters</ErrorBlock>
        ) : null)}
    </Wrapper>
  );
};

export default InputForForm;
