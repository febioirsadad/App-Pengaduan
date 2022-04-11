import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Status = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Status Laporan</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    color: '#000',
    paddingTop: 30,
    fontSize: 24,
  },
});
