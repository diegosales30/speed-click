import styled from "styled-components";

export const ContainerCounter = styled.div`
  width: 100vw;
  max-width: 420px;

  height: 400px;
  div {
    margin-top: 15px !important;
    width: 80%;
    height: 150px;

    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    p {
      font-size: 30px;
      color: var(--prata);
    }
  }
`;
