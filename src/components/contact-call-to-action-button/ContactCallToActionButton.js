/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './ContactCallToActionButton.scss';

type Props = {
  className?: ?string,
};

export default function ContactCallToActionButton({ className }: Props) {
  return (
    <a
      className={classnames('contact-c2a-button', className)}
      href="mailto:jpbrennecke@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact
    </a>
  );
}
