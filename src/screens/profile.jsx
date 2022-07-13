import {View, Text, StyleSheet, ScrollView, useWindowDimensions, Image, ToastAndroid, Pressable, ActivityIndicator, Modal} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import auth from '../service/auth';
import avatar from '../images/images.png';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';

const Loader = ({visible}) => {
  return (
    <Modal transparent statusBarTranslucent visible={visible} animationType="slide">
      <View style={{height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,.5)', alignContent: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#505be4" />
        <Text style={{textAlign: 'center', marginTop: 10}}>Loading ...</Text>
      </View>
    </Modal>
  );
};
const Profile = ({route, navigation}) => {
  const {height} = useWindowDimensions();

  const avatarHeight = height * 0.13;
  const [details, setDetails] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDetails = async () => {
    setIsLoading(true);
    try {
      const res = await auth.getMechanic();
      setIsLoading(false);
      setDetails(res);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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

  const selectImage = async () => {
    const options = {
      showCropFrame: true,
      cropping: true,
      cropperCircleOverlay: false,
      mediaType: 'photo',
      freeStyleCropEnabled: false,
      width: 400,
      height: 400,
    };
    try {
      ToastAndroid.show('Image Uploading ...', ToastAndroid.SHORT);
      const data = await ImagePicker.openPicker(options);
      setImage(data.path);
      const fileExt = data?.mime.split('/')[1];
      const fileName = `${details?._id}.${fileExt}`;
      const file = data?.path;
      await auth.handleUploadDp(fileName, file);
      ToastAndroid.show('Image Uploaded', ToastAndroid.SHORT);
    } catch (error) {
      console.log({text: 'Something went wrong, Try Again'});
    }
  };

  const logout = async () => {
    await auth.handelLogout();
  };

  const imageToShow = () => {
    let IMAGE_PATH = '';
    if (image !== null) {
      IMAGE_PATH = {uri: image};
    } else if (details?.dpLink) {
      IMAGE_PATH = {uri: details?.dpLink};
    } else {
      IMAGE_PATH = avatar;
    }

    return IMAGE_PATH;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{height: height * 0.15, width: '100%', backgroundColor: 'white'}}>
        <View style={{width: avatarHeight, height: avatarHeight, borderRadius: avatarHeight, backgroundColor: 'teal', alignSelf: 'center', position: 'absolute', top: avatarHeight / 1.7, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={imageToShow()} style={{width: avatarHeight, height: avatarHeight, borderRadius: avatarHeight, marginRight: 10}} />
          <Icon name="camera" size={20} color="red" onPress={selectImage} />
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
      <Pressable onPress={logout} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'center', marginTop: 30}}>
        <Icon
          name="log-out"
          onPress={() => {
            logout();
          }}
          color="black"
          size={25}
          style={{marginRight: 10}}
        />
        <Text>Logout</Text>
      </Pressable>
      <Loader visible={isLoading} />
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
