import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>¡Bienvenido a la Calculadora!</Text>
      <Button title="Ir a Calculadora" onPress={() => navigation.navigate('Calculator')} />
    </View>
  );
};

export default MainScreen;
