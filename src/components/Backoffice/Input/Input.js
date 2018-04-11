import React from 'react';
import {Input as CoreInput} from '../../Core/Input';
import styles from './Input.scss';

const mapPropsToCSSStates = ({size}) => {
  return {
    [`data-size-${size}`]: true
  };
};

export const Input = (props) => <CoreInput {...props} {...mapPropsToCSSStates(props)} styles={styles}/>;
