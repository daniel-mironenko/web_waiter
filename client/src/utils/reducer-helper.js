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

const updateOrder = (order, newOrder) => {
  const cloneOrder = [...order];
  newOrder.forEach(it => {
    const indexInOrder = cloneOrder.findIndex(el => el.name === it.name);
    if (indexInOrder !== - 1) {
      cloneOrder[indexInOrder].count = cloneOrder[indexInOrder].count + it.count;
    } else {
      cloneOrder.push(it);
    }
  });
  return cloneOrder;
};

export const updateOrderInOpenTables = (openTables, action) => {
  const { id, orderList } = action;
  return openTables.map(it => {
    if (it.id === id) {
      return {
        ...it,
        order: updateOrder(it.order, orderList),
        historyOrder: [...it.historyOrder, {
          timeOrder: new Date(),
          order: orderList,
          price: orderList.reduce((acc, curr) => acc + curr.price * curr.count, 0),
          count: 1
        }]
      }
    }
    return { ...it };
  })
};