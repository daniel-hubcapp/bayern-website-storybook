import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, label, ...props }) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  const icon = 'https://assets.website-files.com/6052683cbd3896747b8918aa/607c2ce918280814c7167823_add_blue_24dp.svg';
  return (
    <a
      className={['btn', mode].join(' ')}
      {...props}
    >
      {label}
    </a>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
};
