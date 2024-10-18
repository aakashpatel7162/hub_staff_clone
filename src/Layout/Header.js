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
      scrollHeight = 700;
    } else if (scrollTo === paths.solutions) {
      scrollHeight = 1280;
    } else if (scrollTo === paths.resources) {
      scrollHeight = 1800;
      console.log(scrollHeight, scrollTo === paths.resources);
    }
    else if (scrollTo === paths.contactus) {
      scrollHeight = 2050;
      console.log(scrollHeight, scrollTo === paths.resources);
    } else {
      scrollHeight = 0;
    }
    console.log(scrollHeight);

    setTimeout(() => {
      window.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }, 100);
  };
  const handleLogout=()=>{
    localStorage.clear()
    navigate(paths.login)
  }
  return (
    <div className="header">
      <div className="left-side">
        <div className="logo">
          <img src="https://tse4.mm.bing.net/th?id=OIP.o0PTybSwsfVZU_5J0H-2TAHaBl&pid=Api&P=0&h=180" alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} onClick={() => handleScroll(item.path)} style={{cursor:"pointer"}}>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <div className="text-items">
          <button  className="demo-button" >{navItems[5].explore.price}</button>
          <button  onClick={() => navigate(paths.userdata)}   className="demo-button">{navItems[5].explore.demo}</button>
          <button className="demo-button" >{navItems[5].explore.trial}</button>
          <button className="demo-button" onClick={handleLogout}>Logout</button>

        </div>
        
      </div>
    </div>
  );
}
