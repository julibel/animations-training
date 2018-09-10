import { StyleSheet } from 'react-native';

import { green } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  head: {
    borderRadius: 500,
    height: 70,
    width: 80,
    backgroundColor: green
  }
});
