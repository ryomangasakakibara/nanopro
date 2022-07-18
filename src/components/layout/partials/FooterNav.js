import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Lépjen Kapcsolatba Velünk</Link>
        </li>
        <li>
          <Link to="#0">Rólunk</Link>
        </li>
        <li>
          <Link to="#0">Gyakran Ismételt Kérdések</Link>
        </li>
        <li>
          <Link to="#0">Támogass Minket</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;