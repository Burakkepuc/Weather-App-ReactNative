import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>Weather App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    width: '100%',
    color: '#51A3A3',
  },
});
export default Header;
