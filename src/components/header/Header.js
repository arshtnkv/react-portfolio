import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Anton</em></strong> <br />
          a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://drive.google.com/file/d/1il5BMzsOEKCHd36fhD6dp7ExV0o_sps_/view?usp=share_link" target="blank" className="btn">Download CV</a>
      </div>
    </header>
  );
}

export default Header;