import { forwardRef, MutableRefObject, Ref } from "react";
import styled from "styled-components";

const MainTextStyle = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #202225;
  line-height: 21px;
`;

interface MainTextPropsType {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  ref?: Ref<HTMLSpanElement>;
}

const MainText: React.FC<MainTextPropsType> = forwardRef(
  ({ children, style, className }, ref: Ref<HTMLSpanElement>) => {
    return (
      <MainTextStyle style={style} className={className && className} ref={ref}>
        {children}
      </MainTextStyle>
    );
  }
);

export default MainText;
