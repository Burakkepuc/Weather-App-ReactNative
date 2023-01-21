import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {getIcon} from './iconsMap';
import styled from 'styled-components/native';
import SearchBar from './SearchBar';
import Header from './Header';

const WeatherInfo = ({weatherData, fetchWeatherData}) => {

  const weatherDescription = weatherData.days[0];
  const {temp} = weatherDescription;
  const {conditions} = weatherDescription;
  const {icon} = weatherDescription;

  function convertFahrenheitToCelsius(degrees) {
    return Math.floor((5 / 9) * (degrees - 32));
  }

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar fetchWeatherData={fetchWeatherData} />
      <Text style={{color: '#DD7373', fontSize: 16, fontWeight: '700'}}>
        {weatherData?.resolvedAddress}
      </Text>
      <Text style={styles.boldText}>{weatherData?.description}</Text>

      <Text style={styles.boldText}>{conditions}</Text>
      <WeatherIcon
        source={{
          uri: `http://openweathermap.org/img/wn/${getIcon(icon)}@2x.png`,
        }}
        resizeMode={'contain'}
      />
      <Text style={styles.boldText}>
        The degree is {convertFahrenheitToCelsius(+temp)} °C
      </Text>
    </View>
  );
};

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',

    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  boldText: {
    fontWeight: '600',
    color: '#3B3561',
  },
});

export default WeatherInfo;
