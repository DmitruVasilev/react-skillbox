import React from 'react';
import styles from './content.scss';

interface IContentProps {
  children?: React.ReactNode
}

export function Content({ children }: IContentProps): JSX.Element {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}