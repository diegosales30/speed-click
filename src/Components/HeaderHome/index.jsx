import { ContainerHome } from "./style";
import { IoSettingsSharp } from "react-icons/io5";
import { RiMedalFill } from "react-icons/ri";

const HeaderHome = () => {
  return (
    <ContainerHome>
      <div>
        <p className="first">
          <RiMedalFill />
          15
        </p>
        <p className="second">
          <RiMedalFill />
          15
        </p>
        <p className="third">
          <RiMedalFill />
          15
        </p>
      </div>
      <section>
        <IoSettingsSharp />
      </section>
    </ContainerHome>
  );
};
export default HeaderHome;
