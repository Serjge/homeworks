import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortArr = [...state.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            })]
            return action.payload === 'up' ? sortArr : sortArr.reverse()
        }
        case 'check': {
            return state.filter(a => a.age >= action.payload)
        }
               default:
            return state
    }
}

export type sortFilter = 'up' | 'down'
type actionType = ReturnType<typeof sortAC>
    | ReturnType<typeof checkAC>


const sortAC = (filter: sortFilter) => {
    return {
        type: 'sort',
        payload: filter
    } as const
}

const checkAC = (age: number) => {
    return {
        type: 'check',
        payload: age
    } as const
}
