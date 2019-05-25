
export const initialCart = {}

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_ITEM":
        if (payload.id in state) {
          if (state[payload.id].amount < 999) {
            return {
              ...state,
              [payload.id]: {
                ...payload,
                amount: state[payload.id].amount + 1
              }
            }
          }
        }
        return {
          ...state,
          [payload.id]: {
            ...payload,
            amount: 1
          }
        }
  
      case "INCREMENT_ITEM":
        return {
          ...state,
          [payload.id]: {
            ...state[payload.id],
            amount: state[payload.id].amount + 1
          }
        }
  
      case "DECREMENT_ITEM":
        return {
          ...state,
          [payload.id]: {
            ...state[payload.id],
            amount: state[payload.id].amount - 1
          }
        }
        
      case "REMOVE_ITEM":
        const {[payload.id]: _, ...newState} = state
        return newState
        // return Object.assign({}, Object.entries(state).filter((id) => id !== payload.id))
  
      case "SET_ITEM_AMOUNT":
        return {
          ...state,
          [payload.id]: {
            ...state[payload.id],
            amount: payload.amount
          }
        }
  
      case "EMPTY_CART":
        return {}
  
      default:
        return state
    }
  }