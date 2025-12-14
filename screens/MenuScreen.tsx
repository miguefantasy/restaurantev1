import { StyleSheet, Text, View } from 'react-native'
import InsertarPlato from './components/InsertarPlato'
import { useStateRestaurante } from '../context/Context';
import uuid from 'react-native-uuid';
import { Plato } from '../entities/Plato';
import MenuComponent from './components/MenuComponent';

const MenuScreen = () => {

    const nuevoPlatoDelMenu = useStateRestaurante((state) => state.addPlatoAlMenu);
    const eliminarPlatoDelMenu = useStateRestaurante((state) => state.deletePlatoDelMenu)
    const menu = useStateRestaurante((state) => state.menu);

    const detallesNuevoPlato = (nombre: string, precioString: string) => {
        const precioInt = parseInt(precioString);
        const nuevoPlato: Plato = {
            id: uuid.v4(),
            nombre: nombre,
            precio: precioInt
        };
        nuevoPlatoDelMenu(nuevoPlato)
    }

    const borrarPlato = (id: string) => {
        eliminarPlatoDelMenu(id)
    }

    return (
        <View>
            <Text>Menu del restaurante</Text>
            <InsertarPlato action={detallesNuevoPlato}/>
            <Text>Carta:</Text>
            <MenuComponent 
                state={menu}
                eliminar={borrarPlato}
            /> 
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})