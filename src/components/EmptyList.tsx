import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Colors from '../assets/Colors';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ajoutez vos tâches</Text>
    </View>
  );
};

export default EmptyList;

interface IStyles {
  readonly container: ViewStyle;
  readonly text: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
