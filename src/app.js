import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Signup from './screens/auth/signup'; // Corrected import path
import Splash from './screens/auth/splash'; // Import Splash component
import SignIn from './screens/auth/SignIn'; // Corrected import path for SignIn

const App = () => {
  return (
    <SafeAreaView>
      <View>
       <SignIn />
      </View>
    </SafeAreaView>
  );
};

export default App;
