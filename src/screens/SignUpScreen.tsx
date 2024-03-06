import { Image, ImageBackground, StyleSheet, Text, Platform, View, Alert } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import MyButton from "../components/MyButton";
import MyTextInput from '../components/MyTextInput';
import SocialMedia from '../components/SocialMedia';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';


const SignUpScreen = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

const signupTestFn = () => {
  auth().createUserWithEmailAndPassword(email, password).then(() => {
    Alert.alert('Signed Up Successfully');
  })
  .catch((error) => {
      console.log(error);
    })
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
                    <MyButton title={'Sign Up'} onPress={signupTestFn} />

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
    textDontHave: {
        alignSelf: 'flex-end',
        marginRight: 10,
        color: '#000000',
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