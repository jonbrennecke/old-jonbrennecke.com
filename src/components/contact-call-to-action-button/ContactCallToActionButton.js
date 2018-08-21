/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './ContactCallToActionButton.scss';

type Props = {
  className?: ?string,
  // TODO: onClick
};

export default function ContactCallToActionButton({ className }: Props) {
  return (
    <button className={classnames('contact-c2a-button', className)}>
      Contact
    </button>
  );
}
