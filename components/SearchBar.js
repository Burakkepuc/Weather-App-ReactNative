import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';

const SearchBar = ({fetchWeatherData}) => {
  const [cityName, setCityName] = useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search City"
        value={cityName}
        onChangeText={text => setCityName(text)}
      ></TextInput>

      <AntDesign
        name="search1"
        size={20}
        color="dark"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: Dimensions.get('screen').width - 20, // -> For phone screen size
    width: 400, // -> for web emilator screen size.
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    border: 'none',
  },
});
export default SearchBar;
