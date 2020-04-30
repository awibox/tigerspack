import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { defaultStyles } from '../../utils/defaultStyles';

const Blank = (props) => {
  const {
    align,
    border,
    children,
    indent,
    rounded,
    ...otherProps
  } = props;

  const stylesObject = {};
  const padding = props.padding || defaultStyles.indent;
  const shadow = props.shadow < 6 ? props.shadow : defaultStyles.boxShadow;
  const posNameStab = (prop) => {
    if (prop === 'top' || prop === 'left') {
      return 'flex-start';
    }
    if (prop === 'bottom' || prop === 'right') {
      return 'flex-end';
    }
    return prop;
  };

  if (align) {
    stylesObject.alignContent = posNameStab(align);
    stylesObject.alignItems = posNameStab(align);
  }

  const blankStyles = {
    background: '#fff',
    border: border ? `1px solid ${colors[border].color}` : '1px solid transparent',
    boxShadow: !border && `0 0 ${shadow}px rgba(0, 0, 0, 0.12), 0 ${shadow / 2}px ${shadow}px rgba(0, 0, 0, 0.24)`,
    boxSizing: 'border-box',
    transition: defaultStyles.animation,
    borderRadius: rounded ? `${rounded}px` : `${defaultStyles.borderRadius}px`,
    padding: `${padding}px`,
    marginBottom: `${indent}px`,
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'column',
    width: '100%',
    ...stylesObject,
  };

  return (
    <div css={blankStyles} {...otherProps}>
      {children}
    </div>
  );
};

Blank.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center']),
  border: PropTypes.string,
  children: PropTypes.any.isRequired,
  indent: PropTypes.number,
  shadow: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  rounded: PropTypes.number,
  padding: PropTypes.number,
};

Blank.defaultProps = {
  indent: 0,
};

export default Blank;
