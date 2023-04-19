import { StatusBar } from 'expo-status-bar';
import { View, Text, Dimensions, StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import data3 from '../Components/data3';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
function Search (){
  return (
    <View style={styles.container} >
        <StatusBar style="dark" />
      <View style={styles.inputarea} >
        <TextInput style={styles.input} placeholder='Restaurants or cuisines' placeholderTextColor="#9F9F9C" />
        <Text style={styles.icon}><FontAwesome5 name="sliders-h" size={27} color="black" /></Text>
      </View>
      <Feather style={styles.icon1} name="search" size={20} color="#9F9F9C" />
      <Text style={styles.categories} >Popular Categories</Text>
      <FlatList 
      data={data3}
      keyExtractor= {(item)=> item.id}
      renderItem= {({item}) => (
        <View style={styles.categorieslist}>
          <Text>{item.text}</Text>
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
  inputarea: {
    marginTop: Height * 0.065,
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  input: {
    width: 320,
    height: 50,
    marginHorizontal: Width * 0.06,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingLeft: 60
  },
  icon: {
    marginTop: Height * 0.015,
    marginLeft: Width * -0.018,
  },
  icon1: {
    marginTop: Height * -0.043,
    marginLeft: Width * 0.1,
  },
  categories: {
    marginTop: Height * 0.05,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: Width* 0.09
  },
  categorieslist: {
    marginHorizontal: Width* 0.09,
    marginVertical: Height * 0.027,
  },
});

export default Search