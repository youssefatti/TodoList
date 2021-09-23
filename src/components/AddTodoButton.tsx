import React from 'react';
import {Pressable, Dimensions, ViewStyle, StyleSheet} from 'react-native';
import IconFont from 'react-native-vector-icons/FontAwesome';

import Colors from '../assets/Colors';

const {width} = Dimensions.get('window');

const AddTodoButton = ({
  onPress,
  containerStyle,
  iconColor = Colors.white,
}: {
  onPress: () => void;
  containerStyle?: ViewStyle;
  iconColor?: string;
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <IconFont name="plus" size={25} color={iconColor} />
    </Pressable>
  );
};

export default AddTodoButton;

interface IStyles {
  readonly container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    position: 'absolute',
    bottom: 30,
    left: (width - 50) / 2,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});
