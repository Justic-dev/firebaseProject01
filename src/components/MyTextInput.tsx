import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MyTextInput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      {...props}
      />
      <View style={styles.border}></View>
    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 50
    },
    border: {
        width: '100%',
        backgroundColor: 'grey',
        height: 1,
        alignItems: 'center',
    }
})