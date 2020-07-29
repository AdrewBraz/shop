export function setMenu(list) {
  dispather.dispatch({
    type: 'SET_MENU',
    list,
  });
}

export function addItem(item) {
  dispather.dispatch({
    type: 'ADD_ITEM',
    item,
  });
}

export function removeItem(id) {
  dispather.dispatch({
    type: 'REMOVE_ITEM',
    id,
  });
}

export function updateItem(id, item) {
  dispather.dispatch({
    type: 'UPDATE_ITEM',
    id,
    item,
  });
}
