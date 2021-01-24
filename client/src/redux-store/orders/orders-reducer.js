import { Adapter } from "../../adapter";
import Api from "../../api";

const initialState = {
  activeOrders: [],
};

const ActionType = {
  LOAD_ACTIVE_ORDERS_SUCCESS: "LOAD_ACTIVE_ORDERS_SUCCESS",
  ADD_NEW_ACTIVE_ORDER: "ADD_NEW_ACTIVE_ORDER",
  UPDATE_ACTIVE_ORDER: "UPDATE_ACTIVE_ORDER",
  CLEAR_ACTIVE_ORDERS: "CLEAR_ACTIVE_ORDERS"
};

export const ActionCreator = {
  loadActiveOrdersSuccess(orders) {
    return {
      type: ActionType.LOAD_ACTIVE_ORDERS_SUCCESS,
      payload: orders
    }
  },
  addNewActiveOrder(newOrder) {
    return {
      type: ActionType.ADD_NEW_ACTIVE_ORDER,
      payload: newOrder
    }
  },
  updateAtiveOrder(updatedData) {
    return {
      type: ActionType.UPDATE_ACTIVE_ORDER,
      payload: updatedData
    }
  },
  clearActiveOrders() {
    return {
      type: ActionType.CLEAR_ACTIVE_ORDERS,
      payload: null
    }
  }
};

export const Operation = {
  loadActiveOrders(id) {
    return async (dispatch) => {
      try {
        const response = await Api.fetchOrdersById(id)
        const activeOrders = response.map(order => Adapter.getOrder(order));
        dispatch(ActionCreator.loadActiveOrdersSuccess(activeOrders))
      } catch (error) {
        console.log(error)
      }
    }
  },
  updateAtiveOrder(payload, onSuccessSendOrder) {
    return async (dispatch) => {
      try {
        const response = await Api.updateActiveOrder(payload);
        const updatedOrder = Adapter.getOrder(response);
        dispatch(ActionCreator.updateAtiveOrder(updatedOrder));
        onSuccessSendOrder();
      } catch (error) {

      }
    }
  },
  addNewActiveOrder(payload) {
    return async (dispatch) => {
      try {
        const response = await Api.addNewActiveOrder(payload);
        const newOrder = Adapter.getOrder(response);
        dispatch(ActionCreator.addNewActiveOrder(newOrder))
      } catch (error) {
        
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_ACTIVE_ORDERS_SUCCESS:
      return { ...state, activeOrders: action.payload }

    case ActionType.ADD_NEW_ACTIVE_ORDER:
      return {...state, activeOrders: [...state.activeOrders, action.payload]}

    case ActionType.UPDATE_ACTIVE_ORDER:
      return {
        ...state, activeOrders: state.activeOrders.map(order => {
          if (order.id === action.payload.id) {
            return action.payload;
          }
          return order
        })
      }

    case ActionType.CLEAR_ACTIVE_ORDERS:
      return {...state, activeOrders: []}

    default:
      return state;
  }
}

