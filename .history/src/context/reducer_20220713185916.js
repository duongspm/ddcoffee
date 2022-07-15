export const actionType = {
    SET_USER: "SET_USER",
    SET_DRINK_ITEMS : "SET_DRINK_ITEMS"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };
            
        default:
            return state;
    }
};

export default reducer;