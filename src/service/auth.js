import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

class AuthService {
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  /**
   *  sign-in 
   * @param {string} email 
   * @param {string} password 
   * @returns 
   */
  handleSignIn = async (email, password) => {
    if (!email || !password) {
      return { isError: true, msg: 'All Field are required' };
    }

    if (this.validateEmail(email)) {
      if (password.length >= 8) {
        try {
          let response = await auth().signInWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            return { msg: 'Login Successful', isError: false };
          }
        } catch (e) {
          if (e.code === 'auth/network-request-failed') {
            return { msg: 'Something went wrong, Try Again!!', isError: true };
          } else if (e.code === 'auth/wrong-password') {
            return { msg: 'Password Incorrect', isError: true };
          } else if (e.code === 'auth/user-not-found') {
            return { msg: 'User not found', isError: true };
          }
        }
      } else {
        return {
          isError: true,
          msg: 'Password Too Short, must be at least 8 characters ',
        };
      }
    } else {
      return { isError: true, msg: 'Invalid Email' };
    }
  };

  /**
   * register
   * @param {string} email 
   * @param {string} name 
   * @param {string} address 
   * @param {string} password 
   * @param {string} phone 
   * @param {string} wAddress 
   * @param {string} service 
   * @param {string} bizName 
   * @param {string} isMechanic 
   * @returns 
   */
  handleRegister = async (
    email,
    name,
    address,
    password,
    phone,
    wAddress,
    service,
    bizName,
    isMechanic
  ) => {
    if (!email || !name || !address || !phone ) {
      return { isError: true, msg: 'All Field are required' };
    }

    if (isMechanic == true && (!wAddress || !service || !bizName)){
      return { isError: true, msg: 'All Field are required' };
    }

    if (this.validateEmail(email)) {
      if (password.length >= 8) {
        try {
          let response = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
          if (response) {
            const update = {
              displayName: name,
            };
            await auth().currentUser.updateProfile(update);
            try {
              await firestore()
                .collection('users')
                .doc(response.user.uid)
                .set({
                  email,
                  name,
                  address,
                  password,
                  phone,
                  wAddress,
                  service,
                  bizName,
                  isMechanic,
                  createdAt: firestore.FieldValue.serverTimestamp(),
                  _id: response.user.uid,
                });
              return {
                isError: false,
                msg: 'Account Created Successfully',
              };
            } catch (error) {
              console.log(error.message);
              return {
                isError: true,
                msg: 'Something went wrong try again ',
              };
            }
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        return {
          isError: true,
          msg: 'Password Too Short, must be at least 8 characters ',
        };
      }
    } else {
      return { isError: true, msg: 'Invalid Email' };
    }
  };

  handelLogout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
      // return {isError: true, msg: 'Invalid Email'};
    }
  };

  getMechanic = async () => {
    try {
      const user = auth().currentUser?.uid;
      const docRef = firestore().collection('users').doc(user);
      const isExist = await docRef.get();
      if (isExist.exists) {
        const data = isExist.data();
        const dp = await this.getProfileImage(data?.avatar);
        const profile = { ...data, dpLink: dp };
        return profile;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  getMechanics = async () => {
    try {
      const docRef = firestore().collection('users').where('isMechanic', '==', true);
      const isExist = await docRef.get();
      if (!isExist.empty) {
        const data = isExist.docs
        const list = data.map(item => {
          return { ...item.data() }
        })
        return list;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  getProfileImage = async (imageName) => {
    try {
      const res = await storage()
        .ref('/' + imageName)
        .getDownloadURL();
      return res;
    } catch (error) {
      if ((error.code = 'storage/object-not-found')) {
        return null;
      }
      console.log(error);
    }
  };

  handleUploadDp = async (fileName, filePath) => {
    try {
      const user = auth().currentUser?.uid;
      const res = await storage().ref(fileName).putFile(filePath);
      await firestore().collection('users').doc(user).update({
        avatar: fileName,
      });
    } catch (error) {
      console.log(error);
    }
  };

}

export default new AuthService();