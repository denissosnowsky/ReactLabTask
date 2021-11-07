import styled from "styled-components";
import bgImage from "./assets/bg.png";
import tabBgImage from "./assets/bgTab.png";

const BackGroundImageStyle = styled.section`
  flex: 1;
  height: 100%;
  background: center / cover no-repeat url(${bgImage});
  @media (max-width: 768px) {
    background: left / cover no-repeat url(${tabBgImage});
  }
  @media (max-width: 576px) {
    background: top / cover no-repeat url(${bgImage});
    width: 100%;
    flex: none;
    height: 96px;
  }
`;

const BackGroundImage: React.FC = () => {
  return <BackGroundImageStyle></BackGroundImageStyle>;
};

export default BackGroundImage;
