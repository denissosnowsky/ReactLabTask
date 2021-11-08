import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const SettingsButtonWrapper = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  border-radius: 6px;
`;

const CircleElement = styled.div`
  border-radius: 50%;
  background-color: #dce0ec;
  border: 2px solid #dce0ec;
`;

const SettingsButtonOptionsWrapper = styled.div`
  position: absolute;
  height: fit-content;
  width: 272px;
  border-radius: 8px;
  background-color: #fff;
  top: 100%;
  right: 0px;
  padding: 4px;
  z-index: 2;
  box-shadow: 0px 0px 20px 0px #eee;
`;

const SettingsButtonOption = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #202225;
  font-size: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  &:last-of-type {
    color: #ff2567;
  }
  &:hover {
    background: #f9faff;
  }
  cursor: pointer;
`;

interface SettingsButtonPropsType {
  data: Array<string>;
}

const SettingsButton: React.FC<SettingsButtonPropsType> = ({ data }) => {
  const [isOpenSelector, setIsOpenSelector] = useState<boolean>(false);

  const handleOpenSelector = () => {
    setIsOpenSelector((isOpenSelector) => !isOpenSelector);
  };

  return (
    <Wrapper onClick={handleOpenSelector}>
      <SettingsButtonWrapper>
        <CircleElement />
        <CircleElement />
        <CircleElement />
      </SettingsButtonWrapper>
      {isOpenSelector && (
        <SettingsButtonOptionsWrapper>
          {data.map((item, i) => (
            <SettingsButtonOption key={i}>{item}</SettingsButtonOption>
          ))}
        </SettingsButtonOptionsWrapper>
      )}
    </Wrapper>
  );
};

export default SettingsButton;
