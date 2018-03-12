import types from './types';

let card_num = 0;

const createCard = (data) => {
  card_num += 1;
  data['id'] = card_num;
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