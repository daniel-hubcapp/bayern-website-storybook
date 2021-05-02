import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, label, icon, ...props }) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <a
      className={['btn', mode].join(' ')}
      {...props}
    >
      {label}
      <span class="btn-icon">{icon}</span>
    </a>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
    /**
   * Optional icon
   */
  icon: PropTypes.string,
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
  primary: true,
  onClick: undefined,
};
