import Button from "../../Components/Button";
import Counter from "../../Components/Counter";
import Footer from "../../Components/Footer";
import HeaderHome from "../../Components/HeaderHome";
import { ContainerHome } from "./style";

const Home = () => {
  return (
    <ContainerHome>
      <HeaderHome />
      <Counter />
      <Button />
      <Footer />
    </ContainerHome>
  );
};
export default Home;
