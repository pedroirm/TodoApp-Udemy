import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Input from './Input';
import { connect } from 'react-redux';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }
    
    onPress() {
        const { todo } = this.props;
        if(todo.id)
            return this.props.dispachUpdateTodo(todo)
        
        const { text } = this.props.todo;
        this.props.dispatchAddTodo(text)
    }

    render() {
        const { text, id } = this.props.todo;
        return (
            <View style={styles.container}>
                <View>
                    <Input 
                        style={styles.input}
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View>
                    <Button 
                        style={styles.button}
                        title={id ? "save" : "add"}
                        onPress={() => this.onPress()}
                    />
                   </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        flex: 1
    },
    input: {
        flex: 5
    },
})

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}
export default connect(mapStateToProps,
     {
     dispatchAddTodo: addTodo,
     dispatchSetTodoText: setTodoText,
     dispachUpdateTodo: updateTodo
     })
    (TodoForm)