import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React from 'react'


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
function History(){
  return (
    <View>
        <StatusBar style="dark" />
      <Text style={styles.order}>My orders</Text>
      <FlatList 
      data={}
      keyExtractor = {(item)=> item.id}
      renderItem = {({item}) => (
        <View></View>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  order: {
    fontSize: 24,
    marginTop: Height * 0.09,
    fontWeight: 'bold',
    marginHorizontal:Width * 0.07,
  },
})

export default History