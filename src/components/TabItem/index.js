import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconProfile,
  IconProfileActive,
  IconStatus,
  IconStatusActive,
} from '../../assets';
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;

    if (label === 'Status')
      return isFocused ? <IconStatusActive /> : <IconStatus />;

    if (label === 'Profile')
      return isFocused ? <IconProfileActive /> : <IconProfile />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
  }),
});
