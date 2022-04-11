import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconBerita,
  IconHelp,
  IconLayanan,
  IconNotif,
  IconUupk,
  // IconLogout,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title, type, onPress}) => {
  const Icon = () => {
    if (title === 'Notif') return <IconNotif />;
    if (title === 'Bantuan') return <IconHelp />;
    if (title === 'Berita') return <IconBerita />;
    if (title === 'Pengaduan') return <IconLayanan />;
    if (title === 'UU PK') return <IconUupk />;
    // if (title === 'Logout') return <IconLogout />;
    return <IconBerita />;
  };

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: 12,
    marginRight: type === 'layanan' ? 30 : 0,
  }),
  button: type => ({
    backgroundColor: WARNA_SEKUNDER,
    padding: type === 'layanan' ? 20 : 7,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: type === 'layanan' ? 14 : 10,
    textAlign: 'center',
  }),
});
