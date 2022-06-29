import {View, Text, Image, Switch, ScrollView, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import auth from '../service/auth';

const Register = ({navigation}) => {
  const [isMech, setIsMech] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bizName, setBizName] = useState('');
  const [address, setAddress] = useState('');
  const [wAddress, setWAddress] = useState('');
  const [service, setService] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await auth.handleRegister(email, name, address, password, phone, wAddress, service, bizName, isMech);
      setIsLoading(false);
      ToastAndroid.show(res?.msg, ToastAndroid.SHORT);
    } catch (error) {
      setIsLoading(false);
      console.log('🚀 ~ file: register.jsx ~ line 24 ~ handleSubmit ~ error', error);
    }
  };

  const handleToggle = () => {
    setService('');
    setBizName('');
    setWAddress('');
    setIsMech(!isMech);
  };

  return (
    <SafeAreaView style={{backgroundColor:'#0A0A26',height:'100%'}}>
      <ScrollView style={{paddingHorizontal: 20}}>
      <KeyboardAvoidingView behavior="position">
      <Image style={{width:100, height:100, alignSelf: 'center', marginTop:'20%'}} source={require('../images/vfixLogo.jpeg')} />
        <Text style={{fontSize: 20, marginTop: '20%', marginBottom: 20,color:'white'}}>Register</Text>
        <TextInput value={name} onChange={setName} placeholder="Fullname" />
        <TextInput value={phone} onChange={setPhone} placeholder="Phone" keyboard="numeric" />
        <TextInput value={email} onChange={setEmail} placeholder="Email" keyboard="email-address" />
        <TextInput value={address} onChange={setAddress} placeholder="Home Address" />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
          <Text style={{color:'white'}}>Are you a mechanic ?</Text>
          <Switch thumbColor="#505be4" trackColor={{true:"#787FE4", false: "black"}} style={{borderColor:'white'}} value={isMech} onValueChange={handleToggle} />
        </View>
        {isMech && (
          <>
            <TextInput value={wAddress} onChange={setWAddress} placeholder="Workshop Address" />
            <TextInput value={service} onChange={setService} placeholder="Service" />
            <TextInput value={bizName} onChange={setBizName} placeholder="Business Name" />
          </>
        )}
        <TextInput value={password} onChange={setPassword} placeholder="Password" secureTextEntry />
        <Button isLoading={isLoading} title="Register" onPress={handleSubmit} />
        <Text onPress={() => navigation.navigate('login')} style={{marginTop: 10, textAlign: 'center', color: '#505be4'}}>
          <Text style={{color:'white'}}>Have an account</Text> Login ?
        </Text>
      </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
