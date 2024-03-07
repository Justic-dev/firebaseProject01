import { Image, ImageBackground, StyleSheet, Text, Platform, View, Alert, Pressable } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import MyButton from "../components/MyButton";
import MyTextInput from '../components/MyTextInput';
import SocialMedia from '../components/SocialMedia';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type SignUpScreenProps = PropsWithChildren<{
  navigation: any;
}>


const SignUpScreen = ({navigation}: SignUpScreenProps) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

const signupTestFn = () => {
  auth().createUserWithEmailAndPassword(email, password).then(() => {
    Alert.alert('Signed Up Successfully');
    navigation.replace('Login');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    } else if (error.code === 'auth/weak-password') {
      Alert.alert('That password is too weak!');
    } 
    console.log(error);
  });

}

    
  return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.png')}
                style={styles.imageBackground}
            >
                <Image
                    source={require('../assets/food/food.png')}
                    style={styles.foodImage}
                />

                <Text style={styles.title}> Fatmore </Text>

                <View style={styles.inputContainer}>
                  {/* value, onChangeText */}
                    <MyTextInput value={email} onChangeText={(text: string) => setEmail(text)} placeholder='Enter E-mail or Username' />
                    <MyTextInput value={password} onChangeText={(text: string) => setPassword(text)} placeholder='Password' secureTextEntry />
                    <MyTextInput value={confirmPassword} onChangeText={(text: string) => setConfirmPassword(text)} placeholder='confirm Password' secureTextEntry />
                    <Pressable
                    style={styles.textDontHavec}
                    onPress={() => (navigation.replace('Login'))}
                    ><Text style={styles.textDontHave}>Have An Account ?</Text></Pressable>
                    <MyButton title={'Sign Up'} onPress={() => {
                      if (password === confirmPassword) {
                        signupTestFn()
                      } else {
                        Alert.alert('Passwords do not match!');
                      }
                    }} />
                    <Text style={styles.orText}>Or</Text>
                    <SocialMedia />
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    imageBackground: {
        height: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    foodImage: {
        height: 50,
        width: 90,
        resizeMode: 'stretch',
        position: 'absolute',
        right: 20,
        top: Platform.OS == 'android' ? 20 : 50,
    },
    title: {
        fontSize: 40,
        color: 'white',
        marginTop: Platform.OS == 'android' ? 60 : 110,
        fontFamily: 'Audiowide-Regular',
    },
    inputContainer: {
        height: 450,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20
    },
    textDontHavec: {
        alignSelf: 'flex-end',
        marginRight: 10,
        color: '#000000',
        marginBottom: 15,
        fontFamily: 'NovaFlat-Regular'
    },    
    textDontHave: {
        alignSelf: 'flex-end',
        marginRight: 10,
        color: '#192A56',
        marginBottom: 15,
        fontFamily: 'NovaFlat-Regular'
    },
    orText: {
        fontSize: 20,
        color: 'grey',
        marginTop: 20,
        fontFamily: 'Audiowide-Regular',
    }
})