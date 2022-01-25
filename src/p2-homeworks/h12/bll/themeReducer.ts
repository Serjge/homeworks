const initState = {
theme : ''
};

export type initStateType = typeof initState
type ActionType = changeThemeCType

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.payload.color};
        }
        default: return state;
    }
};

type changeThemeCType = {
    type: 'CHANGE_THEME'
    payload:{
        color: string
    }
}

export const changeThemeC = (color:string): changeThemeCType => {
   return {
       type: "CHANGE_THEME",
       payload: {
           color: color
       }
   }
}; // fix any