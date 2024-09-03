import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ route, navigation }) {
  const [inputValue, setInputValue] = useState('');
  const [facts, setFacts] = useState(route.params?.facts || []); // Recebe o array de fatos da tela anterior

  const handleAddFact = async () => {
    if (inputValue.trim()) {
      const newFacts = [...facts, inputValue];
      setFacts(newFacts); // Adiciona o novo fato ao array
      setInputValue(''); // Limpa o campo de entrada
      Alert.alert('Sucesso', 'Fato cadastrado com sucesso!'); // Mensagem de sucesso

      // Salva os fatos no AsyncStorage
      try {
        await AsyncStorage.setItem('@cat_facts', JSON.stringify(newFacts));
      } catch (error) {
        console.error('Erro ao salvar os fatos no AsyncStorage:', error);
      }
    } else {
      Alert.alert('Erro', 'O campo de entrada está vazio.'); // Mensagem de erro
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre um fato aqui</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo aqui..."
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddFact}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc', // Cor de fundo bege
  },
  title: {
    fontSize: 24,
    color: '#8b4513', // Cor marrom
    fontWeight: 'bold',
    marginBottom: 20, // Espaço entre o título e o campo de entrada
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#8b4513', // Cor da borda
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8b4513', // Cor do botão
    padding: 15, // Aumenta o padding para deixar o botão maior
    borderRadius: 30, // Borda arredondada
    width: '50%', // Largura do botão
    alignItems: 'center', // Centraliza o texto no botão
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Cor do texto (branco)
  },
});
