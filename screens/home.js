import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import data from '../Components/data';
import data1 from '../Components/data1';
import data2 from '../Components/data2';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const Height = Dimensions.get('window').height;
function Home(){
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <StatusBar style="dark" />
      <TouchableOpacity>
        <View style={styles.location}>
          <Ionicons name="ios-location-outline" size={22} color="black" />
          <Text style={styles.locationname}>Ayawaso</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.discount}>
        <Text style={styles.discounttext}>🎁 Discount on the entire menu</Text>
        <View style={styles.containerAll}>
          <Text style={styles.discounttext1}>All</Text>
        </View>
      </View>
      <FlatList 
        horizontal
        data={data}
        keyExtractor= {(item) => item.id}
        renderItem = {({item})=> (
        <View style={styles.list}>
          <TouchableOpacity>
            <View>
              <View style={styles.listdiscount}>
                <Text style={styles.listdiscounttext}>{item.discount}</Text>
              </View>
              <Image style={styles.image} source={item.image}/>
              <View style={styles.listtime}>
                <Text style={styles.listtimetext}>{item.time}</Text>
              </View>
              <View style={styles.restcontainer}>
                <Text style={styles.listtext}>{item.title}</Text>
                <Text style={styles.listtext}><AntDesign name="star" size={14} color="black" /> {item.rating}</Text>
              </View>
              <Text style={styles.listprice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        </View>
        )} />

        {/* Discount on delivery */}
        <View style={styles.discount1}>
        <Text style={styles.discounttext}>Discount on delivery</Text>
        <View style={styles.containerAll}>
          <Text style={styles.discounttext1}>All</Text>
        </View>
      </View>
      <FlatList 
        horizontal
        data={data1}
        keyExtractor= {(item) => item.id}
        renderItem = {({item})=> (
        <View style={styles.list}>
          <TouchableOpacity>
            <View>
              <View style={styles.listdiscount}>
                <Text style={styles.listdiscounttext}>{item.discount}</Text>
              </View>
              <Image style={styles.image} source={item.image}/>
              <View style={styles.listtime}>
                <Text style={styles.listtimetext}>{item.time}</Text>
              </View>
              <View style={styles.restcontainer}>
                <Text style={styles.listtext}>{item.title}</Text>
                <Text style={styles.listtext}><AntDesign name="star" size={14} color="black" /> {item.rating}</Text>
              </View>
              <View style={styles.listpricecontainer}>
                <Text style={styles.listprice}>{item.price}</Text>
                <View style={styles.money}>
                  <Text style={styles.moneytext}>{item.delivery}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        )} />

        {/* Must Try */}
        <View style={styles.discount2}>
        <Text style={styles.discounttext}>Must Try</Text>
        <View style={styles.containerAll}>
          <Text style={styles.discounttext1}>All</Text>
        </View>
      </View>
      <FlatList 
        horizontal
        data={data2}
        keyExtractor= {(item) => item.id}
        renderItem = {({item})=> (
        <View style={styles.list}>
          <TouchableOpacity>
            <View>
              <View style={styles.listdiscount}>
                <Text style={styles.listdiscounttext}>{item.discount}</Text>
              </View>
              <Image style={styles.image} source={item.image}/>
              <View style={styles.listtime}>
                <Text style={styles.listtimetext}>{item.time}</Text>
              </View>
              <View style={styles.restcontainer}>
                <Text style={styles.listtext}>{item.title}</Text>
                <Text style={styles.listtext}><AntDesign name="star" size={14} color="black" /> {item.rating}</Text>
              </View>
              <Text style={styles.listprice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        </View>
        )} />
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  location: {
    flexDirection: 'row',
    marginTop: Height * 0.02,
    marginLeft: 20,
  },
  locationname:{
    fontSize: 17,
    marginLeft: 10,
    marginTop: Height * 0.005,
  },
  discount:{
    marginHorizontal: 21,
    marginTop: Height * 0.002,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  discount1:{
    marginHorizontal: 21,
    marginTop:  13,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  discount2:{
    marginHorizontal: 21,
    marginTop:  13,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  discounttext:{
    fontSize: 20,
    marginTop: Height * 0.02,
    fontWeight: 'bold',
  },
  discounttext1:{
    fontSize: 13,
    paddingVertical: 2.5,
    paddingHorizontal: 8,
    color: '#258869',
    fontWeight: 'bold',
  },
  containerAll: {
    backgroundColor: '#CDFEEB',
    marginTop: Height * 0.02,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CDFEEB',
  },
  image:{
    height: 106,
    width: 200,
    borderRadius: 10
  },
  list:{
    marginHorizontal: 21,
    marginTop: Height * 0.018,
  },
  restcontainer:{
    marginTop: Height * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listtext:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  listprice:{
    marginTop: Height * 0.002,
  },
  listdiscount:{
    backgroundColor: 'white',
    position: 'absolute',
    padding: 4,
    paddingHorizontal: 7,
    zIndex: 1,
    top: 10,
    left: 8,
    borderRadius: 10
  },
  listdiscounttext:{
    color: 'red',
    fontSize: 11,
    fontWeight: 'bold'
  },
  listtime: {
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    right: 10,
    bottom: 48,
    borderRadius: 10,
  },
  listtimetext: {
    padding: 4,
    fontSize: 12,
    paddingHorizontal: 7,
    fontWeight: 'bold'
  },
  listpricecontainer: {
    flexDirection: 'row',
  },
  money: {
    marginLeft: 12,
    padding: 2,
    paddingHorizontal: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 1
  },

  moneytext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  
  
});

export default Home