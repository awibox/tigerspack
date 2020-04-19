import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const Input = (props) => {
  const {
    className,
    placeholder,
    error,
    valid,
    value,
    ...otherProps
  } = props;
  // Config
  const inputBorderWeight = 1;
  // Hooks
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  // Different states
  const labelColor = focus ? colors.primary.color : '#cfd1d7';
  const labelError = error ? colors.danger.color : labelColor;
  const inputError = error ? `${inputBorderWeight}px solid ${colors.danger.color}` : `${inputBorderWeight}px solid ${focus ? colors.primary.color : '#cfd1d7'}`;
  const activeLabel = inputValue.length === 0 && !focus;
  // Styles
  const styles = {
    input: {
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: '7px',
      border: valid ? `${inputBorderWeight}px solid ${colors.success.color}` : inputError,
      position: 'relative',
      marginBottom: '15px',
      transition: 'all .4s ease',
    },
    label: {
      position: 'absolute',
      background: activeLabel ? 'transparent' : '#fff',
      top: activeLabel ? '0' : `-${inputBorderWeight}px`,
      left: '15px',
      color: '#fff',
      padding: '0 3px',
      transition: 'all .4s ease, top 0s',
      zIndex: 1,
    },
    labelText: {
      marginTop: activeLabel ? '17px' : '-6px',
      fontSize: activeLabel ? '16px' : '12px',
      height: activeLabel ? '16px' : '12px',
      lineHeight: activeLabel ? '16px' : '12px',
      color: valid ? colors.success.color : labelError,
      fontWeight: '500',
      transition: 'all .4s ease',
    },
    control: {
      background: 'none',
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      width: '100%',
      padding: '17px 14px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 2,
    },
  };
  return (
    <div css={styles.input} className={className}>
      { placeholder ? <div css={styles.label}><div css={styles.labelText}>{placeholder}</div></div> : '' }
      <input css={styles.control}
             autoComplete="off"
             value={inputValue}
             onChange={(event) => setInputValue(event.target.value)}
             onFocus={() => setFocus(true)}
             onBlur={() => setFocus(false)} {...otherProps} />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  valid: PropTypes.bool,
  value: PropTypes.string,
};

export default Input;
