import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import configureStore from './src/store/configureStore';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
