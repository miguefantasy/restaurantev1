import { create } from 'zustand'
import { Cuenta } from '../entities/Cuenta'
import { Menu } from '../entities/Menu'
import { Plato } from '../entities/Plato'

interface State {
    //menu es de tipo Menu, un tipo que hemos creado, Menu es un Array de Platos
    menu: Menu,
    //cuenta es de tipo Cuenta, un tipo que hemos creado y es tambien un Array de Platos
    cuenta: Cuenta,
    //Añadimos mesas para tener el estado global del numero de mesas que queremos en nuestro restaurante
    mesas: number,

    addPlatoAlMenu: (menu: Plato) => void,
    deletePlatoDelMenu: (id: string) => void,
    addPlatoMesa: (cuenta: Plato) => void,
    deletePlatoMesa: (id: string) => void,

    //Metodos para las mesas
    addMesas: () => void,
    deleteMesas: () => void,
}

export const useStateRestaurante = create<State>()((set) => ({
    menu: [],
    cuenta: [],
    mesas: 0,
    
    addPlatoAlMenu: (plato) => set((state) => ({
        menu: [...state.menu, plato],
    })),
    deletePlatoDelMenu: (id) => set((state) => ({
        menu: state.menu.filter((item) => item.id !== id),
    })),
    addPlatoMesa: (plato) => set((state) => ({
        cuenta: [...state.cuenta, plato],
    })),
    deletePlatoMesa: (id) => set((state) => ({
        cuenta: state.cuenta.filter((item) => item.id !== id),
    })),
    addMesas: () => set((state) => ({
        mesas: state.mesas +1
    })),
    deleteMesas: () => set((state) => ({
        mesas: state.mesas -1
    }))
}))

