import React, { useState } from 'react';
import { View, TextInput, Text, Image, Pressable } from 'react-native';
import { styles } from './styles';

const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={styles.input}
        />
        {isPassword && (
          <Pressable style={styles.eye}onPress={onEyePress}>
            <Image source={isPasswordVisible ? require('../../assets/eye.png'): require('../../assets/eye_closed.png')} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default Input;
