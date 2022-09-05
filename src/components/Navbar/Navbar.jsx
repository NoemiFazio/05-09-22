import "./index.scss";
import logo from "../../images/fakeflix.png";

const Navbar = ({ movieEntity }) => {
  const scrollTopRated = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: movieEntity.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <img src={logo} alt="fakeflix" />
        </li>
        <li>
          <a href="/" onClick={scrollTopRated}>
            Vai a movie entity
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
