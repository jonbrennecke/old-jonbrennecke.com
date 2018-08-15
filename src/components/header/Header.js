/* @flow */
import React from 'react';

// $FlowFixMe
import './Header.styles.scss';
// $FlowFixMe
import Logo from './logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="logo" dangerouslySetInnerHTML={{ __html: Logo }} />
    </header>
  );
}
