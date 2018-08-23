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
      <div className="footer-contents-wrap">
        <ContentMaxWidth className="footer-contents">
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
      </div>
    </footer>
  );
}

function Background({ className }: Props) {
  return (
    <svg
      width="1440px"
      height="590px"
      viewBox="0 0 1440 590"
      version="1.1"
      className={className}
    >
      <defs>
        <linearGradient
          x1="-1.11022302e-14%"
          y1="50%"
          x2="86.5913673%"
          y2="50%"
          id="linearGradient-footer"
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
        <g id="Landing-Page" transform="translate(0.000000, -3842.000000)">
          <g id="Footer" transform="translate(0.000000, 3842.000000)">
            <g id="Group-12">
              <polygon
                id="Rectangle-2"
                fill="url(#linearGradient-footer)"
                points="-2.13162821e-14 0.765625 1440 91.9921875 1440 590 -1.42108547e-14 590"
              />
              <polygon
                id="Rectangle-2"
                fill="#556089"
                points="2.84217094e-14 161.90625 1440 245.804688 1440 590 4.99600361e-15 590"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
