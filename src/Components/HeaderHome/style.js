import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  max-width: 420px;

  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin-top: 10px;
    width: 100px;
    margin-left: 10px;
    p {
      font-size: 19px;
    }
    p.first {
      color: var(--gold);
    }
    p.second {
      color: var(--prata);
    }
    p.third {
      color: var(--bronze);
    }
  }
  section {
    margin-right: 10px;
    font-size: 23px;
    color: var(--prata);
    cursor: pointer;
  }
`;
