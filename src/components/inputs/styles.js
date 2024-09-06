import { StyleSheet } from 'react-native'; // Correctly imported StyleSheet
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
  marginBottom:20,
    // Your container styles here
  },
  label: {

 marginBottom:8,
 color: colors.blue,
 fontSize:14,
 fontWeight:'500'
    // Your label styles here
  },
  inputContainer: {
  borderWidth:1,
  borderColor:colors.grey,
  borderRadius:14,
  flexDirection:'row',
  alignItem:'center'

    // Your inputContainer styles here
  },
  input: {
    //borderWidth:1,
    paddingHorizontal:16,
    paddingVertical:20,
    flex:1,

    // Your input styles here
  },
  eye:{
  width:20,
  height:20,
  marginHorizontal:32,
  }

});
