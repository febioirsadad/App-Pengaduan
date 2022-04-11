import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import UserCard from '../../components/UserCard';
import {IconLogout} from '../../assets';

const Profile = ({onPress}) => {
  return (
    <View>
      <Text style={styles.headerTitle}>Profil Saya</Text>
      <View>
        <UserCard />
        {/* <Button
          title="Geeks"
          onPress={() => Alert.alert('Its GeeksforGeeks !')}
        /> */}
        <TouchableOpacity
          onPress={onPress}
          style={{margin: 30, backgroundColor: '#fff', borderRadius: 10}}>
          <View style={{flexDirection: 'row', alignSelf: 'center', padding: 5}}>
            <IconLogout />
            <Text style={{padding: 5, marginLeft: 5}}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    color: '#000',
    paddingTop: 30,
    fontSize: 24,
  },
});
