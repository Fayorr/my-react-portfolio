import React, {useState} from 'react'
import "../styles/Navbar.css"
import logo from "../assets/logo.png";




const Navbar = () => {

  const [nav, setNav] = useState(false);
const [toggle, setToggle] = useState(false);

 const handleClick = ()=>{
setToggle(!toggle)
 } 
  const addShadow = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", addShadow);

  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <div>
          <a href="#">
            <img src={logo} alt="" className="logo" />
          </a>
          <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item"><a href='#articles' className="nav-links" target='_blank'>Home</a></li>

            <li className="nav-item"><a href='#chats' className="nav-links" target='_blank'>About</a></li>

            <li className="nav-item"><a href='#awards' className="nav-links" target='_blank'>Products</a></li>

            <li className="nav-item"><a href='#roadmap' className="nav-links" target='_blank'>Roadmaps</a></li>
            <li className="nav-item"><a href='#contact' className="nav-links" target='_blank'>Contact</a></li>
          </ul>
         
        </div>
        <div className="menu-icon" onClick={handleClick}>
              <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;