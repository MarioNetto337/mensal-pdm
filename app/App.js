import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import carinha from "./src/componentes/img/simple-cat-expression-png.webp";
import { catFacts } from "./src/constants/randowfacts";
import CadastroScreen from './src/screens/CadastroScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [showFact, setShowFact] = useState(false);
  const [fact, setFact] = useState('');

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setFact(catFacts[randomIndex]);
    setShowFact(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={carinha} style={styles.image} resizeMode="contain" />

        {!showFact ? (
          <Text style={styles.customText}>Para fatos sobre gatos clique aqui !!!!</Text>
        ) : (
          <Text style={styles.factText}>{fact}</Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigation.navigate('Cadastro', { facts: catFacts })} // Passa o array de fatos para a tela de cadastro
      >
        <Text style={styles.registerButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showRandomFact}>
        <Text style={styles.buttonText}>😺</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginBottom: 150,
  },
  customText: {
    fontSize: 30,
    color: '#8b4513',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  factText: {
    fontSize: 18,
    color: '#8b4513',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  registerButton: {
    position: 'absolute',
    bottom: 130,
    backgroundColor: '#8b4513',
    padding: 10,
    borderRadius: 30,
    width: '50%',
    alignItems: 'center',
  },
  registerButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#8b4513',
    padding: 25,
    borderRadius: 30,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
