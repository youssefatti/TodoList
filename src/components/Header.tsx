import React, {ReactElement} from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  TextStyle,
  Pressable,
} from 'react-native';

import Colors from '../assets/Colors';

const Header = ({
  title,
  containerStyle,
  titleStyle,
  iconLeft = null,
  iconRight = null,
  onPressLeft,
  onPressRight,
}: {
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  iconLeft?: ReactElement | null;
  iconRight?: ReactElement | null;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable style={styles.containerIcon} onPress={onPressLeft}>
        {iconLeft}
      </Pressable>
      <View style={styles.containerTitle}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      <Pressable style={styles.containerIcon} onPress={onPressRight}>
        {iconRight}
      </Pressable>
    </View>
  );
};

export default Header;

interface IStyles {
  readonly container: ViewStyle;
  readonly containerIcon: ViewStyle;
  readonly containerTitle: ViewStyle;
  readonly title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerIcon: {flex: 0.5},
  containerTitle: {flex: 1},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
});
