const defaultDocumentTitle = "WebWaiter";

export const appRoute = {
  LOGIN: "/login",
  PRIVAT_OFFICE: "/",
  ORDER: "/order",
};

export const privatOficeNavigation = {
  MY_ORDERS: "My orders",
  STOP_LIST: "Stop list",
  CLOSED_ORDERS: "Closed orders",
  EXIT: "Exit from private office"
};

export const orderTabs = {
  NEW_ORDER: "New order",
  HISTORY: "History",
  ORDER: "Order"
};

export const orderMoreOptions = {
  CHANGE_GUESTS_COUNT: "Change number of guests",
  CHANGE_TABLE_NUMBER: "Change table number",
  CHANGE_WAITER: "Transfer the order to another waiter"
}

export const documentTitle = {
  OFFICE: `${defaultDocumentTitle} | Office`,
  LOGIN: `${defaultDocumentTitle} | Login`,
  ORDER: `${defaultDocumentTitle} | Order`,
  ERROR: `${defaultDocumentTitle} | Error`,
}
