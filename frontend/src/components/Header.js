import header from "../images/logo/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={header} alt="логотип" />
      </header>
    </>
  );
}
export default Header;
