import styled from "styled-components";

const SecondaryTextStyle = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #a1abc9;
  line-height: 21px;
`;

interface SecondaryTextPropsType {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
}

const SecondaryText: React.FC<SecondaryTextPropsType> = ({
  children,
  style,
  className,
}) => {
  return (
    <SecondaryTextStyle style={style} className={className && className}>
      {children}
    </SecondaryTextStyle>
  );
};

export default SecondaryText;
