import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:20,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.lightGrey, // Add a color to make the line visible
  },
  text: {
    color: colors.blue,
    fontWeight: '500',
    marginHorizontal: 8, // Add some spacing around the text
  },
});
