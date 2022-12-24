import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import data4 from '../Components/data4';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
function History(){
  return (
    <View style={styles.container}>
        <StatusBar style="dark" />
      <Text style={styles.order}>My orders</Text>
      <FlatList 
      data={data4}
      keyExtractor = {(item)=> item.id}
      renderItem = {({item}) => (
        <View style={styles.main}>
          <View style={styles.list}>
          <View style={styles.left}>
            <Image style={styles.image} source={item.image}/>
            <View style={styles.text1}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{item.price}</Text>
            </View>
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="restart" size={30} color="black" />
          </View>
        </View>
        <Text style={styles.date}>{item.time}</Text>
        </View>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  order: {
    fontSize: 24,
    marginTop: Height * 0.09,
    fontWeight: 'bold',
    marginHorizontal:Width * 0.07,
    marginVertical: Height * 0.01,
  },
  list : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -25
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  left: {
    flexDirection: 'row',
  },
  date: {
    marginTop: Height * 0.015,
    color: '#9F9F9C',
    fontWeight: '400',
    paddingBottom: 18
  },
  main: {
    marginVertical: Height * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    marginHorizontal:Width * 0.07,
  },
  text: {
    marginLeft: Width * 0.04,
    fontSize: 16,
    fontWeight: '500'
  },
  text1: {
    marginTop: Height * 0.015,
  },
  icon: {
    marginTop: Height * 0.013,
    paddingHorizontal: 9,
    paddingVertical: 9,
    backgroundColor: '#F5F5F5',
    borderRadius: 60
  },
})

export default History