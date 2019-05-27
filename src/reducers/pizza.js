const initialState={
  crust:{
    size:"",
    type:""
  },
  base:{
    sauce:{
      hasSauce:true,
      type:"",
      amount:""
    },
    cheese:{
      hasCheese:true,
      type:"",
      amount:""
    }
  },
  toppings:[]

}
const pizzaReducer = (state = initialState, action)=>{
  const {payload} = action;
  switch (action.type) {
    case "SET_CRUST":
      return {...state, crust:payload}
    case "SET_BASE":
      return {...state, base:payload}
    case "ADD_TOPPING":
      return {...state, toppings:[...state.toppings, payload]}
    case "REMOVE_TOPPING":
      let temp = state.toppings;
      temp.splice(payload, 1);
      return {...state, toppings:[...state.toppings, payload]}
    default:
      console.log("Unkownn action");
      return state;
  }
}

export default pizzaReducer;