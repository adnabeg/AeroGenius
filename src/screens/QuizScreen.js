import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Question from '../components/Question';
import questions from '../data/questions';

export default function QuizScreen({ route, navigation }) {
  const { category, difficulty } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  useEffect(() => {
    if (timeLeft === 0) {
      navigation.navigate('Review', { score, questions: questions[category][difficulty], correctAnswersCount });
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (correct) => {
    if (correct) {
      setScore(score + timeLeft);
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    if (currentQuestion < questions[category][difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate('Review', { score, questions: questions[category][difficulty], correctAnswersCount });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.quizTitle}>Airplane Quiz</Text>
        <Text style={{ color: '#fff', textAlign: 'center', marginVertical: 10 }}>
          Question <Text style={{color: '#e94560'}}>{currentQuestion + 1}</Text> of {questions[category][difficulty].length}
        </Text>
        <Text style={styles.timer}>
          Quiz | {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60} min
        </Text>
      </View>
      <Question
        question={questions[category][difficulty][currentQuestion]}
        onAnswer={handleAnswer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 30,
    paddingTop: 150,
  },
  header: {
    marginBottom: 20,
  },
  quizTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  timer: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
