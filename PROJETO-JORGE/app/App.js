import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import carinha from "./src/componentes/img/simple-cat-expression-png.webp";

export default function App() {
  const [showFact, setShowFact] = useState(false); // Estado para controlar a visibilidade do fato
  const [fact, setFact] = useState(''); // Estado para armazenar o fato atual

  // Array de fatos sobre gatos
  const catFacts = [
    "Gatos dormem cerca de 16 horas por dia.",
    "O ronronar dos gatos pode ter um efeito calmante nos humanos.",
    "Gatos podem saltar até seis vezes a altura do seu corpo.",
    "O nariz de cada gato é único, assim como as impressões digitais dos humanos.",
    "Gatos têm cinco dedos em cada uma das patas dianteiras, mas apenas quatro nas patas traseiras.",
    "Os gatos podem rotacionar as orelhas em 180 graus.",
    "Um grupo de gatos é chamado de clowder.",
    "Gatos domésticos compartilham 95,6% de sua genética com tigres.",
    "Gatos podem fazer mais de 100 sons diferentes, enquanto cães fazem cerca de 10.",
    "O cérebro de um gato é 90% semelhante ao de um humano.",
    "Gatos têm a habilidade de girar no ar durante uma queda, o que é conhecido como reflexo de endireitamento.",
    "Um gato pode viajar a uma velocidade de cerca de 48 km/h em curtas distâncias.",
    "Gatos não conseguem sentir o gosto de coisas doces.",
    "O coração de um gato bate quase o dobro da velocidade de um humano, entre 110 e 140 batidas por minuto.",
    "Gatos se comunicam com seus donos através de miados, o que raramente fazem com outros gatos.",
    "A maioria dos gatos odeia água porque sua pelagem não seca facilmente.",
    "Gatos têm uma terceira pálpebra chamada 'haw' que ajuda a proteger seus olhos.",
    "A língua de um gato tem pequenos espinhos que ajudam a segurar a comida e pentear a pelagem.",
    "Gatos domésticos são caçadores naturais e podem caçar até 1.000 espécies diferentes.",
    "Gatos esfregam suas cabeças em pessoas como uma forma de marcar território.",
    "Gatos podem ouvir sons de alta frequência que são imperceptíveis aos humanos.",
    "A expectativa de vida de um gato doméstico é de cerca de 12 a 15 anos, mas muitos vivem até 20 anos ou mais.",
    "Gatos podem 'amassar' objetos com as patas, um comportamento que remonta aos tempos de amamentação.",
    "Gatos são extremamente sensíveis às mudanças de temperatura e preferem ambientes quentes.",
    "Gatos têm glândulas de cheiro em suas bochechas e esfregam-se nas coisas para deixarem seu cheiro.",
    "Gatos podem ver em quase completa escuridão, pois possuem uma camada extra de células em seus olhos chamada tapetum lucidum.",
    "O 'miado' de um gato é uma forma de comunicação exclusivamente usada com humanos.",
    "Gatos têm uma espinha dorsal extremamente flexível, o que lhes permite serem muito ágeis.",
    "Os bigodes dos gatos são altamente sensíveis e podem detectar até mesmo pequenas mudanças no ambiente.",
    "Gatos geralmente preferem a comida morna, a uma temperatura próxima à de suas presas."
  ];

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
