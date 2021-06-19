const initialState = {
    products : [],
    totalprice:0,
    totalquantity:0
}

const CartReducer = (state=initialState,action) => {
    switch (action.type){
        case 'ADD_TO_CART':
        //     console.log(action.payload.product.id)
        // const check = state.products.find(product => product.id === action.payload.product.id)

            //destructure//
        const {product,incQuantity} = action.payload
        // console.log(product.id,incQuantity)
        const check = state.products.find(pr => pr.id === product.id)
        if (check){
            return state
        } else {
            const Tprice = state.totalprice + product.price * incQuantity; 
            const Tquantity = state.totalquantity + incQuantity;
            product.quantity = incQuantity;
            console.log(Tprice,Tquantity, incQuantity)
            return{
                ...state,products: [...state.products,product],totalprice: Tprice ,totalquantity: Tquantity
            }
        }

        default:return state
    }
}

export default CartReducer;