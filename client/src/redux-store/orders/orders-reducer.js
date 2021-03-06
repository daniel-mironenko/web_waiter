import { Adapter, ToRAW } from "../../adapter";
import Api from "../../api";

const initialState = {
  activeOrders: [],
};

const ActionType = {
  LOAD_ACTIVE_ORDERS_SUCCESS: "LOAD_ACTIVE_ORDERS_SUCCESS",
  ADD_NEW_ACTIVE_ORDER: "ADD_NEW_ACTIVE_ORDER",
  UPDATE_ACTIVE_ORDER: "UPDATE_ACTIVE_ORDER",
  CLEAR_ACTIVE_ORDERS: "CLEAR_ACTIVE_ORDERS",
  CHANGE_WAITER_SUCCESS: "CHANGE_WAITER_SUCCESS",
  CLOSE_ORDER_SUCCESS: "CLOSE_ORDER_SUCCESS",
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
  },
  changeWaiterSuccess(id) {
    return {
      type: ActionType.CHANGE_WAITER_SUCCESS,
      payload: id
    }
  },
  closeOrderSuccess(id) {
    return {
      type: ActionType.CLOSE_ORDER_SUCCESS,
      payload: id
    }
  },
};

export const Operation = {
  loadActiveOrders(id, onSuccess, onError) {
    return async (dispatch) => {
      try {
        const response = await Api.fetchOrdersById(id)
        const activeOrders = response.map(order => Adapter.getOrder(order));
        dispatch(ActionCreator.loadActiveOrdersSuccess(activeOrders));
        onSuccess();
      } catch (error) {
        onError(error)
      }
    }
  },
  updateAtiveOrder(payload, onSuccess, onError) {
    return async (dispatch, getState) => {
      try {
        const response = await Api.updateActiveOrder(ToRAW.getOrder(payload));
        const updatedOrder = Adapter.getOrder(response);
        if (updatedOrder.waiterId !== getState().USER.userData.id) {
          dispatch(ActionCreator.changeWaiterSuccess(updatedOrder.id));
          onSuccess();
          return;
        }
        dispatch(ActionCreator.updateAtiveOrder(updatedOrder));
        onSuccess();
      } catch (error) {
        onError();
      }
    }
  },
  addNewActiveOrder(payload, onSuccess, onError) {
    return async (dispatch) => {
      try {
        const response = await Api.addNewActiveOrder(payload);
        const newOrder = Adapter.getOrder(response);
        dispatch(ActionCreator.addNewActiveOrder(newOrder));
        onSuccess();
      } catch (error) {
        onError();
      }
    }
  },
  closeOrder(payload, onSuccess, onError) {
    return async (dispatch) => {
      try {
        const response = await Api.updateActiveOrder(ToRAW.getOrder(payload));
        const updatedOrder = Adapter.getOrder(response);
        dispatch(ActionCreator.closeOrderSuccess(updatedOrder.id));
        onSuccess();
      } catch (error) {
        onError();
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_ACTIVE_ORDERS_SUCCESS:
      return { ...state, activeOrders: action.payload }

    case ActionType.ADD_NEW_ACTIVE_ORDER:
      return { ...state, activeOrders: [...state.activeOrders, action.payload] }

    case ActionType.UPDATE_ACTIVE_ORDER:
      return {
        ...state, activeOrders: state.activeOrders.map(order => {
          if (order.id === action.payload.id) {
            return action.payload;
          }
          return order
        })
      }

    case ActionType.CHANGE_WAITER_SUCCESS:
    case ActionType.CLOSE_ORDER_SUCCESS:
      return { ...state, activeOrders: state.activeOrders.filter(it => it.id !== action.payload) }

    case ActionType.CLEAR_ACTIVE_ORDERS:
      return { ...state, activeOrders: [] }

    default:
      return state;
  }
}

