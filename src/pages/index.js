import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Carousel from './carousel';
import pic8 from '../assets/images/who-are-we.jpg';
import Scroll from '../components/Scroll';

import logo from '../assets/images/client-logo/image.png';
import main_logo from '../assets/images/main_logo.png';

const sections = [
  { id: 'top', name: 'HOME' },
  { id: 'about', name: 'WHO ARE WE'},
  { id: 'portfolio', name: 'OUR SERVICES'},
  { id: 'client', name: 'OUR CLIENTS'},
  { id: 'contact', name: 'CONTACT'},
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <img src={main_logo} style={{width:"70%"}} alt=""></img>
            <h2 className="alt">
              Delivering <strong> Quality Services</strong>
              <br />
              to Kiwis Homes and Businesses
            </h2>
            <p>Interested? Click Me Below!!</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#contact" className="button">
                Enquire NOW
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2 style={{color: '#00142E'}}>WHO ARE<strong style={{color: "#227C9D"}}> WE </strong></h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>
          <p style={{color: '#00142E'}}> 
          Clearvision prides itself on consistently delivering quality services to the homes and 
          business of many Kiwis in New Zealand. Our teams are made up of highly experienced technicians who are 
          confident in their ability to solve issues expeditiously and maintain the satisfaction expected by our 
          customers. </p>
            
            <p style={{color: '#00142E'}}>Clearvision we consider ourselves to be a top-class provider of civil works,
          making sure that all work involved is handled by nobody but ourselves. Our business is locally owned 
          and operated which is something we consider to be part our success and image, striving to be a trustworthy 
          source of services which our customers can feel at ease with.
          </p>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>WHAT<strong> WE </strong>CAN DO FOR <strong> YOU </strong></h2>
          </header>

          <div className="row">
              <article className="item"> 
              <h4>Full Project Management of jobs</h4>
              <ul>
              <li>Design/scope to build/completetion of paperworks</li>
              </ul>
                
              </article>
              <article className="item">
              <h4>CAR applications with Council and Traffic management setups</h4>
              </article>
           
              <article className="item">
              <h4>Provision of crew and equipment for short and long term works on short notice</h4>
              </article>
              <article className="item">
                <h4>Carry out civil works</h4>
                <ul>
                  <li>Full Concrete and Asphalt Reinstatements</li>
                  <li>All Excavations</li>
                  <li>Digs and Fixes of Faults</li>
                  <li>Laying/Replacements of Ducts</li>
                  <li>Underground Horizontal Drilling</li>
                </ul>
              </article>
            </div>
          </div>
          <Carousel/>
      </section>

      <section id="client" className="five">
        <div className="container" >
          <header>
            <h2 style={{color: '#00142E'}}><strong style={{color:"#227C9D"}}> OUR </strong>CLIENTS</h2>    
            <img src={logo} alt="" style={{width:"80%"}}></img>
          </header>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>CONTACT<strong> US </strong></h2>
            <h3>Ask us anything. We'll reply as soon as possible</h3>
          </header>
          <ul className="contact">
            <h3>Address</h3>
          <span>
            13/38 Eaglehurst Road
            <br/>
            Ellerslie, Auckland 1060
            <br/>
            New Zealand
          </span>
             <h3>Email Us</h3>
           <a href="mailto:admin@clearvision.co.nz" >admin@clearvision.co.nz</a>
      
           <h3 >Phone</h3>
            <span>09 571 2561</span>
          </ul>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
