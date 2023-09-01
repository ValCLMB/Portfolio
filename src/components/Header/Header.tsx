import "./Header.css";
import { Icon } from "../Icon";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5">
      <h1 className="main-title flex items-center items-top text-3xl">
        <Icon />
      </h1>
      <Nav />
    </header>
  );
};
