import types from './actionsTypes';

const add = value => ({
    type: types.Add,
    payload: value
})

export { add };