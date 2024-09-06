import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../../components/Buttons';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles';
import Input from '../../../components/inputs';
import AuthHeader from '../../../components/AuthHeader';
import Separator from '../../../components/separator';
import GoogleLogin from '../../../components/GoogleLogin';


const Signup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />

      <View style={styles.agreeFlow}>
        <CheckBox value={checked} onValueChange={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>

      <Button style={styles.button} title="Sign Up" />

      <Separator text="Or sign up with" />

      <GoogleLogin />

     <Text style={styles.footerText}>Already have an account?
     <Text style={styles.footerLink}>Sign In</Text>
     </Text>
    </View>
  );
};

export default Signup;
