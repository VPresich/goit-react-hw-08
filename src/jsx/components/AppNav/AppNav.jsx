import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { useState } from 'react';
import styles from './AppNav.module.css';
import clsx from 'clsx';

const AppNav = () => {
  const { isLoggedIn } = useAuth();

  const [activeLink, setActiveLink] = useState('/');
  const handleNavLinkClick = to => {
    setActiveLink(to);
  };
  const buildClassName = to => {
    return clsx(styles.link, to === activeLink && styles.active);
  };

  return (
    <nav className={styles.container}>
      <NavLink
        className={buildClassName('/')}
        to="/"
        onClick={() => handleNavLinkClick('/')}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={buildClassName('/contacts')}
          to="/contacts"
          onClick={() => handleNavLinkClick('/contacts')}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default AppNav;
