import {View, Text, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import auth from '../service/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await auth.handleSignIn(email, password);
      ToastAndroid.show(res?.msg, ToastAndroid.SHORT);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <Text style={{fontSize: 20, marginTop: '40%', marginBottom: 30}}>Login</Text>
      <TextInput placeholder="Email" keyboard="email-address" value={email} onChange={setEmail} />
      <TextInput value={password} onChange={setPassword} placeholder="Password" secureTextEntry />
      <Button isLoading={isLoading} title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('profile')} style={{marginTop: 10, textAlign: 'center', color: '#505be4'}}>
        Don't have an account Register ?
      </Text>
    </SafeAreaView>
  );
};

export default Login;
