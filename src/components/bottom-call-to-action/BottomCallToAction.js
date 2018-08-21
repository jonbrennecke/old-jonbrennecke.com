/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContactCallToActionButton from '../contact-call-to-action-button/ContactCallToActionButton';

// $FlowFixMe
import './BottomCallToAction.scss';

type Props = {
  className?: ?string,
};

export default function BottomCallToAction({ className }: Props) {
  return (
    <section className={classnames('bottom-c2a', className)}>
      <h1>Need a larger team?</h1>
      <p>Let me help you put together the right team for your next project.</p>
      <ContactCallToActionButton dark />
    </section>
  );
}
