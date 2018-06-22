export function myReducer(state, action) {
    if(state === undefined) {
        return {
            cartItems: [{
                name: "Item1",
                price: 100
            }]
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
                product => product.name !== action.payload.name
            )
            return {
                ...state,
                cartItems: updatedItems
            }
        default:
            return state;
    }
}
