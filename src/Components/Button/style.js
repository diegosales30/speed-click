import styled from "styled-components";

export const ButtonBox = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  div {
    width: 80%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 50px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    background-color: #aad450;
    border-radius: 10px;
    color: #1c1c1c;
    cursor: pointer;
  }
`;
