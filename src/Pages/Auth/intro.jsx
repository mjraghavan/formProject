import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const IntroScreen = () => {
  const navigation = useNavigation();

  const signupPressed = () => {
    Alert.alert('Completed Sign Up');
  };

  const loginPressed = () => {
    Alert.alert('Completed Login!');
  };

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Welcome</Text>
        <View style={styles.buttonsGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: '10%',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -40,
    marginLeft: 30,
  },
  buttonsGroup: {
    position: 'absolute',
    width: '100%',
    bottom: '10%',
  },
  button: {
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: '10%',
  },
  signup: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: '100%',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    fontSize: 18,
  },
  login: {
    backgroundColor: '#3A59FF',
    color: 'white',
    width: '100%',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    fontSize: 18,
  },
  gradientText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default IntroScreen;
