import { ADD, Delete, Totalprice } from "./Actiontype";


export const AddToBag= (payload)=>({
    type:ADD,
    payload

})

export const DeleteFromBag = (payload)=>({
    type:Delete,
    payload
})

export const TotalPriceOfBag = (payload) =>({
    type:Totalprice,
    payload
})