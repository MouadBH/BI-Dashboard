import React from 'react';
import AuthNav from '../../components/AuthNav';
import GuestNav from '../../components/GuestNav';
import Footer from '../../components/Footer';
import Sidenav from '../../components/Sidenav';

import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired
};

const AppLayout = ({ children, ...rest }) => {
  const currentPath = window.location.pathname;
  return (
    <div className="flex flex-col min-h-screen">
      <GuestNav />
      <div className="flex flex-1 overflow-hidden" style={{marginTop: 75}}>
        {currentPath.includes('reporting')
        ? <Sidenav style={{display: 'none'}} />
        : null
        }
        {children}
        
      </div>
      <Footer />
    </div>
  );
};

AppLayout.propTypes = propTypes;

export default AppLayout;
