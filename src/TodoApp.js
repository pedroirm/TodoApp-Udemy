import React from 'react'
import {View, StyleSheet } from 'react-native'
import rootReducer from './reducers';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import devToolsEnhacer from 'remote-redux-devtools'

const store = createStore(rootReducer, devToolsEnhacer())

export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
    )}
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    }
})