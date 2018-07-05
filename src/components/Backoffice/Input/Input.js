import React from 'react';
import { Input as CoreInput } from '../../Core/Input';
import styles from './Input.scss';
import { mapPropsToCSSStates } from '../../../stylscss';

export const Input = props => (
  <CoreInput
    {...props}
    {...mapPropsToCSSStates(props, ['size'])}
    styles={styles}
  />
);
