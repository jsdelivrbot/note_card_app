import types from './types';

const createCard = (data) => {
  return {
    type: types.CREATE_CARD,
    payload: data
  }
}

const deleteCard = (data) => {
  console.log('Deleting Card with key: ' + data.key);
  return {
    type: types.DELETE_CARD,
    payload: data
  }
}

export default {
  createCard,
  deleteCard
}