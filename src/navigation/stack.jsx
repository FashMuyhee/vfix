import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import SearchResult from '../screens/search-result';
import Details from '../screens/details';
import Login from '../screens/login';
import Register from '../screens/register';
import Profile from '../screens/profile';
import MechanicList from '../screens/mechanic-list';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '../service/auth';
import {AuthContent} from '../context/AuthContext';
import {Image, Pressable} from 'react-native';
import avatar from '../images/images.png';
import ForgotPassword from '../screens/forgot-password';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {user} = useContext(AuthContent);
  const [details, setDetails] = useState(null);

  const imageToShow = () => {
    let IMAGE_PATH = '';
    if (details?.dpLink) {
      IMAGE_PATH = {uri: details?.dpLink};
    } else {
      IMAGE_PATH = avatar;
    }
    return IMAGE_PATH;
  };

  const getDetails = async () => {
    try {
      const res = await auth.getMechanic();
      setDetails(res);
    } catch (error) {}
  };

  React.useEffect(() => {
    getDetails();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            elevation: 0,
            shadowOffset: {width: 0, height: 0},
            backgroundColor: '#0A0A26',
          },
          headerTitleStyle: {
            fontSize: 13,
            textTransform: 'capitalize',
          },
        }}>
        {user !== null ? (
          <>
            <Stack.Screen
              name="search"
              options={({navigation}) => ({
                headerTitle: 'Welcome',
                headerTitleStyle: {
                  fontSize: 20,
                },
                headerRight: () => (
                  <Pressable onPress={() => navigation.navigate('profile')}>
                    <Image source={imageToShow()} style={{backgroundColor: 'teal', width: 30, height: 30, borderRadius: 30, marginRight: 10}} />
                  </Pressable>
                ),
              })}
              component={Home}
            />
            <Stack.Screen name="result" options={{headerTitle: 'Search Result'}} component={SearchResult} />
            <Stack.Screen name="more-info" component={Details} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="mechanic-list" component={MechanicList} options={{headerTitle: 'Support List'}} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="f_password" component={ForgotPassword} options={{headerShown: false}} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
