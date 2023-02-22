const initialState={
    cart:[],
    allData:[],
    cartValue:0,
    loaded:false
}
 function search(array,object) 
 {
   for(let i=0;i<array.length;i++)
   {
    if(array[i].id==object.id)
    {
        return i;
    }
   }
   return -1; 
 }
 function calculatePrice(array)
 {
    return array.reduce((acc,curr)=>
    {
       acc+=(curr.quantity*curr.price);
       return acc;
    },0)
 }
export const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "LOAD_FIRST":
            
            return {...state,allData:action.payload,loaded:true}
        case "ADD_TO_CART":
             let {cart}=state;
             let ind=search(cart,action.payload)
             if(ind==-1)
             {
                 cart.push(action.payload);
             }
             else
             {
               cart[ind].quantity=cart[ind].quantity+1 
             }
             let temp=calculatePrice(state.cart)
             return {...state,cart:cart,cartValue:temp}
        case "REMOVE_FROM_CART":
            state.cart.splice(action.payload,1);
            let temp2=calculatePrice(state.cart)
            return {...state,cartValue:temp2};
        case "DEC_BY_ONE":
            let ind2=search(state.cart,action.payload);
            state.cart[ind2].quantity=state.cart[ind2].quantity-1;
            let temp3=calculatePrice(state.cart)
            return {...state,cartValue:temp3};    
        default :
            return state ;   

    }
}