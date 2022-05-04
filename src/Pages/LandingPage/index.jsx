import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLandingPage } from "./style";

const LandingPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigation("/home");
    }, 3000);
  }, []);

  return <ContainerLandingPage></ContainerLandingPage>;
};
export default LandingPage;
