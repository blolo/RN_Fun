import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageStyle,
  ViewStyle,
  TextStyle,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';

interface ItemsProp {
  items: string[];
}
export class HorizontalItemsScroller extends React.Component<ItemsProp, any> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          {this.props.items.map((item, idx) => {
            return (
              <Button
                containerViewStyle={styles.buttonContainer}
                buttonStyle={styles.button}
                key={idx}
                title={item}
                onPress={null}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
interface Style {
  container: ViewStyle;
  button: ViewStyle;
  buttonContainer: ViewStyle;
}

// React hoists variables. We declare the styles here to keep them out of the
// way of the component definition
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#45FF33',
  },
  button: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: 125,
    height: 145,
    marginLeft: 0,
    backgroundColor: '#C41230',
  },
});
