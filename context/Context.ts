import { create } from 'zustand'
import { Plato } from '../entities/Plato'
import { Cuenta } from '../entities/Cuenta'

interface State {
    menu: Plato[],
    cuenta: Cuenta,
    addPlatoAlMenu: (menu: Plato) => void,
    deletePlatoDelMenu: (id: string) => void,
    addPlatoMesa: (cuenta: Plato) => void,
    deletePlatoMesa: (id: string) => void
}

export const useStateRestaurante = create<State>()((set) => ({
    menu: [],
    cuenta: [],
    addPlatoAlMenu: (menu) => set((state) => ({
        menu: [...state.menu, menu],
    })),
    deletePlatoDelMenu: (id) => set((state) => ({
        menu: state.menu.filter((item) => item.id !== id),
    })),
    addPlatoMesa: (cuenta) => set((state) => ({
        cuenta: [...state.cuenta, cuenta],
    })),
    deletePlatoMesa: (id) => set((state) => ({
        cuenta: state.cuenta.filter((item) => item.id !== id),
    })),
}))

