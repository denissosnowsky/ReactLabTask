import styled from "styled-components";

const WindowWrapperStyle = styled.main`
  display: flex;
  height: 100vh;
  background-color: #f9faff;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

interface WindowWrapperPropsType {
  className?: string | undefined;
}

const WindowWrapper: React.FC<WindowWrapperPropsType> = ({
  children,
  className,
}) => {
  return (
    <WindowWrapperStyle className={className && className}>
      {children}
    </WindowWrapperStyle>
  );
};

export default WindowWrapper;
