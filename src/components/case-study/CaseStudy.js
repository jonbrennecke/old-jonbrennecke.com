/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './CaseStudy.scss';

type Props = {
  className?: ?string,
};

export default function CaseStudy({ className }: Props) {
  return (
    <section className={classnames('case-study', className)}>
      <Background className="background" />
      <div className="section-title">
        <h2>Case Study</h2>
      </div>
      <div className="case-study-title">
        <h1>Laserlike</h1>
        <p>
          <span>Continuous Integration</span>
          <span>Deployment Infrastructure</span>
          <span>Automation</span>
        </p>
      </div>
      <div className="case-study-description">
        <p>
          <span><strong>Laserlike</strong> is changing the way you discover relevant, timely and engaging content for all your interests.</span>
          <span><strong>I changed the way Laserlike did deployments.</strong> Using tools like Ansible, Jenkins and Fastlane, I developed fully automated infrastructure to deploy their complex iOS and Android apps at the push of a button.</span>
        </p>
      </div>
    </section>
  );
}

function Background({ className }: Props) {
  return (
    <svg width="1440px" height="1135px" viewBox="0 0 1440 1135" version="1.1" className={className}>
      <defs>
        <linearGradient
          x1="-1.11022302e-14%"
          y1="50%"
          x2="100%"
          y2="50%"
          id="linearGradient-1"
        >
          <stop stopColor="#8E99BD" stopOpacity="0" offset="0%" />
          <stop stopColor="#556089" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        opacity="0.100167411"
      >
        <g id="Landing-Page" transform="translate(0.000000, -1662.000000)">
          <g id="Group-3" transform="translate(-243.000000, 1627.000000)">
            <path
              d="M0,214.659034 L1705,33 L1705,689.149941 L342.108576,1168.00999 C323.87155,1174.41768 303.893062,1164.82811 297.485373,1146.59108 C297.373574,1146.27289 297.266379,1145.95309 297.163823,1145.6318 L0,214.659034 Z"
              id="Rectangle-2"
              fill="#556089"
            />
            <path
              d="M319,181.659034 L2024,0 L2024,656.149941 L661.108576,1135.00999 C642.87155,1141.41768 622.893062,1131.82811 616.485373,1113.59108 C616.373574,1113.27289 616.266379,1112.95309 616.163823,1112.6318 L319,181.659034 Z"
              id="Rectangle-2"
              fill="url(#linearGradient-1)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
