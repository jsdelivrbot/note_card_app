export const CREATE_COLUMN = 'CREATE_COLUMN';
export const CREATE_CARD = 'CREATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

let card_num = 0;

export function createColumn() {
  return {
    type: CREATE_COLUMN,
    payload: []
  }
}

export function createCard(data) {
  card_num += 1;
  data['id'] = card_num;
  return {
    type: CREATE_CARD,
    payload: data
  }
}

export function deleteCard(data) {
  console.log('Deleting Card with key: ' + data.key);
  return {
    type: DELETE_CARD,
    payload: data
  }
}