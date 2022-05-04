import styled from "styled-components";
import logo from "../../assets/logo-speed.png";

export const ContainerLandingPage = styled.div`
  width: 100vw;
  max-width: 420px;
  min-width: 320px;
  height: 100vh;
  min-height: 650px;
  max-height: 970px;
  background: url(${logo}) no-repeat center, var(--primary);
  background-size: 320px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`;
