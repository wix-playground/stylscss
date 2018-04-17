import React from 'react';
import cssModules from 'react-css-modules';
import styles from './Input.scss';
import PropTypes from 'prop-types';
import {getDataAttributes, getCssStates} from '../../../stylscss';

const RawInput = props => {
  const {styles, ...rest} = props;
  const dataAttributes = getDataAttributes(props);
  const cssStates = getCssStates({disabled: props.disabled});

  return (
    <div className={styles.root} {...dataAttributes} {...cssStates}>
      <input {...rest} className={styles.nativeInput}/>
    </div>
  );
};

RawInput.propTypes = {
  styles: PropTypes.object,
  disabled: PropTypes.bool
};

export const Input = cssModules(RawInput, styles);
