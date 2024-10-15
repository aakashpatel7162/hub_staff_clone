import "./layout.style.css";
import data from "../constant/data";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";
export default function Header() {
  const { navItems } = data;
  const navigate = useNavigate();

  const handleScroll = (scrollTo) => {
    navigate(scrollTo);

    let scrollHeight = 0;

    if (scrollTo === paths.home) {
      scrollHeight = 0;
    }
    if (scrollTo === paths.products) {
      scrollHeight = 1000;
    } else if (scrollTo === paths.solutions) {
      scrollHeight = 1550;
    } else if (scrollTo === paths.resources) {
      scrollHeight = 25000;
      console.log(scrollHeight, scrollTo === paths.resources);
    } else {
      scrollHeight = 0;
    }
    console.log(scrollHeight);

    setTimeout(() => {
      window.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }, 100);
  };
  return (
    <div className="header">
      <div className="left-side">
        <div className="logo">
          <img src="your-logo-url.png" alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} onClick={() => handleScroll(item.path)}>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <div className="text-items">
          <span>{navItems[4].explore.price}</span>
          <span>{navItems[4].explore.demo}</span>
        </div>
        <div className="buttons">
          <button className="demo-button">{navItems[4].explore.trial}</button>
          <button
            className="signin-button"
            onClick={() => navigate(paths.login)}
          >
            {navItems[4].explore.signIn}
          </button>
        </div>
      </div>
    </div>
  );
}
