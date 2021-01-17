import React from 'react';

import styles from './Page.module.scss';

type props = {
  children: React.node;
  title?: string;
};

const Page = ({ children, title }: props): React.FC => (
  <>
    <div className={styles.header}>
      <div className={styles.headerTitle}>Thaumatorium</div>
      <p>A place of magic, wonders and mysteries.</p>
    </div>
    <div className={styles.pageTitle}>{title}</div>
    <div className={styles.content}>
      {children}
    </div>
  </>
);

export default Page;
