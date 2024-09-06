//THE DIFFERENCE BETWEEN THE TOUCHABLEOPACITY AND THE PRESSABLE IS THAT PRESSABLE CONTAIN THE HITSLOP WHICH IS CLICKED MANY TIME BUT IT IS
//NOT VISIBALE AND INTEAD OF using pressable we can use the touchableopacity which is visible and showed that the button is clicked

import React from 'react';
import {TouchableOpacity,View } from 'react-native';
import { styles } from './styles';

const Checkbox = ({ checked,onCheck}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={()=>onCheck(!checked)} style={styles.container}>
     {checked ? (
     <View style={styles.innerContainer}>
     <Image style={styles.checkIcon} source={require('../../assets/icon.png'): null}/>




     </View>

     )}
    </TouchableOpacity>
  );
};

export default Checkbox;
