import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const UserScreen = () => {
  return (
    <View style ={styles.container}>
        <div>UserScreen</div>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});