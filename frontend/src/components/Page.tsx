import React from 'react';

import styles from './Page.module.scss';

type props = {
  children: React.node;
};

const Page = ({ children }: props): React.FC => (
  <>
    <div className={styles.header}>
      <div className={styles.title}>Thaumatorium</div>
      <p>A place of magic, wonders and mysteries.</p>
    </div>
    {children}
  </>
);

export default Page;
