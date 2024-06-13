
export enum ActionTypes{
  ADD_QUANTITY = 'ADD_QUANTITY',
  REMOVE_QUANTITY = 'REMOVE_QUANTITY'
}

export function addQuantityAction(id: number){
  return {
    type: ActionTypes.ADD_QUANTITY,
    payload:{ id }
  }
}

export function removeQuantityAction(id: number){
  return {
    type: ActionTypes.REMOVE_QUANTITY,
    payload:{ id }
  }
}