import styled from "styled-components";

const RestorePassSentAsideStyle = styled.aside`
  width: 560px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 96px;
  padding-right: 96px;
  margin-top: 264px;
  left: 0px;
  @media (max-width: 576px) {
    flex: 1;
    margin-top: 72px;
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
    background-color: #f9faff;
    border-radius: 24px 24px 0px 0px;
    padding-top: 32px;
    margin-top: -24px;
  }
`;

const RestorePassSentAside: React.FC = ({ children }) => {
  return <RestorePassSentAsideStyle>{children}</RestorePassSentAsideStyle>;
};

export default RestorePassSentAside;
