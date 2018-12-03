import React, { Component } from 'react';
import './App.css';
import Route from 'react-router-dom/Route';
import LoginTemplate from './component/login/LoginTemplate';
import TodoListMain from './component/todoList/TodoListMain';
import MyPage from './component/MyPage/MyPage';



class App extends Component {

  render() {
    return (
      <div>
          <Route exact path="/" component={LoginTemplate}></Route>
          <Route exact path="/TodoList" component={TodoListMain}></Route>
          <Route exact path="/MyPage" component={MyPage}></Route>
      </div>
    )
  }
}

export default App;
