import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  timerDate: Date;
};

const TimerCountDownDisplay: React.FC<Props> = ({timerDate}) => {
  return (
    <View>
      <Text style={styles.text}>
        {timerDate.getMinutes().toString().padStart(2, '0')}:
        {timerDate.getSeconds().toString().padStart(2, '0')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default TimerCountDownDisplay;
