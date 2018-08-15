/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classnames from 'classnames';

// $FlowFixMe
import './Footer.scss';

type Props = {
  className?: ?string,
};

const COPYRIGHT_YEAR = moment().format('YYYY');

export default function Footer({ className }: Props) {
  return (
    <footer className={classnames('footer', className)}>
      <div className="footer-container">
        <div className="copyright-container">
          <p className="copyright-text">
            <span>Copyright {COPYRIGHT_YEAR}, </span>
            <Link to="/about" className="author-link">
              Jon Brennecke
            </Link>
            <span>, All Rights Reserved</span>
          </p>
        </div>
        <div className="footer-attribution-text">
          <span>
            MathHacks is open source on{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mathhacksco/blog"
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
      </div>
    </footer>
  );
}
