export const CREATE_COLUMN = 'CREATE_COLUMN';
export const CREATE_CARD = 'CREATE_CARD';

export function createColumn() {
  return {
    type: CREATE_COLUMN,
    payload: []
  }
}

export function createCard(data) {
  return {
    type: CREATE_CARD,
    payload: data
  }
}