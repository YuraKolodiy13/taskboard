import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {addItem, getTodoList} from "../../store/actions/todo";
import './App.scss'
import AddItem from "../AddItem/AddItem";

const App = props => {

  return (
    <div className="App">
      <div className="wrap">
        <div className="todo items">
          <h2>To do</h2>
          {props.todoList && Object.values(props.todoList).map((item, key) =>
            <div key={key} draggable={true} onDragStart={(e) => console.log(e.target)}>{item}</div>
          )}
        </div>
        <div className="progress items">
          <h2>In Progress</h2>
          {props.progressList && Object.values(props.progressList).map((item, key) =>
            <div key={key}>{item}</div>
          )}
        </div>
      </div>
      <AddItem addItem={props.addItem} getTodoList={props.getTodoList}/>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    todoList: state.todo.todoList
  }
};

const MapDispatchToProps = {
  getTodoList: getTodoList,
  addItem: addItem
};

export default connect(mapStateToProps, MapDispatchToProps)(App)
