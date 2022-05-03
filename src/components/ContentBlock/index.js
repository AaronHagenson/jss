import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

import styles from './contentBlock.module.scss';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }) => (
  <React.Fragment>
    <Text tag="h2" className="display-4" field={fields.heading} />

    <div className={styles.testThing}>
      <RichText className="contentDescription" field={fields.content} />
    </div>
  </React.Fragment>
);

export default ContentBlock;
