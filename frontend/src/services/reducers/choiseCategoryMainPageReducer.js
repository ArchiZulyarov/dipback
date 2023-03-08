
const defVal = {
    valArr : []
}
export const ChoiseCategoryMainPageReducer = (state = defVal, action) => {

    switch (action.type) {
        case "MAIN_PAGE" : {
            return {...state, valArr: action.payload}
        }
        default : return state
    }
}