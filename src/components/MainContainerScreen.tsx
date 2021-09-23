import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ViewStyle} from 'react-native';

import Colors from '../assets/Colors';

const MainContainerScreen: FC = ({children}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default MainContainerScreen;

interface IStyles {
  readonly container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {flex: 1, backgroundColor: Colors.white},
});
