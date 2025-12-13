import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Plato } from '../../entities/Plato'

interface Props {
    plato: Plato
    eliminar: (id: string) => void
}

const EliminarPlato = ({plato, eliminar}: Props) => {
    return (
        <View>
            <Text>{plato.nombre}</Text>
            <Text>{plato.precio}</Text>
            <Button
                onPress={() => eliminar(plato.id)}
                title="eliminar"
            />
        </View>
        
    )
}

export default EliminarPlato

const styles = StyleSheet.create({})