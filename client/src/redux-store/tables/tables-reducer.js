import { closedTableMock } from "../../mock/closed-table-mock";
import { tablesMock } from "../../mock/tableMock";
import { addToClosedTable, updateTable } from "../../utils/reducer-helper";

const initialState = {
  openTables: tablesMock,
  closedTables: {}
};

const ActionType = {
  LOAD_OPEN_TABLES: "LOAD_OPEN_TABLES",
  ADD_NEW_OPEN_TABLE: "ADD_NEW_OPEN_TABLE",
  UPDATE_OPEN_TABLE: "UPDATE_OPEN_TABLE",
  REMOVE_OPEN_TABLE: "REMOVE_OPEN_TABLE",
  CLOSE_TABLE: "CLOSE_TABLE"
};

export const ActionCreator = {
  loadOpenTables(tables) {
    return {
      type: ActionType.LOAD_OPEN_TABLES,
      payload: tables
    }
  },
  addNewOpenTable(newTable) {
    return {
      type: ActionType.ADD_NEW_OPEN_TABLE,
      payload: newTable
    }
  },
  updateOpenTable(updatedData) {
    return {
      type: ActionType.UPDATE_OPEN_TABLE,
      payload: updatedData
    }
  },
  removeOpenTable(numberOfTable) {
    return {
      type: ActionType.REMOVE_OPEN_TABLE,
      payload: numberOfTable
    }
  },
  closeTable(table) {
    return {
      type: ActionType.CLOSE_TABLE,
      payload: table
    }
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_OPEN_TABLES:
      return Object.assign(state, {
        openTables: action.payload
      });

    case ActionType.ADD_NEW_OPEN_TABLE:
      return Object.assign(state, {
        openTables: [...state.openTables, action.payload]
      });

    case ActionType.UPDATE_OPEN_TABLE:
      return { ...state, openTables: updateTable(state.openTables, action.payload) }

    case ActionType.REMOVE_OPEN_TABLE:
      return { ...state, openTables: state.openTables.filter(it => it.numberOfTable !== action.payload) }

    case ActionType.CLOSE_TABLE:
      return addToClosedTable(state, action);

    default:
      return state;
  }
}

