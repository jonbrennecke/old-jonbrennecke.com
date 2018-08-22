/* @flow */
import React from 'react';
import classnames from 'classnames';

import Logo from '../logo/Logo';
import MacArtwork from '../artwork/mac/MacArtwork';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import ContactCallToActionButton from '../contact-call-to-action-button/ContactCallToActionButton';

// $FlowFixMe
import './Header.scss';

type Props = {
  className?: ?string,
};

export default function Header({ className }: Props) {
  return (
    <header className={classnames('header', className)}>
      <Background className="background"/>
      <ContentMaxWidth className="logo-container">
        <Logo />
        <div className="hero">
          <div className="hero-left-side">
            <h1>Proven Expertise in Mobile Apps</h1>
            <p>
              <span>Hi, I’m Jon. I create apps, websites and services for startups of
              all shapes and sizes.</span>
              <span>Let’s talk!</span>
            </p>
            <ContactCallToActionButton className="contact-button" />
          </div>
          <div className="hero-right-side">
            <MacArtwork />
          </div>
        </div>
      </ContentMaxWidth>
    </header>
  );
}

function Background({ className }: Props) {
  return (
    <svg width="1440px" height="1199px" viewBox="0 0 1440 1199" version="1.1" className={className}>
        <defs>
            <linearGradient x1="22.2492567%" y1="58.55104%" x2="98.2619844%" y2="1.3088315%" id="linearGradient-1">
                <stop stopColor="#8E99BD" stopOpacity="0" offset="0%"></stop>
                <stop stopColor="#556089" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="22.9339776%" id="linearGradient-2">
                <stop stopColor="#8E99BD" offset="0%"></stop>
                <stop stopColor="#556089" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Landing-Page">
                <g id="Group-13" transform="translate(-521.000000, -410.000000)">
                    <path d="M256,653.659034 L1961,472 L1961,1128.14994 L598.108576,1607.00999 C579.87155,1613.41768 559.893062,1603.82811 553.485373,1585.59108 C553.373574,1585.27289 553.266379,1584.95309 553.163823,1584.6318 L256,653.659034 Z" id="Rectangle-2" fill="#556089" opacity="0.100167411"></path>
                    <path d="M495,1443.7382 L1961,924 L1961,1127.81071 L595.985043,1606.96315 C578.267656,1613.18237 558.799367,1604.31246 551.866012,1586.86215 L495,1443.7382 Z" id="Rectangle-2" fill="url(#linearGradient-1)" opacity="0.100167411"></path>
                    <path d="M339,270 L2044,360.146578 L2044,744.320386 L681.102556,1223.01046 C662.864809,1229.4161 642.887399,1219.82428 636.481761,1201.58654 C636.370834,1201.27071 636.264444,1200.95331 636.162623,1200.63444 L339,270 Z" id="Rectangle-2" fill="#556089"></path>
                    <path d="M0,453.612765 L1343.11714,0 L1549,385.638465 L185.845056,864.994357 C167.729248,871.364813 147.863644,861.948979 141.32537,843.89306 L0,453.612765 Z" id="Rectangle-2" fill="url(#linearGradient-2)" opacity="0.502511161"></path>
                </g>
            </g>
        </g>
    </svg>
  );
}

