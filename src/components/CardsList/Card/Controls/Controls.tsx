import React from 'react';
import { ArrowIcon, CommentIcon, SaveIcon, ShareIcon } from '../../../../icons';
import styles from './controls.scss';

export function Controls(): JSX.Element {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
          <ArrowIcon />
        </button>
        <span className={styles.karmaValue}>234</span>
        <button className={styles.down}>
          <ArrowIcon className={styles.down} />
        </button>
      </div>
      <button className={styles.commentsButton}>
        <CommentIcon style={{maxWidth: "20px", maxHeight: "20px"}} />
        <span className={styles.commentsNumber}>23</span>
      </button>
      <div className={styles.mobileButtons}>
        <button>
          <ShareIcon
            style={{maxWidth: "20px", maxHeight: "20px", marginRight: '10px'}}
          />
        </button>
        <button>
          <SaveIcon style={{maxWidth: "20px", maxHeight: "20px"}} />
        </button>
      </div>
    </div>
  );
}
