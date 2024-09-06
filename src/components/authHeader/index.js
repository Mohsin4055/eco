import React from 'react';
import { Text, View, Image, Pressable } from 'react-native'; // Ensure Pressable is imported
import { styles } from './styles';

const AuthHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image style={styles.image} source={require('../../assets/icon-1.png')} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
