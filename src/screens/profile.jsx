import {View, Text, StyleSheet, ScrollView, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import auth from '../service/auth';
import avatar from '../images/images.png';

const Profile = ({route, navigation}) => {
  const height = useWindowDimensions().height;
  const avatarHeight = height * 0.13;
  const [details, setDetails] = useState(null);

  const getDetails = async () => {
    try {
      const res = await auth.getMechanic();
      setDetails(res);
    } catch (error) {}
  };

  useEffect(() => {
    getDetails();
  }, []);

  const Detail = ({title, content}) => {
    return (
      <View style={{alignItems: 'flex-start', width: '100%', marginBottom: 10}}>
        <Text style={{fontWeight: '500', fontSize: 15, marginBottom: 5}}>{title}</Text>
        <Text>{content}</Text>
      </View>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{height: height * 0.15, width: '100%', backgroundColor: 'white'}}>
        <View style={{width: avatarHeight, height: avatarHeight, borderRadius: avatarHeight, backgroundColor: 'teal', alignSelf: 'center', position: 'absolute', top: avatarHeight / 1.7}}>
          <Image source={avatar} style={{width: avatarHeight, height: avatarHeight, borderRadius: avatarHeight}} />
        </View>
      </View>
      <View style={{width: '90%', alignSelf: 'center', marginTop: avatarHeight / 2}}>
        <Detail title="Fullname" content={details?.name} />
        <Detail title="Email" content={details?.email} />
        <Detail title="Phone" content={details?.phone} />
        <Detail title="Address" content={details?.address} />
        {details?.isMechanic && (
          <>
            <Detail title="Business Name" content={details?.bizName} />
            <Detail title="Service" content={details?.service} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  step: {
    paddingRight: 8,
  },
  body: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
