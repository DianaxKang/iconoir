import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const BinFull = forwardRef(
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
            d="M16 2H10.5L9.81818 3.5M16 2L20.5664 3.82655C20.8214 3.92855 20.9746 4.19069 20.9383 4.46293L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939C3.01449 4.10866 3.07751 3.92249 3.20966 3.79034L5 2L9.81818 3.5M16 2L14 7M9 6.5L9.81818 3.5"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

BinFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BinFull.displayName = 'BinFull';

export default BinFull;