import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
function Profile (){
  return (
    <View style={styles.container}>
        <StatusBar style="dark" />
      <Text style={styles.name}>Payin Winful</Text>
      <Text style={styles.number}>+233540910103</Text>
      <View style={styles.payment}>
        <Text style= {styles.icon}><FontAwesome name="credit-card" size={24} color="black" /></Text>
        <Text style={styles.paymenttext}>Payment</Text>
      </View>
      <View style={styles.payment}>
        <Text style= {styles.icon}><Ionicons name="pricetag-outline" size={24} color="black" /></Text>
        <Text style={styles.paymenttext}>Promo</Text>
      </View>
      <View style={styles.payment}>
        <Text style= {styles.icon}><Ionicons name="person-outline" size={24} color="black" /></Text>
        <Text style={styles.paymenttext}>Profile</Text>
      </View>
      <View style={styles.payment}>
        <Text style= {styles.icon}><Ionicons name="md-settings-outline" size={24} color="black" /></Text>
        <Text style={styles.paymenttext}>Settings</Text>
      </View>
      <View style={styles.payment}>
        <Text style= {styles.icon}><Ionicons name="information-circle-outline" size={24} color="black" /></Text>
        <Text style={styles.paymenttext}>About</Text>
      </View>
      <View style={styles.payment}>
        <Text style= {styles.icon}><Ionicons name="help-circle-outline" size={24} color="black" /></Text>
        <Text style={styles.paymenttext}>Help</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 25,
    marginHorizontal:Width * 0.07,
    marginTop: Height * 0.09,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
    marginHorizontal:Width * 0.07,
    color: '#9F9F9C',
    fontWeight: '400',
    marginTop: Height * 0.002,
  },
  payment: {
    fontSize: 16,
    marginHorizontal:Width * 0.07,
    color: '#9F9F9C',
    fontWeight: '400',
    marginTop: Height * 0.05,
    flexDirection: 'row'
  },
  paymenttext: {
    fontSize: 20,
    marginLeft: 17
  },
  icon: {
    fontWeight: 'bold',
  }
})

export default Profile