export function myReducer(state, action) {
    if(state === undefined) {
        return {
            cartItems: []
        }
    }

    switch(action.type) {
        case "addProduct":
            return {
                ...state,
                cartItems: state.cartItems.concat({
                    name: action.payload.name,
                    price: action.payload.price
                })
            }
        case "deleteProduct":
            let updatedItems = state.cartItems.filter(
                (product, index) => {
                    return index !== action.payload.index
                }
            )
            return {
                ...state,
                cartItems: updatedItems
            }
        default:
            return state;
    }
}
