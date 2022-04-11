import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {FotoPelayanan} from '../../assets';

const News = ({onPress, navigation}) => {
  return (
    <View>
      <Text style={styles.headerTitle}>Berita Terkini</Text>
      <ScrollView>
        <View style={{marginBottom: 100}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsDetail')}
            style={{
              marginTop: 30,
              alignItems: 'center',
              backgroundColor: '#E5E5E5',
              marginHorizontal: 46,
              borderRadius: 10,
            }}>
            <View>
              <Image
                source={FotoPelayanan}
                style={{
                  width: 300,
                  height: 150,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text style={{padding: 10}}>Tes 123 Tes 123 Tes 123</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            style={{
              marginTop: 30,
              alignItems: 'center',
              backgroundColor: '#E5E5E5',
              marginHorizontal: 46,
              borderRadius: 10,
            }}>
            <View>
              <Image
                source={FotoPelayanan}
                style={{
                  width: 300,
                  height: 150,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text style={{padding: 10}}>Tes 123 Tes 123 Tes 123</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            style={{
              marginTop: 30,
              alignItems: 'center',
              backgroundColor: '#E5E5E5',
              marginHorizontal: 46,
              borderRadius: 10,
            }}>
            <View>
              <Image
                source={FotoPelayanan}
                style={{
                  width: 300,
                  height: 150,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text style={{padding: 10}}>Tes 123 Tes 123 Tes 123</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            style={{
              marginTop: 30,
              alignItems: 'center',
              backgroundColor: '#E5E5E5',
              marginHorizontal: 46,
              borderRadius: 10,
            }}>
            <View>
              <Image
                source={FotoPelayanan}
                style={{
                  width: 300,
                  height: 150,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text style={{padding: 10}}>Tes 123 Tes 123 Tes 123</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    color: '#000',
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 24,
  },
});
