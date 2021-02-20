import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../../config';


export default function SideBar({ sections = [] }) {
  // react
  const [headerOpen, toggleHeader] = useState(false);

  return (
    <div className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={config.authorName}
        onMenuClick={() => toggleHeader(!headerOpen)}
      />
      <div id="header">
        <div className="top">
          <Header
            title={config.authorName}
            heading={config.heading}
          />
          <Nav sections={sections} 
            onSectionClick={() => toggleHeader(false)}/>
        </div>
        <Footer socialLinks={config.socialLinks} />
      </div>

      {/* <section id="header">
        <Header
          title={config.authorName}
          heading={config.heading}
        />
        <Nav sections={sections} />
        <Footer socialLinks={config.socialLinks} />
      </section> */}
    </div>
  );
}
