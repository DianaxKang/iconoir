import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const BasketBallAlt = forwardRef(
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
            d="M21.46 15.2419C22.3628 12.6039 22.1638 9.6043 20.6602 6.99993C20.4915 6.70765 20.3102 6.42711 20.1175 6.15859M21.46 15.2419C20.7048 17.4486 19.1785 19.4024 17 20.6602M21.46 15.2419C19.2691 13.7908 17.5396 12.1089 16.2928 10.2334M17 20.6602C14.8214 21.918 12.3663 22.2629 10.0776 21.8136M17 20.6602L12.4979 12.8624M10.0776 21.8136C7.34155 21.2764 4.84334 19.6043 3.33971 16.9999C3.17096 16.7076 3.01864 16.4104 2.88247 16.1092M10.0776 21.8136C9.91323 19.1401 9.30161 16.7618 8.26537 14.7181M2.88247 16.1092C0.790312 11.482 2.50932 5.93235 6.99996 3.33968M2.88247 16.1092C4.84506 15.7357 6.62831 15.2784 8.26537 14.7181M6.99996 3.33968C9.17852 2.08188 11.6336 1.73699 13.9223 2.1863M6.99996 3.33968L12.4979 12.8624M13.9223 2.1863C16.3513 2.66315 18.5928 4.03454 20.1175 6.15859M13.9223 2.1863C13.8973 5.13268 14.7022 7.84066 16.2928 10.2334M20.1175 6.15859C18.9172 7.71698 17.6587 9.06581 16.2928 10.2334M16.2928 10.2334C15.1177 11.2379 13.8631 12.1082 12.4979 12.8624M2.53992 8.75794C5.06536 10.1875 6.98799 12.1987 8.26537 14.7181M8.26537 14.7181C9.7948 14.1946 11.1966 13.5812 12.4979 12.8624"
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

BasketBallAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BasketBallAlt.displayName = 'BasketBallAlt';

export default BasketBallAlt;