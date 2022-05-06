//STYLES
import styles from "./RightNavbar.module.scss";

//HOOKS
import { useContext } from "react";

//CONTEXT
import NavContext from "../../Context/NavContext";

//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";

//Submenus in RightNavbar
import MyProfile from "./Submenus/MyProfile";
import Support from "./Submenus/Support";
import Notifications from "./Submenus/Notifications";
import Search from "./Submenus/Search";

// LINK
import { Link } from "react-router-dom";

//ICONS
import {
  MdAddBox
} from "react-icons/md";

const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div className={styles.container}>
      {/* BURGER */}
      <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
        }}
      >
        <MdOutlineMenu />
      </div>

      {/* ADD NEW BUG */}
      <div >
        <Link to='/NewEvent' className={styles.add_new_event}><MdAddBox size={35} style={{ fill: 'rgb(85, 79, 232)' }} /></Link>
      </div>
      
      {/* ACTIONS */}
      <div className={styles.actions}>
        <Search />
        <Notifications />
        <Support />
      </div>

      {/* My Profile */}
      <MyProfile />
    </div>
  );
};

export default RightNavbar;
