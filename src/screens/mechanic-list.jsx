import {
  View,
  Text,
  Linking,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import authServices from '../service/auth';

const MechanicList = ({route, navigation}) => {
  const [mechanics, setMechanics] = useState([]);
  const [loading, setLoading] = useState(false);

  const Detail = ({businessName, address, phone, name}) => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          width: '100%',
          marginBottom: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 15,
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 15,
            marginBottom: 5,
            textTransform: 'capitalize',
          }}>
          {businessName}
        </Text>
        <Text>{name}</Text>
        <Text style={{marginVertical: 5, textTransform: 'capitalize'}}>
          {address}
        </Text>
        <Pressable
          onPress={() => Linking.openURL(`tel:${phone}`)}
          style={{
            backgroundColor: '#787FE4',
            width: '100%',
            borderRadius: 5,
            alignSelf: 'center',
            marginTop: 10,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: '500'}}>
            {phone}
          </Text>
        </Pressable>
      </View>
    );
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const result = await authServices.getMechanics();
      setMechanics(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <FlatList
      data={mechanics}
      renderItem={({item}) => (
        <Detail
          businessName={item.bizName}
          address={item.wAddress}
          phone={item.phone}
          name={item.name}
        />
      )}
      style={{padding: 10}}
    />
  );
};

export default MechanicList;
