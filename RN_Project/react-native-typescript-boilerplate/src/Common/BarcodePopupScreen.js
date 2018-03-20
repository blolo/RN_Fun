import React from 'react';

import { BarcodePopupPage } from 'src/Common/BarcodePopupPage';

class BarcodePopupScreen extends React.Component {
  render() {
    return <BarcodePopupPage {...this.props} />;
  }
}

export default BarcodePopupScreen;