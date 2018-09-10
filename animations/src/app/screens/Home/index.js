import React, { Component } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';

import { green, red } from '../../../constants/colors';

import styles from './styles';
import Heart from './components/Heart';

class Home extends Component {
  state = {
    size: new Animated.Value(0)
  };

  handlePress = () => {
    const { size } = this.state;
    Animated.sequence([
      Animated.spring(size, { toValue: 1, friction: 5, useNativeEventDriver: true })
    ]).start();
  };

  render() {
    const { size } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Heart size={size} color={red} />
          <Heart size={1} absolute color={green} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
