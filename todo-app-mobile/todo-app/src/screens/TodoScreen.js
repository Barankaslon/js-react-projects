import React, {useState} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import { EditModal } from '../components/EditModal'
import { AppCard } from '../components/ui/AppCard'
import {THEME} from '../theme'
import {AppTextBold} from '../components/ui/AppTextBold'


export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal 
            value = {todo.title} 
            visible={modal} 
            onCancel={() => setModal(false)}
            onSave = {saveHandler}
            />

            <AppCard style={styles.card}>
            <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
            <Button title='Edit' onPress = {() => setModal(true)} />
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Back" 
                    onPress={goBack} 
                    color= {THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete" 
                    color={THEME.DANGER_COLOR} 
                    onPress={() => onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }

})