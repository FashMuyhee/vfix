import {View, Text, Image, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import auth from '../service/auth';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await auth.forgetPassword(email);
      ToastAndroid.show(res?.msg, ToastAndroid.SHORT);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{paddingHorizontal: 20, backgroundColor: '#0A0A26', height: '100%'}}>
      <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: '20%'}} source={require('../images/vfixLogo.jpeg')} />
      <Text style={{fontSize: 20, marginTop: '20%', marginBottom: 30, color: 'white'}}>Forgot Password</Text>
      <TextInput placeholder="Email" keyboard="email-address" value={email} onChange={setEmail} onSubmitEditing={handleSubmit} />
      <Button isLoading={isLoading} title="Submit" onPress={handleSubmit} />
      <Text onPress={() => navigation.navigate('login')} style={{marginTop: 10, textAlign: 'center', color: '#505be4'}}>
        Go to Login
      </Text>
    </SafeAreaView>
  );
};

export default ForgotPassword;
