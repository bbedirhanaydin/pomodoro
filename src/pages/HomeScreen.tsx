import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

import TimerCountDownDisplay from '../components/TimerCountDownDisplay';
import TimerToggleButton from '../components/TimerToggleButton';
import Lottie from 'lottie-react-native';

const FOCUS_TIME_MINUTES = 25 * 60 * 1000;
const BREAK_TIME_MINUTES = 5 * 60 * 1000;

function HomeScreen() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<any>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<'Focus' | 'Break'>('Focus');

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === 'Focus') {
        setTimerMode('Break');
        setTimerCount(BREAK_TIME_MINUTES);
      } else {
        setTimerMode('Focus');
        setTimerCount(FOCUS_TIME_MINUTES);
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => {
      setTimerCount(prev => prev - 1000);
    }, 1000);
    setTimerInterval(id);
  };

  const stopTimer = () => {
    if (timerInterval != null) {
      clearInterval(timerInterval);
    }
    setIsTimerRunning(false);
  };

  return (
    <View
      style={{
        ...styles.container,
        ...{backgroundColor: timerMode === 'Break' ? '#068DA9' : '#C85C5C'},
      }}>
      <View style={styles.containerAnime}>
        <Lottie
          source={
            timerMode === 'Break'
              ? require('../assets/break.json')
              : require('../assets/work.json')
          }
          autoPlay
          loop
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>{timerMode} Time</Text>
        <StatusBar
          backgroundColor={timerMode === 'Break' ? '#068DA9' : '#C85C5C'}
        />
        <TimerCountDownDisplay timerDate={new Date(timerCount)} />
        <TimerToggleButton
          isTimerRunning={isTimerRunning}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7A76C',
  },
  containerText: {
    flex: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerAnime: {
    flex: 6,
    width: 500,
    height: 500,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;
