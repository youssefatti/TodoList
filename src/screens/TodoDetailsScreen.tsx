import React, {useState} from 'react';
import {TextInput, StyleSheet, Dimensions, TextStyle} from 'react-native';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IconFont from 'react-native-vector-icons/FontAwesome';

import Colors from '../assets/Colors';
import Header from '../components/Header';
import MainContainerScreen from '../components/MainContainerScreen';
import {TodoItem, TodoTypesState} from '../types/TodoTypes';
import getRandomInt from '../utils/getRandomNumber';
import {RootState} from '../store/reducers/rootReducer';
import {addTodo, deleteTodo, editTodo} from '../store/actions/todoAction';
import {StackParamList} from '../types/StackParamList';

const {height} = Dimensions.get('window');

type TodoListDetailsScreenProps = NativeStackScreenProps<
  StackParamList,
  'Details'
>;

interface DispatchProps {
  readonly handleAddTodo: (payload: TodoItem) => void;
  readonly handleEditTodo: (payload: TodoItem) => void;
  readonly handleDeleteTodo: (key: string) => void;
}

interface StateProps {
  todos: TodoTypesState;
}

type Props = StateProps & TodoListDetailsScreenProps & DispatchProps;

const TodoDetailsScreen = (props: Props) => {
  const {route, navigation} = props;
  const data = route.params.data;
  const typeAction = route.params.typeAction;

  const [text, onChangeText] = useState<string>(data ? data.text : '');

  const onPressLeft = () => {
    if (typeAction === 'add' && text !== '') {
      props.handleAddTodo({
        text,
        key: getRandomInt(1, 10000).toString(), // Not the best way to generate unique key
      });
    }
    if (typeAction === 'edit') {
      if (text !== '') {
        props.handleEditTodo({
          text,
          key: data.key,
        });
      } else {
        props.handleDeleteTodo(data.key);
      }
    }
    navigation.goBack();
  };

  return (
    <MainContainerScreen>
      <Header
        onPressLeft={onPressLeft}
        iconLeft={<IconFont name="angle-left" size={30} color={Colors.dark} />}
        title={'Détails de ma tâche'}
      />
      <TextInput
        multiline
        autoFocus
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </MainContainerScreen>
  );
};

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAddTodo: (payload: TodoItem) => {
    dispatch(addTodo(payload));
  },
  handleEditTodo: (payload: TodoItem) => {
    dispatch(editTodo(payload));
  },
  handleDeleteTodo: (key: string) => {
    dispatch(deleteTodo(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailsScreen);

interface IStyles {
  readonly input: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  input: {
    minHeight: 50,
    maxHeight: height / 4,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: Colors.lighter,
    fontSize: 16,
    color: Colors.primary,
  },
});
