import Adapter from "../../adapter";
import Api from "../../api";
import { updateActiveOrderHelper } from "../../utils/reducer-helper";

const initialState = {
  activeOrders: [],
};

const ActionType = {
  LOAD_ACTIVE_ORDERS_SUCCESS: "LOAD_ACTIVE_ORDERS_SUCCESS",

  // ADD_NEW_OPEN_TABLE: "ADD_NEW_OPEN_TABLE",
  UPDATE_ACTIVE_ORDER: "UPDATE_ACTIVE_ORDER",
  // REMOVE_OPEN_TABLE: "REMOVE_OPEN_TABLE",
  // CLOSE_TABLE: "CLOSE_TABLE",
};

export const ActionCreator = {
  loadActiveOrdersSuccess(orders) {
    return {
      type: ActionType.LOAD_ACTIVE_ORDERS_SUCCESS,
      payload: orders
    }
  },
  // addNewOpenTable(newTable) {
  //   return {
  //     type: ActionType.ADD_NEW_OPEN_TABLE,
  //     payload: newTable
  //   }
  // },
  updateAtiveOrder(updatedData) {
    return {
      type: ActionType.UPDATE_ACTIVE_ORDER,
      payload: updatedData
    }
  },
  // removeOpenTable(numberOfTable) {
  //   return {
  //     type: ActionType.REMOVE_OPEN_TABLE,
  //     payload: numberOfTable
  //   }
  // },
  // closeTable(table) {
  //   return {
  //     type: ActionType.CLOSE_TABLE,
  //     payload: table
  //   }
  // }
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
  updateAtiveOrder(payload) {
    return async (dispatch) => {
      try {
        const response = await Api.updateActiveOrder(payload);
        const updatedOrder = Adapter.getOrder(response);
        dispatch(ActionCreator.updateAtiveOrder(updatedOrder))
      } catch (error) {
        
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_ACTIVE_ORDERS_SUCCESS:
      return { ...state, activeOrders: action.payload }

    // case ActionType.ADD_NEW_OPEN_TABLE:
    //   return Object.assign(state, {
    //     openTables: {...state, openTables: action.payload}
    //   });

    case ActionType.UPDATE_ACTIVE_ORDER:
      return { ...state, activeOrders: state.activeOrders.map(order => {
        if (order.id === action.payload.id) {
          return action.payload;
        }
        return order
      })}

    // case ActionType.REMOVE_OPEN_TABLE:
    //   return { ...state, openTables: state.openTables.filter(it => it.numberOfTable !== action.payload) }

    // case ActionType.CLOSE_TABLE:
    //   return addToClosedTable(state, action);

    default:
      return state;
  }
}

