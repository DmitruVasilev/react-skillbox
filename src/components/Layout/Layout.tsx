import React from 'react';
import styles from './layout.css';

interface ILayout {
  children?: React.ReactNode
}

export function Layout({children}: ILayout): JSX.Element {
  return (
    <section className={styles.layout}>
      {children}
    </section>
  );
}
