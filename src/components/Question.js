import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function Question({ question, onAnswer }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.questionText}>{question.text}</Text>
        {question.answers.map((answer, index) => (
          <Button key={index} mode="contained" style={styles.answerButton} onPress={() => onAnswer(answer.correct)}>
            {answer.text}
          </Button>
        ))}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
  },
  questionText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  answerButton: {
    marginVertical: 5,
    backgroundColor: '#e94560',
    borderRadius: 10,
    marginTop: 20,
  },
});
