import React from 'react';

import { LandingPage } from 'src/Landing/LandingPage';

class LandingScreen extends React.Component {
  render() {
    return <LandingPage {...this.props} />;
  }
}

export default LandingScreen;