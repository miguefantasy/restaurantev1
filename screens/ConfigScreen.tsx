import { Button, StyleSheet, Text, View } from 'react-native'
import { useStateRestaurante } from '../context/Context'

const ConfigScreen = () => {

    const mesas = useStateRestaurante((state) => state.mesas);
    const sumarMesa = useStateRestaurante((state) => state.addMesas);
    const restarMesa = useStateRestaurante((state) => state.deleteMesas);

    return (
        <View>
            <Text>Numero de mesas del comedor: {mesas}</Text>

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