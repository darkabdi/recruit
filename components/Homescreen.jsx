import { Text, View, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'

export default function Homescreen ({navigation}){

    return (
      <View style={styles.container}>
        <Text>Homescreen</Text>
        <Button
      title='Login'
      onPress={()=>navigation.navigate("Login")}
      />
       <Button
       title='Register'
       onPress={()=>navigation.navigate("Register")}
       />

      </View>
    )
  
}

const styles = StyleSheet.create({
        container: {
          display:'flex',
          justifyContent: "space-between",
          alignItems:"stretch"  ,
          backgroundColor: '#ff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        
      });