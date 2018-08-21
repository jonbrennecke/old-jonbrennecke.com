/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './ContactCallToActionButton.scss';

type Props = {
  className?: ?string,
  dark?: boolean,
};

export default function ContactCallToActionButton({ className, dark }: Props) {
  return (
    <a
      className={classnames(
        'contact-c2a-button',
        className,
        dark ? 'dark' : 'light'
      )}
      href="mailto:jpbrennecke@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact
    </a>
  );
}
