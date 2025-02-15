import React from 'react';

import styles from './NotFoundBlock.module.css';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={styles.description}>
       Unfortunately, this page is not available in our system.
      </p>
    </div>
  );
};
