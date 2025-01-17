import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeFlow: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  agreeText:{
  color:colors.blue,
  marginHorizontal:13,


  },
  agreeTextBold:{
  fontWeight:'bold',
  },
  button:{
  marginVertical:20,
  backgroundColor:colors.blue,
  },
  footerText:{
  color:colors.blue,
  marginBottom:50,
  textAlign:'center'


  },
  footerLink:{
  fontWeight:'bold'
  }
});
