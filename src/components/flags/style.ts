import styled from "styled-components";

const FlagFront = styled.span`
  background-color: #1A3846;
  border: 2px solid #285676;
  padding: 10px;
  border-radius: 7px;

  color: #17A2DE;

  width: 175px;
  height: 28px;

  justify-content: center;
  display: flex;
  align-items: center;
`;

const FlagBack = styled.span`
  background-color: #162825;
  border: 2px solid #3E6E66;
  padding: 10px;
  border-radius: 7px;

  width: 175px;
  height: 28px;

  color: #10BB83;

  justify-content: center;
  display: flex;
  align-items: center;
`;



export {
    FlagFront,
    FlagBack
};
