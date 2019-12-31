import {GET_TODO_LIST_START, GET_TODO_LIST_SUCCESS} from "../actions/actionType";

const initialState = {
  todoList: [],
  progressList: [],
  loading: false,
};

const todo = (state = initialState, action) => {
  switch (action.type){
    case GET_TODO_LIST_START:
      return {
        ...state,
        loading: true
      };

    case GET_TODO_LIST_SUCCESS:
      return{
        ...state,
        loading: false,
        todoList: action.payload
      };

    default:
      return state
  }
};

export default todo;