import { ADD, Delete, Totalprice } from "./Actiontype"

const init={
    cart:[],
    price:0
}

export const BagReducer = (store = init, {type, payload})=>{
    switch(type){
        case ADD:
         return {...store, cart:[...store.cart , payload] , }
        case Delete:
        store.cart.splice(payload, 1);
        return{...store , cart:[...store.cart]} 
 
         case Totalprice:
            return {...store, price: store.price + payload}

        default:
            return{...store}
    }
}
// [...store.cart, payload]
// return{...store ,cart :function (){
//     if(!this.cart.includes(payload)){
//        this.store.cart =  [...this.store.cart, this.payload ]
//     }
// }}