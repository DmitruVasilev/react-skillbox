import React from 'react';
import styles from './layout.scss';

interface ILayout {
  children?: React.ReactNode
}

export function Layout({children}: ILayout): JSX.Element {
  return (
    <section className={styles.p_class}>
      {children}
    </section>
  );
}
