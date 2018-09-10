import { StyleSheet } from 'react-native';

import { black } from '../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  semicircle: {
    width: 60,
    height: 90,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: black
  },
  semicircleContainer: {
    width: 100,
    height: 100
  },
  leftHeart: {
    transform: [{ rotate: '-45deg' }],
    left: 10
  },
  rightHeart: {
    transform: [{ rotate: '45deg' }],
    right: 10
  },
  back: {
    position: 'absolute',
    zIndex: -1
  }
});
