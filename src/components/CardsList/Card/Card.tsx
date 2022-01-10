import React from 'react';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

import styles from './card.css';

export function Card(): JSX.Element{
  return (
    <li className={styles.card}>
      <TextContent/>
      <Preview/>
      <Menu/>
      <Controls/>
    </li>
  );
}
