import types from './types';

const createColumn = () => {
  return {
    type: types.CREATE_COLUMN,
    payload: []
  }
};

export {
  createColumn
};