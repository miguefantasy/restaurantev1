import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStateRestaurante } from '../context/Context'

const MesasScreen = () => {

    const mesas = useStateRestaurante((state) => state.mesas);
    const numMesas = Array.from({length: mesas}, (_,i) => i +1);

    return (
        <View>
            <Text>Mesas</Text>
            <FlatList 
                data={numMesas}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => (
                    <View>
                        <Button
                            title={"Mesa"}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default MesasScreen

const styles = StyleSheet.create({})
