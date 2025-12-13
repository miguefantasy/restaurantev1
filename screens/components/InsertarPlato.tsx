import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface Props{
    action: (plato: string, precio: string) => void 
}

const InsertarPlato = (props: Props) => {
    const [nombre, setNombrePlato] = React.useState('');
    const [precio, setPrecioPlato] = React.useState('');
    //Como el id lo generamos random con el uuid solo tenemos que setear nombre y precio aqui
    const detallesPlato = () => {
        props.action(nombre, precio);
        //Usamos esto porque queremos que se vacien cuando añadimos un plato
        setNombrePlato('');
        setPrecioPlato('');
    }

    return (
        <View>
            <Text>Añadir plato</Text>
            <TextInput
                onChangeText={setNombrePlato}
                value={nombre}
                placeholder="Nuevo plato"
            />

            <TextInput
                onChangeText={setPrecioPlato}
                value={precio}
                placeholder="Precio en euros"
            />

            <Button
                onPress={detallesPlato}
                title="Añadir plato"
                color="#3624ffff"
                accessibilityLabel="Añade este plato al menu"
            />
        </View>
    )
}
export default InsertarPlato

const styles = StyleSheet.create({})