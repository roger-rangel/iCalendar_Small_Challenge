/* eslint-disable no-unused-vars */
//REACT ROUTER
import { Link } from "react-router-dom";

//HOOKS
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { useState } from "react";

//ICONS , PICS , STYLES
import styles from "./MyProfile.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ReactComponent as Avatar } from "../../../assets/pics/avatar.svg";

const MyProfile = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={styles.avatar_container}
      onClick={() => {
        setisProfileOpen(!isProfileOpen);
      }}
    >
      {/* AVATAR ICON */}
      <div className={styles.icon_avatar_container}>
        <Avatar />
      </div>

      {/* NAME */}
      <div className={styles.name}>
        <span>Admin</span>
        <MdKeyboardArrowDown />
      </div>

      {/* AVATAR/SETTINGS SUBMENU */}
      <div
        className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ""}`}
      >
        <div className={styles.info}>
          <span className={styles.name}>Admin</span>
          <span className={styles.role}>Administrator</span>
        </div>
        <div className={styles.settings}>
          <Link to="/">Settings</Link>
          <Link to="/">Sign Out</Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
