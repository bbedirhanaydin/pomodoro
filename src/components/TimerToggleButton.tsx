import React from 'react';
import {View, Text, Pressable} from 'react-native';
import AndDesign from 'react-native-vector-icons/Fontisto';

type Props = {
  isTimerRunning: boolean;
  stopTimer: () => void;
  startTimer: () => void;
};

const TimerToggleButton: React.FC<Props> = ({
  isTimerRunning,
  stopTimer,
  startTimer,
}) => {
  return (
    <View>
      <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
        <View>
          <AndDesign
            name={isTimerRunning ? 'pause' : 'play'}
            style={{fontSize: 40, color: '#fff'}}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default TimerToggleButton;
