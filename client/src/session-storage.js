export function loadState(key) {
  try {
    const serializedState = sessionStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

export function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem(key, serializedState)
  } catch (error) {
    throw error;
  }
}

export function removeState(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    throw error;
  }
}
