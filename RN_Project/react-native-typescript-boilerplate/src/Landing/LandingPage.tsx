import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageStyle,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Navigator } from 'react-native-navigation';
import { HorizontalItemsScroller } from 'src/Common/HorizontalItemsScroller';

export interface DashboardProps {
  navigator: Navigator;
}

export interface PopupState {
  visibleModal: boolean;
}

///  my screen
export class LandingPage extends React.Component<DashboardProps, PopupState> {
  state: PopupState = {
    visibleModal: false,
  };
  loadMakeMyPlateScreen = () => {
    this.props.navigator.push({
      screen: 'MakeMyMeal',
      title: 'Make My Meal',
    });
  };
  showModal = () => {
    this.setState({
      visibleModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      visibleModal: false,
    });
  };
  render() {
    this.props.navigator.setStyle({
      navBarBackgroundColor: 'blue',
    });
    const popup = this.state.visibleModal ? (
      <View style={styles.popupContainer}>
        <Button
          title="Close"
          onPress={this.closeModal}
          textStyle={styles.text}
        />
      </View>
    ) : null;

    return (
      <View style={styles.container}>
        <Button
          title="Make My Meal"
          buttonStyle={styles.buttonStyle}
          containerViewStyle={styles.buttonContainer}
          onPress={this.loadMakeMyPlateScreen}
          textStyle={styles.text}
        />
        <Text style={styles.recentText}>Recents</Text>
        <HorizontalItemsScroller items={['hello', 'fff']} />
        {popup}
      </View>
    );
  }
}

interface Style {
  image: ImageStyle;
  container: ViewStyle;
  buttonContainer: ViewStyle;
  buttonStyle: ViewStyle;
  text: TextStyle;
  recentText: TextStyle;
  popupContainer: ViewStyle;
}

// React hoists variables. We declare the styles here to keep them out of the
// way of the component definition
const styles = StyleSheet.create<Style>({
  image: {
    flex: 1,
    width: '100%',
    height: 150,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EDE6D9',
  },
  popupContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingTop: -40,
  },
  buttonContainer: {
    width: '100%',
    height: '30%',
    marginLeft: 0,
    backgroundColor: '#C41230',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  recentText: {
    fontSize: 17,
    color: '#FFFFFF',
    height: 44,
    paddingLeft: 15,
    paddingTop: 10,
    fontWeight: 'bold',
    backgroundColor: '#422005',
  },

  buttonStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C41230',
  },
});
