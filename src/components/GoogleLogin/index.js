//THE DIFFERENCE BETWEEN THE TOUCHABLEOPACITY AND THE PRESSABLE IS THAT PRESSABLE CONTAIN THE HITSLOP WHICH IS CLICKED MANY TIME BUT IT IS
//NOT VISIBALE AND INTEAD OF using pressable we can use the touchableopacity which is visible and showed that the button is clicked

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const GoogleLogin = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image style={styles.image} source={require('../../assets/google.png')} />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
