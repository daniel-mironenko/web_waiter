export function getRootId(hash) {
  for (let element in hash) {
    const currentElement = hash[element];
    if (!currentElement.parentId) return currentElement.id;
  }
  return null;
}

export function convertToHashTable(arr)  {
  const result = {};
  arr.forEach(it => {
    result[it.id] = it;
  });
  return result;
}