import React from 'react';
import styles from './preview.scss';

export function Preview(): JSX.Element {
  return (
    <div className={styles.preview}>
      <img
        className={styles.image}
        src="https://cdn.dribbble.com/users/778990/screenshots/16094069/media/eb6599e83cc4df175a6b16d274b31b04.jpg?compress=1&resize=800x600"
        alt='Preview'
      />
    </div>
  );
}
