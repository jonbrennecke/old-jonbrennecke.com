/* @flow */
import React from 'react';
import classnames from 'classnames';

import Logo from '../logo/Logo';
import MacArtwork from '../artwork/mac/MacArtwork';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';

// $FlowFixMe
import './Header.scss';

type Props = {
  className?: ?string,
};

export default function Header({
  className,
}: Props) {
  return (
    <header className={classnames('header', className)}>
      <div className="header-bg-rect-gray-1">
        <div className="header-bg-rect-gray-2"/>
      </div>
      <div className="header-bg-rect-blue-1">
        <div className="header-bg-rect-blue-2"/>
      </div>
      <ContentMaxWidth className="logo-container">
        <Logo/>
        <div className="hero">
          <div className="hero-left-side">
            <h1>Proven Expertise in Mobile Apps</h1>
            <p>Hi, I’m Jon. I create apps, websites and services for startups of all shapes and sizes. Let’s talk!</p>
          </div>
          <div className="hero-right-side">
            <MacArtwork/>
          </div>
        </div>
      </ContentMaxWidth>
    </header>
  );
}
