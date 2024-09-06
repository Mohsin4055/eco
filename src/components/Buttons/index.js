//THE DIFFERENCE BETWEEN THE TOUCHABLEOPACITY AND THE PRESSABLE IS THAT PRESSABLE CONTAIN THE HITSLOP WHICH IS CLICKED MANY TIME BUT IT IS
//NOT VISIBALE AND INTEAD OF using pressable we can use the touchableopacity which is visible and showed that the button is clicked

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({ title,onPress,style}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container,style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
