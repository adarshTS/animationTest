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

    spin() {
      this.spinValue.setValue(0);
      Animated.timing(
        this.spinValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
          easing: Easing.linear
        }
      ).start();
    }

  render() {
    const spin = this.spinValue.interpolate({
inputRange: [0, 1],
outputRange: ['0deg', '360deg']
});

    return (
      <View style={{ flex: 1 }}>
      <Animated.Image
            style={[
              styles.coinStyle,
              {
                transform: [
                  { rotate: spin }
                ]
              }
            ]}
            source={require('./Images/Coin_Tail.png')}
            style={styles.coinStyle} />


      </View>
    );
  }
}
const styles = {
  coinStyle: {
    width: 150,
height: 150,
bottom: 60,
position: 'relative',

  }
};

AppRegistry.registerComponent('animateTest', () => animateTest);
