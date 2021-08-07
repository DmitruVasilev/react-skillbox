import React from 'react';
import { Card } from './Card';

import styles from './cardsList.scss';

export function CardsList(): JSX.Element {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}

