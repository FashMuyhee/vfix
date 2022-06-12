import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Login from '../screens/login';
import Register from '../screens/register';
import Profile from '../screens/profile';
import auth from '../service/auth';
import {AuthContent} from '../context/AuthContext';
import {Image, Pressable} from 'react-native';
import avatar from '../images/images.png';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {user} = useContext(AuthContent);

  const logout = async () => {
    await auth.handelLogout();
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerStyle: {
            elevation: 0,
            shadowOffset: {width: 0, height: 0},
          },
          headerTitleStyle: {
            fontSize: 13,
            textTransform: 'capitalize',
          },
        }}>
        <Stack.Screen
          name="search"
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: 'Welcome',
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('profile')}>
                <Image source={avatar} style={{width: 30, height: 30, borderRadius: 30, marginRight: 10}} />
              </Pressable>
            ),
          })}
          component={Home}
        />
        <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="register" component={Register} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
