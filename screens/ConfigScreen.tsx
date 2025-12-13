import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const ConfigScreen = () => {

    const [numMesas, setNumMesas] = useState(0);

    const sumarMesa = () => {
        setNumMesas(numMesas + 1);
    }

    const restarMesa = () => {
        setNumMesas(numMesas - 1);
    }

    return (
        <View>
            <Text>Numero de mesas del comedor: {numMesas}</Text>

            <Button 
            title = "+1"
            onPress = {sumarMesa}
            />

            <Button 
            title = "-1"
            onPress = {restarMesa}
            />
        </View>
    )
}

export default ConfigScreen

const styles = StyleSheet.create({})