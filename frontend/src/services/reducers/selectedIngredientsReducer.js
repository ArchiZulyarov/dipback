

const defVal = {
    ingArray : []

}
export const ingReducer = (state = defVal, action) => {
    switch (action.type) {
        case "ALL_INGRIDIENTS" : {
            return {...state, ingArray: [...state.ingArray, action.payload]}
        }
        case "FILTERED" : {
            return {...state, ingArray: action.payload}
        }
        default : return state
    }
}

