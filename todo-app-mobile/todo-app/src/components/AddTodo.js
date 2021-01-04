import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Something wrong')
        }

    }

    return (
        <View style = {styles.block}>
            <TextInput
                 style = {styles.input}
                 onChangeText={setValue}
                 value={value}
                 placeholder="what do you want todo..."
                 autoCorrect={false}
                 autoCapitalize='none'
                 />
            <Button title='Add' onPress = {pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 5,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})