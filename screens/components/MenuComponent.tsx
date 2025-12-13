import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Menu } from '../../entities/Menu'
import EliminarPlato from './EliminarPlato'

interface Props {
    state: Menu
    eliminar: (id: string) => void
}

const MenuComponent = (props: Props) => {
    return (
        <View>
            <FlatList
                data={props.state}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                <EliminarPlato plato={item} eliminar={props.eliminar}/>}
            />
        </View>
    )
}

export default MenuComponent

const styles = StyleSheet.create({})