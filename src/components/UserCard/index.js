import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {LogoKemendag, IconProfileCard} from '../../assets';

const UserCard = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoKemendag} />
      <View style={{marginTop: 70}}>
        <View style={{flexDirection: 'row'}}>
          <IconProfileCard />
          <View style={{flexDirection: 'column', padding: 8, marginLeft: 5}}>
            <Text>User Name</Text>
            <Text>User ID</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#DBDE69',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
