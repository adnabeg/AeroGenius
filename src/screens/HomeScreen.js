import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomPicker from '../components/CustomPicker';

export default function HomeScreen({ navigation }) {
  const [category, setCategory] = useState('commercial');
  const [difficulty, setDifficulty] = useState('easy');
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const categoryOptions = [
    { label: 'Commercial Airplanes', value: 'commercial' },
    { label: 'Military Aircraft', value: 'military' },
  ];

  const difficultyOptions = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Animated.View style={animatedStyle}>
            <Icon name="airplane-outline" size={25} color="#fff" style={styles.headerIcon} />
          </Animated.View>
          <Text style={styles.headerTitle}>Aero Genius</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.mainTitle}>Choose Your Quiz</Text>
        <CustomPicker
          label="Click to Select Category"
          value={category}
          setValue={setCategory}
          options={categoryOptions}
        />
        <CustomPicker
          label="Click to Select Difficulty"
          value={difficulty}
          setValue={setDifficulty}
          options={difficultyOptions}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', { category, difficulty })}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
        <Text style={styles.note}>Your score will be calculated based on correct answers and the time remaining.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    backgroundColor: '#e94560',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    marginRight: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e94560',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8181a1',
    textAlign: 'center',
    marginTop: 50,
  },
});
