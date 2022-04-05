import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Game Library</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/games' className={(navData) => navData.isActive ? classes.active : '' } >
              My Games
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-game' className={(navData) => navData.isActive ? classes.active : '' }>
              Add a game
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
