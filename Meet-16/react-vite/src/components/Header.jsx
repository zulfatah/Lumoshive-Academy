
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cta-button">Get in Touch</button>
      </nav>
    </header>
  );
};

export default Header;
