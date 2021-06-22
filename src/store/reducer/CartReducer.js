const initialState = {
    products : [],
    totalprice:0,
    totalquantity:0
}

const CartReducer = (state=initialState,action) => {
    let findPro;
    let index;
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

        case 'INC':
        findPro = state.products.find(product => product.id === action.payload);
        index = state.products.findIndex(product => product.id === action.payload);
        findPro.quantity += 1;
        state.products[index]=findPro;
        // console.log(findPro,index);
        return{
            ...state , totalprice: state.totalprice + findPro.price , totalquantity: state.totalquantity + 1
        }

        case 'DEC':
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if(findPro.quantity > 1){
                findPro.quantity -= 1;
                state.products[index]=findPro;
                return{
                    ...state , totalprice: state.totalprice - findPro.price , totalquantity: state.totalquantity - 1
                }
            }else {
                return state;
            }

            case 'DELETE' :
            findPro = state.products.find(product => product.id === action.payload);
            const filtered = state.products.filter(product => product.id !== action.payload);
            return{
                ...state , products : filtered ,
                totalprice: state.totalprice - findPro.price * findPro.quantity , totalquantity: state.totalquantity - findPro.quantity
            }

        default:return state
    }
}

export default CartReducer;