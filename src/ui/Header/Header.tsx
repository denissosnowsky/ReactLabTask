import styled from "styled-components";

const HeaderStyle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #202225;
  height: 32px;
  line-height: 32px;
  display: flex;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

interface HeaderPropsType {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
}

const Header: React.FC<HeaderPropsType> = ({ children, style, className }) => {
  return (
    <HeaderStyle style={style} className={className && className}>
      {children}
    </HeaderStyle>
  );
};

export default Header;
