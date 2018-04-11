import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Input.scss';

const getDataStates = props => {
  return Object.entries(props)
    .filter(([key]) => key.startsWith('data-'))
    .reduce((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
};

const getMoreDataStates = props => {
  return Object.entries(props)
    .reduce((acc, [key, val]) => {
      acc[`data-${key}`] = val;
      return acc;
    }, {});
};

const RawInput = props => {
  const {styles, ...rest} = props;
  const dataStates = getDataStates(props);
  const moreDataStates = getMoreDataStates({disabled: props.disabled});

  return (
    <div className={styles.root} {...dataStates} {...moreDataStates}>
      <input {...rest} className={styles.nativeInput}/>
    </div>
  );
};

export const Input = CSSModules(RawInput, styles);
