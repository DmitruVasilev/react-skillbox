import React from 'react';
import styles from './textContent.scss';

export function TextContent(): JSX.Element {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src='https://cdn.dribbble.com/users/56953/screenshots/16005900/media/86a13158c2d968fa82f93110c8cae759.jpg?compress=1&resize=80x60'
            alt='avatar'
          />
          <a href='#qwe' className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.createdAtLabel}>опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href='#qwe2' className={styles.postLink}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut, corporis dicta dolorem pariatur ut.
        </a>
      </h2>
    </div>
  );
}
