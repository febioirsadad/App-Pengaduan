import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import {LogoKemendag} from '../../assets';
import ButtonIcon from '../../components/ButtonIcon';
import Gap from '../../components/Gap';

const Home = ({navigation}) => {
  return (
    <View style={{marginTop: 30}}>
      <View style={styles.itemHeader}>
        <View style={{paddingLeft: 30}}>
          <Image source={LogoKemendag} />
        </View>
        <View style={styles.buttonHeader}>
          <ButtonIcon
            title={'Notif'}
            onPress={() => navigation.navigate('Notif')}
          />
          <Gap width={10} />
          <ButtonIcon
            title={'Bantuan'}
            onPress={() => navigation.navigate('Bantuan')}
          />
        </View>
      </View>
      <View style={styles.iconLayanan}>
        <ButtonIcon
          title="Berita"
          type="layanan"
          // onPress={() => alert('Horee')}
          onPress={() => navigation.navigate('News')}
        />
        <ButtonIcon
          title="Pengaduan"
          type="layanan"
          onPress={() => navigation.navigate('Laporan')}
        />
        <ButtonIcon
          title="UU PK"
          type="layanan"
          onPress={() => navigation.navigate('Uupk')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  itemHeader: {},
  buttonHeader: {
    paddingTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 30,
  },
});
