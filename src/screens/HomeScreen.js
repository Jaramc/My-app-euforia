
import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const HomeScreen = () => {
  return (
    <View style ={styles.container}>
         <div>HomeScreen</div>
    </View>
   
  )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center'
    }
})