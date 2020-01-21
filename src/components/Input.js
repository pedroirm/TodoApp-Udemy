import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({onChangeText, value}) => (
        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
        /> 
  )

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: "#c5c5c5",
        paddingLeft: 15,
        paddingBottom: 15,
        width: 320
    }
});

export default Input;