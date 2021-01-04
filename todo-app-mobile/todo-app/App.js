import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'Learn React Native' },
    { id: '2', title: 'Repeat React Native' }
  ])

  const addTodo = (title) => {

    setTodos(prev => [
      ...prev, 
      {
      id: Date.now().toString(),
      title
    }
  ])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      'Remove',
      `Are you sure, remove "${todo.title}"?`,
      [
        {
          text: 'NO',
          style: 'cancel'
        },
        { text: 'YES, Remove', 
          style: 'destructive'
          onPress: () => {
            setTodos(prev => prev.filter(todo => todo.id !== id))
          } 
      }
      ],
      { cancelable: false }
    )
  }

  let content = (
    <MainScreen 
        todos={todos} 
        addTodo={addTodo} 
        removeTodo={removeTodo} 
        openTodo={setTodoId}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo}/>
  }

  return (
    <View>
      <Navbar title= "Todo App" />
        <View style={styles.container}>
          { content }
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
