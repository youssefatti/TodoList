import React, {useCallback} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import IconFont from 'react-native-vector-icons/FontAwesome';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';

import {RootState} from '../store/reducers/rootReducer';
import Colors from '../assets/Colors';
import {StackParamList} from '../types/StackParamList';
import {TodoItem, TodoTypesState} from '../types/TodoTypes';
import {deleteTodo} from '../store/actions/todoAction';
import EmptyList from './EmptyList';

type TodoListScreenProps = StackNavigationProp<StackParamList, 'Home'>;

interface DispatchProps {
  readonly handleDeleteTodo: (key: string) => void;
}

interface StateProps {
  readonly todos: TodoTypesState;
}

type Props = DispatchProps & StateProps;

const heightList = 40;
const widthBackButton = 50;

const ListTodo = (props: Props) => {
  const navigation = useNavigation<TodoListScreenProps>();

  const keyExtractor = useCallback((item: TodoItem) => item.key, []);

  const closeRow = (rowMap: RowMap<TodoItem>, rowKey: string) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const removeItem = (item: TodoItem, rowMap: RowMap<TodoItem>) => {
    closeRow(rowMap, item.key);
    props.handleDeleteTodo(item.key);
  };

  const onPressModify = (item: TodoItem, rowMap: RowMap<TodoItem>) => {
    closeRow(rowMap, item.key);
    navigation.navigate('Details', {data: item, typeAction: 'edit'});
  };

  const renderItem = (item: TodoItem, rowMap: RowMap<TodoItem>) => {
    return (
      <Pressable onPress={() => onPressModify(item, rowMap)}>
        <View style={[styles.rowFront]}>
          <Text
            style={styles.textItem}
            ellipsizeMode={'tail'}
            numberOfLines={1}>
            {item.text}
          </Text>
        </View>
      </Pressable>
    );
  };

  const renderHiddenItem = useCallback(
    (item: TodoItem, rowMap: RowMap<TodoItem>) => {
      const iconStyle = {size: 20, color: Colors.white};
      return (
        <View style={styles.rowBack}>
          <Pressable
            style={[
              styles.containerBackButton,
              styles.blue,
              styles.borderRadiusLeft,
            ]}
            onPress={() => onPressModify(item, rowMap)}>
            <IconFont name={'pencil-square-o'} {...iconStyle} />
          </Pressable>
          <Pressable
            style={[
              styles.containerBackButton,
              styles.red,
              styles.borderRadiusRight,
            ]}
            onPress={() => removeItem(item, rowMap)}>
            <IconFont name={'trash-o'} {...iconStyle} />
          </Pressable>
        </View>
      );
    },
    [],
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.mainContainer}>
      <SwipeListView
        keyExtractor={keyExtractor}
        disableRightSwipe
        closeOnRowBeginSwipe
        contentContainerStyle={styles.containerList}
        data={props.todos}
        ListEmptyComponent={<EmptyList />}
        renderItem={(item, rowMap) => renderItem(item.item, rowMap)}
        renderHiddenItem={(item, rowMap) => renderHiddenItem(item.item, rowMap)}
        ItemSeparatorComponent={renderSeparator}
        rightOpenValue={-((widthBackButton + 10) * 2)}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleDeleteTodo: (key: string) => {
    dispatch(deleteTodo(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);

interface IStyles {
  readonly mainContainer: ViewStyle;
  readonly containerList: ViewStyle;
  readonly rowFront: ViewStyle;
  readonly textItem: TextStyle;
  readonly rowBack: ViewStyle;
  readonly containerBackButton: ViewStyle;
  readonly red: ViewStyle;
  readonly borderRadiusRight: ViewStyle;
  readonly blue: ViewStyle;
  readonly borderRadiusLeft: ViewStyle;
  readonly separator: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  containerList: {flexGrow: 1, paddingVertical: 50},
  rowFront: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: heightList,
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  textItem: {fontSize: 16, color: Colors.primary},
  rowBack: {
    height: heightList,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    paddingRight: 5,
    marginHorizontal: 20,
  },
  containerBackButton: {
    height: heightList,
    width: widthBackButton,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {backgroundColor: Colors.red},
  borderRadiusRight: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  blue: {backgroundColor: Colors.blue},
  borderRadiusLeft: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  separator: {marginVertical: 10},
});
