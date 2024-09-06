import { StyleSheet } from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    flexGrow:1,
  },
  image: {
    width: '100%',
    height: '65%',
    height:'50%',
  },
  titleContainer: {
    marginVertical: 54, // Use a colon instead of an equals sign
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: 'colors.orange',
    textDecorationLine: 'underline',
  },
  footerText: {
    color: 'colors.blue',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 13,
  },
});
