export function loadState(key) {
  try {
    const serializedState = sessionStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem(key, serializedState)
  } catch (err) {
  }
}
