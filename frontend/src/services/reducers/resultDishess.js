

const defVal = {
    ingArray : []
}
export const dishessReducer = (state = defVal, action) => {
    switch (action.type) {
        case "CURRENT_DISHESS" : {
            console.log(action.payload)
            return {...state, ingArray: action.payload}
        }
        default : return state
    }
}