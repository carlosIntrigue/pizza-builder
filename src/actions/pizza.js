/* Action Types*/
export const SET_CRUST = "SET_CRUST";
export const SET_BASE = "SET_BASE";
export const ADD_TOPPING = "ADD_TOPPING";
export const REMOVE_TOPPING = "REMOVE_TOPPING";

export function setCrust(crust){
  return {
    type:SET_CRUST,
    payload:crust
  }
}

export function setBase(base){
  return{
    type:SET_BASE,
    payload:base
  }
}

export function addTopings(topping){
  return{
    type:ADD_TOPPING,
    payload:topping
  }
}

export function removeToppings(index){
  return{
    type:REMOVE_TOPPING,
    payload:index
  }
}
