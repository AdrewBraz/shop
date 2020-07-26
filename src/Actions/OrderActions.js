import dispatcher from '../dispatcher';

export function addToOrder(id) {
  dispatcher.dispatch({
    type: 'ADD_TO_ORDER',
    id,
  });
}

export function removeFromOrder(id) {
  dispatcher.dispatch({
    type: 'REMOVE_FROM_ORDER',
    id,
  });
}
