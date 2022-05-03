import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const NestedComponent = (props) => (
  <div>
    <p>NestedComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default NestedComponent;
