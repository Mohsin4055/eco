import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../../components/Buttons';
import { styles } from './styles';
import Input from '../../../components/inputs';
import AuthHeader from '../../../components/AuthHeader';
import Separator from '../../../components/separator';
import GoogleLogin from '../../../components/GoogleLogin';


const SignIn = () => {
  const onSignUp = () =>{
  console.log('Hello');
  }

  return (
    <View>
      <AuthHeader title="Sign In" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />

      <Button style={styles.button} title="Sign In" />

      <Separator text="Or sign In with" />

      <GoogleLogin />

     <Text style={styles.footerText}>Don’t have an account?
     <Text onPress={onSignUp}style={styles.footerLink}>Sign Up</Text>
     </Text>
    </View>
  );
};

export default SignIn;
