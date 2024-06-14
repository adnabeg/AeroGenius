import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

export default function ReviewScreen({ route, navigation }) {
  const { score, questions, correctAnswersCount } = route.params;

  return (
    
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
  <Text style={styles.buttonText}>Take a new quiz</Text>
</TouchableOpacity>
      <Text style={styles.title}>Your Score: {score}</Text>
      <Text style={styles.subtitle}>Number of Correct Answers: {correctAnswersCount} out of {questions.length}</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.questionText}>{question.text}</Text>
          <Text style={styles.answerText}>Correct Answer: {question.answers.find((answer) => answer.correct).text}</Text>
          <Text style={styles.answerText}>Explanation: {question.explanation}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 30,
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  card: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#2e2e4d',
    borderRadius: 5,
    borderColor: '#2e2e4d',
    borderWidth: 1,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
  answerText: {
    fontSize: 15,
    marginBottom: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#e94560',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
