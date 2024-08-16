import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import carinha from "./src/componentes/img/simple-cat-expression-png.webp";
import { catFacts } from "./src/constants/randowfacts";

export default function App() {
  const [showFact, setShowFact] = useState(false); // Estado para controlar a visibilidade do fato
  const [fact, setFact] = useState(''); // Estado para armazenar o fato atual

  // Array de fatos sobre gatos

  // Função para exibir um fato aleatório
  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setFact(catFacts[randomIndex]);
    setShowFact(true);
  };

  return (
    <View style={styles.container}>
      {!showFact ? ( // Se não há fato, mostrar o texto inicial
        <Text style={styles.customText}>Para fatos sobre gatos clique aqui !!!!</Text>
      ) : ( // Caso contrário, mostrar o fato
        <Text style={styles.factText}>{fact}</Text>
      )}

      <Image source={carinha} style={styles.image} resizeMode="contain" /> {/* Ajuste a imagem aqui */}

      <TouchableOpacity style={styles.button} onPress={showRandomFact}>
        <Text style={styles.buttonText}>😺</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Tom de bege
    alignItems: 'center',
    justifyContent: 'center',
  },
  customText: {
    fontSize: 30, // Aumenta o tamanho do texto
    color: '#8b4513', // Marrom, igual ao botão
    fontWeight: 'bold', // Negrito
    marginBottom: 20, // Espaço entre o texto e a imagem
    textAlign: 'center', // Centraliza o texto
  },
  factText: {
    fontSize: 18, // Tamanho do texto do fato
    color: '#8b4513', // Marrom, igual ao botão
    fontWeight: 'bold', // Negrito
    textAlign: 'center',
    paddingHorizontal: 20, // Margem horizontal para centralizar melhor
  },
  button: {
    position: 'absolute',
    bottom: 30, // Alinha o botão na parte inferior
    backgroundColor: '#8b4513', // Marrom
    padding: 20, // Aumenta o tamanho do botão
    borderRadius: 10, // Bordas arredondadas
    width: '80%', // Largura do botão
    alignItems: 'center', // Centraliza o ícone
  },
  buttonText: {
    fontSize: 24, // Aumenta o tamanho do ícone de gato
    color: '#fff', // Cor do texto (branco)
  },
  image: {
    position: 'absolute',
    bottom: 100, // Ajusta a imagem para ficar mais acima do botão
    width: 150, // Ajuste a largura da imagem
    height: 150, // Ajuste a altura da imagem
    marginBottom: 20, // Espaço abaixo da imagem
  },
});
