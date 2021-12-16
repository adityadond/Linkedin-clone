import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import logo from "./Images/linkedin.png";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch} from "react-redux";
function Header() {
  
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        <div className="header__search">
          {/*Seacrh Icon*/}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
          <HeaderOption Icon ={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notification"/>
          <HeaderOption avatar={true} title='me' onClick={logoutHandler}/>
      </div>
    </div>
  );
}

export default Header;
