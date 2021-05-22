import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const FlashOff = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49902 3H13.4991C13.6266 3 13.7532 3.0235 13.8737 3.06956C14.4756 3.29947 14.7958 4.02807 14.5889 4.69693L13.0999 8.80233L15.8465 8.80235C16.0497 8.80235 16.2493 8.86206 16.4251 8.97543C16.9755 9.33051 17.1627 10.1142 16.8432 10.7259C16.7741 10.8617 16.6008 11.1694 16.3538 11.5983M7.58439 7.87575L7.27924 11.5983C7.21591 12.3021 7.67797 12.9296 8.31129 13C8.36853 13.0053 8.36853 13.0053 8.42596 13.0064L10.9986 13L10.5479 20.6831C10.5357 20.8921 10.8117 20.9772 10.9189 20.7974C11.5956 19.6617 12.9815 17.3334 14.2464 15.193"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 4L20 20"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

FlashOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FlashOff.displayName = 'FlashOff';

export default FlashOff;