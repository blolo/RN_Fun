import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageStyle,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { Text } from 'react-native-elements';
import { HorizontalItemsScroller } from 'src/Common/HorizontalItemsScroller';
import { Menu } from 'src/Common/Menu';
import { loadMenu } from 'src/Common/action';
import { AppState } from 'src/Store';
import { connect } from 'react-redux';

export interface LoadMenuProps {
  menuData: Menu;
  error: string;
}

export interface LoadMenuDispatchProps {
  loadMenu: typeof loadMenu;
}

export interface MakeMyMealProp extends LoadMenuProps, LoadMenuDispatchProps {
  navigator: Navigator;
}
export interface LoadMenuState {
  isLoading: boolean;
}

export class MakeMyMealPage extends React.Component<
  MakeMyMealProp,
  LoadMenuState
> {
  state: LoadMenuState = {
    isLoading: true,
  };

  componentDidMount() {
    this.props.loadMenu();
  }

  componentWillReceiveProps({ menuData, error }: LoadMenuProps) {
    if (menuData) {
      this.setState({
        isLoading: false,
      });
    } else if (error) {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.loading]}>
          <ActivityIndicator size="large" color="#AA0621" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.recentText}>Main item</Text>
        <HorizontalItemsScroller items={['hello', 'fff']} />
        <Text style={styles.recentText}>Side</Text>
        <HorizontalItemsScroller items={['hello', 'fff']} />
        <Text style={styles.recentText}>Drink</Text>
        <HorizontalItemsScroller items={['hello', 'fff']} />
      </View>
    );
  }
}

// Connected component is used with Redux store
export const SearchPage = connect<
  LoadMenuProps,
  LoadMenuDispatchProps,
  never,
  AppState
>(
  ({ menuFromTheStore: { menu, error } }) => ({
    error,
    menuData: menu,
  }),
  dispatch => ({
    loadMenu: () => dispatch(loadMenu()),
  }),
)(MakeMyMealPage);

interface Style {
  container: ViewStyle;
  recentText: TextStyle;
  loading: ViewStyle;
}

// React hoists variables. We declare the styles here to keep them out of the
// way of the component definition
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EDE6D9',
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(228,211,189,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
