import React from 'react';

import { MakeMyMealPage } from 'src/MakeMyMeal/MakeMyMealPage';

class MakeMyMealScreen extends React.Component {
  render() {
    return <MakeMyMealPage {...this.props} />;
  }
}

export default MakeMyMealScreen;