/* @flow */
import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

import Logo from '../logo/Logo';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';

// $FlowFixMe
import './Footer.scss';

type Props = {
  className?: ?string,
};

const COPYRIGHT_YEAR = moment().format('YYYY');

export default function Footer({ className }: Props) {
  return (
    <footer className={classnames('footer', className)}>
      <Background className="background" />
      {/* <div className="footer-container"> */}
      <ContentMaxWidth className="footer-container">
        <Logo />
        <div className="copyright-container">
          <p className="copyright-text">
            <span>Copyright {COPYRIGHT_YEAR}, </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:jpbrennecke@gmail.com"
              className="author-link"
            >
              Jon Brennecke
            </a>
            <span>, All Rights Reserved</span>
          </p>
        </div>
        <div className="footer-attribution-text">
          <span>
            This site is open source on{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jonbrennecke/jonbrennecke.com"
            >
              Github
            </a>
          </span>
          <span className="seperator">|</span>
          <span>
            Made with <em>❤</em> by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:jpbrennecke@gmail.com"
            >
              Jon Brennecke
            </a>
          </span>
        </div>
      </ContentMaxWidth>
    </footer>
  );
}

function Background({ className }: Props) {
  return (
    <svg
      width="1440px"
      height="583px"
      viewBox="0 0 1440 583"
      version="1.1"
      className={className}
    >
      <defs>
        <linearGradient
          x1="-1.11022302e-14%"
          y1="50%"
          x2="100%"
          y2="50%"
          id="linearGradient-1"
        >
          <stop stopColor="#F1F3FA" stopOpacity="0" offset="0%" />
          <stop stopColor="#DFE3F2" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Landing-Page" transform="translate(0.000000, -3849.000000)">
          <g id="Footer" transform="translate(-237.000000, 3847.000000)">
            <g id="Group-12">
              <path
                d="M191,0 L1896,90.1465782 L1896,869.9375 L526.490317,963.084866 C510.417346,964.178071 495.674166,954.158595 490.773777,938.811878 L191,0 Z"
                id="Rectangle-2"
                fill="url(#linearGradient-1)"
              />
              <path
                d="M0,150 L1705,240.146578 L1705,1019.9375 L335.490317,1113.08487 C319.417346,1114.17807 304.674166,1104.15859 299.773777,1088.81188 L0,150 Z"
                id="Rectangle-2"
                fill="#556089"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
