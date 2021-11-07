import { useState } from "react";
import styled from "styled-components";
import searchArrowDownIcon from "./assets/searchArrowDown.svg";
import settingTabIcon from "./assets/settingTab.svg";

const Label = styled.span`
  font-size: 15px;
  color: #a1abc9;
  font-weight: 400;
  margin-right: 16px;
  @media (max-width: 840px) {
    display: none;
  }
`;

const SelectorWrapper = styled.div`
  color: #7297ff;
  font-size: 15px;
  display: flex;
  cursor: pointer;
  @media (max-width: 840px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 33px;
`;

const IconForTab = styled.img`
  display: none;
  @media (max-width: 840px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
`;

const OptionsWrapper = styled.div`
  background: #ffffff;
  width: 160px;
  height: fit-content;
  border-radius: 8px;
  position: absolute;
  left: 0px;
  top: 100%;
  margin-top: 8px;
  padding: 4px;
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const Option = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
  &:hover {
    background: #f9faff;
  }
`;

interface SelectorPropsTypes {
  labelName: string;
  options: Array<string>;
}

const Selector: React.FC<SelectorPropsTypes> = ({ labelName, options }) => {
  const [chosenOption, setChosenOption] = useState<string>(
    options[0] ? options[0] : ""
  );
  const [isOpenSelector, setIsOpenSelector] = useState<boolean>(false);

  const handleOpenSelector = () => {
    setIsOpenSelector((isOpenSelector) => !isOpenSelector);
  };

  const handleChosenOption = (option: string) => {
    setChosenOption(option);
  };

  return (
    <Wrapper onClick={handleOpenSelector}>
      <Label>{`${labelName}:`}</Label>
      <SelectorWrapper>
        <span>{chosenOption}</span>
        <IconWrapper>
          <img alt="arrow" src={searchArrowDownIcon} />
        </IconWrapper>
      </SelectorWrapper>
      <IconForTab alt="search" src={settingTabIcon} />
      {isOpenSelector && (
        <OptionsWrapper>
          {options.map((item, i) => (
            <Option onClick={() => handleChosenOption(item)} key={i}>
              {item}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </Wrapper>
  );
};

export default Selector;
