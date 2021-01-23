export const addToClosedTable = (state, action) => {
  const date = action.payload.endTime.toLocaleDateString();

  function deleteFromOpenTeble() {
    return state.openTables.filter(it => it.numberOfTable !== action.payload.numberOfTable)
  }

  function pasteClosedTableByDate() {
    return state.closedTables.hasOwnProperty(date) ?
      [...state.closedTables[date], action.payload] :
      [action.payload];
  }

  return {
    ...state,
    closedTables: {
      ...state.closedTables,
      [date]: pasteClosedTableByDate()
    },
    openTables: deleteFromOpenTeble()
  }
};
