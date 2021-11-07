import styled from "styled-components";
import searchImg from "./assets/search.svg";

const Image = styled.img`
  margin-right: 18px;

`;

const Input = styled.input`
  height: 100%;
  width: 85px;
  margin-right: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 15px;
  color: #202225 !important;
  &::-moz-placeholder {
    color: #a1abc9;
  }
  ,
  &::-webkit-input-placeholder {
    color: #a1abc9;
  }
  @media (max-width: 840px) {
    display: none;
  }
`;

const SearchInput: React.FC = () => {
  return (
    <>
      <Image alt="search" src={searchImg} />
      <Input type="text" placeholder="Search" />
    </>
  );
};

export default SearchInput;
