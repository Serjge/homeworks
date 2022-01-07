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
        case 'check-up': {
            const sortArrName = [...state].sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            })
            // обычный ситаксис
            // let result: UserType[]
            //
            // if (action.payload.filter === 'up') {
            //    result = sortArrName.filter(a => a.age >= action.payload.age)
            // }else if (action.payload.filter === 'down') {
            //     result = sortArrName.reverse().filter(a => a.age >= action.payload.age)
            // }else {
            //     result = state.filter(a => a.age >= action.payload.age)
            // }
            // return result

            //синтаксис тернарником
            return (action.payload.filter === 'up')
                ? sortArrName.filter(a => a.age >= action.payload.age)
                : (action.payload.filter === 'down')
                    ? sortArrName.reverse().filter(a => a.age >= action.payload.age)
                    : state.filter(a => a.age >= action.payload.age)
        }

        default:
            return state
    }
}

export type sortFilter = 'default' | 'up' | 'down'
type actionType = ReturnType<typeof sortAC>
    | ReturnType<typeof checkAC>
    | ReturnType<typeof checkUpAC>

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
const checkUpAC = (age: number, filter: sortFilter) => {
    return {
        type: 'check-up',
        payload: {
            age,
            filter
        }
    } as const
}

