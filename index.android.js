import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Animated,
  Easing
} from 'react-native';

export default class animateTest extends Component {

  constructor(props) {
      super(props);
      this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
      }

    spin() {
      this.spinValue.setValue(0);
      Animated.timing(
        this.spinValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,

        }
      ).start();
    }

  render() {
    const spin = this.spinValue.interpolate({
inputRange: [0, 1],
outputRange: ['0deg', '2880deg'],
useNativeDriver: true
});

    return (
      <View style={styles.ViewStyle}>
      <Animated.Image
            style={[
              styles.coinStyle,
               { width: 150,
                 height: 150,
                transform: [
                  { rotateY: spin },

                ]
              },
            ]}
             source={require('./Images/Coin_Tail.png')}
             />
      </View>
    );
  }
}
const styles = {
  ViewStyle: {
    flex: 1,
    justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'black',
   }
};

AppRegistry.registerComponent('animateTest', () => animateTest);
