import React from 'react';

import { MenuIcon } from '../../../../icons';

import styles from './menu.css';

export function Menu(): JSX.Element {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <MenuIcon />
      </button>
    </div>
  );
}
