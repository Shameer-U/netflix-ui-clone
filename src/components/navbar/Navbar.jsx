import {ArrowDropDown, Search, Notifications, Close, DensityMedium }  from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [className, setClassName] = useState("disabled");
  const { height, width } = useWindowDimensions();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const manageLinks = () => {
    setClassName((prevState) => { return prevState == "active" ? "disabled" : "active"})
  }

  if (className == 'active' && width > 768) {
    setClassName("disabled");
  }

  return (
    <>
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="logoContainer">
          <Link to={`/`}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="links">
          <div className="left">
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <Search className="icon" />
            <span>KID</span>
            <Notifications className="icon" />
            <img
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span className="loginLink"><Link to={`/login`}>Login</Link></span>
              </div>
            </div>
          </div>
          <div className="clickLink" onClick={manageLinks}>
              <DensityMedium className="icon" />
          </div>
        </div>
      </div>
    </div>

    <div className={"secondaryNavbar "+className} >
      <div className="container">
        <span className="closeIcon" onClick={manageLinks}><Close className="icon" /></span>
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
        <span>Settings</span>
        <span className="loginLink"><Link to={`/login`}>Login</Link></span>
      </div>
    </div>
   </>
  );
};

export default Navbar;
