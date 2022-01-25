import loading from './new.svg'

export const initState = {
    pic: loading,
    isLoading: false
}

export type initStateType = typeof initState
export type ActionType =loadingActionType

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'loading': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): loadingActionType => {
    return {
        type: 'loading',
        payload:{
            isLoading: isLoading
        }
    }
} // fix any

type loadingActionType = {
    type: 'loading'
    payload:{
        isLoading: boolean
    }
}