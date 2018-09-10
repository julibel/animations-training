import React from 'react';
import { View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Heart({ size, absolute, color }) {
  return (
    <Animated.View
      style={[styles.semicircleContainer, { transform: [{ scale: size }] }, absolute && styles.back]}
    >
      <View style={[styles.semicircle, styles.leftHeart, { backgroundColor: color }]} />
      <View style={[styles.semicircle, styles.rightHeart, { backgroundColor: color }]} />
    </Animated.View>
  );
}

Heart.propTypes = {
  size: PropTypes.number,
  absolute: PropTypes.bool,
  color: PropTypes.string
};
export default Heart;
