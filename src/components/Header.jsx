import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}
