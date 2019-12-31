import {ADD_ITEM, GET_TODO_LIST_START, GET_TODO_LIST_SUCCESS} from "./actionType";

export const getTodoList = () => async dispatch => {
  dispatch({
    type: GET_TODO_LIST_START
  });
  const response = await fetch('https://taskboard-334ac.firebaseio.com/todo.json').then(res => res.json());
  dispatch({
    type: GET_TODO_LIST_SUCCESS,
    payload: response
  })
};

export const addItem = item => async dispatch => {
  const response = await fetch('https://taskboard-334ac.firebaseio.com/todo.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(item)
  }).then(res => res.json());
  console.log(response, 543)
  // dispatch({
  //   type: ADD_ITEM,
  //   payload: res
  // })
};