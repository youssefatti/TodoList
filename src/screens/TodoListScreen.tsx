import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

import Header from '../components/Header';
import MainContainerScreen from '../components/MainContainerScreen';
import AddTodoButton from '../components/AddTodoButton';
import ListTodo from '../components/ListTodo';
import {StackParamList} from '../types/StackParamList';

type todoListScreenProps = StackNavigationProp<StackParamList, 'Home'>;

const TodoListScreen = () => {
  const navigation = useNavigation<todoListScreenProps>();
  const onPressAddTodo = () =>
    navigation.navigate('Details', {typeAction: 'add'});

  return (
    <MainContainerScreen>
      <Header title={'Toutes mes tâches'} />
      <ListTodo />
      <AddTodoButton onPress={onPressAddTodo} />
    </MainContainerScreen>
  );
};

export default TodoListScreen;
