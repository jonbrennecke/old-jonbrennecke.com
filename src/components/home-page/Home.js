/* @flow */
import React, { Component } from 'react';

import * as GoogleAnalytics from '../../utils/GoogleAnalytics';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Services from '../services/Services';
import CaseStudy from '../case-study/CaseStudy';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';

// $FlowFixMe
import './Home.scss';

// $FlowFixMe
export default class Home extends Component<Props, {}> {
  props: Props;
  state = {};

  async componentDidMount() {
    await GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.HomePage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Home Page View',
    });
  }

  render() {
    return (
      <div className="app-container homepage">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="MathHacks"
          description="MathHacks is the modern person's destination for math writing, videos and tutorials."
          url="http://mathhacks.co"
        />
        <Header />
        <Services />
        <CaseStudy />
        {/* <BottomCallToAction/> */}
        <Footer />
      </div>
    );
  }
}
