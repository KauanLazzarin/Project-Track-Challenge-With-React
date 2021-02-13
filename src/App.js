import logo from './assets/logo.svg';
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import MenuLink from './components/MenuLink';
import Content from './components/Content';

export default function App() {
  return (
    <div>
      <Navigation>
        <img src={logo} alt=""/>
        <Menu>
          <MenuLink href="#">PRODUCT</MenuLink>
          <MenuLink href="#">FEATURES</MenuLink>
          <MenuLink href="#">PRICING</MenuLink>
        </Menu>
      </Navigation>

      <Content />
    </div>
  );
}