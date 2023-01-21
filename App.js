import {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {ActivityIndicator} from 'react-native';
import WeatherInfo from './components/WeatherInfo';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchWeatherData = async search => {
    try {
      setLoaded(false);
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
          search ? search : 'istanbul'
        }/today?units=metric&include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours&key=N3EEYCQL9ZGJW5FV94J47UBNT&contentType=json`,
        {
          'method': 'GET',
        }
      );
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else if (response.status == 400) {
        setNotFound(true);
      } else {
        setWeatherData('Not found!');
      }
      setLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      {
        loaded ? (
          <WeatherInfo
            weatherData={weatherData}
            fetchWeatherData={fetchWeatherData}
          />
        ) : null
        // <ActivityIndicator size="large" color="red" />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
