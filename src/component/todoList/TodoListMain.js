import React, { Component } from 'react';
import axios from 'axios';
import TodoListTemplate from './TodoListTemplate';
import Form from './Form';
import TodoItemList from './TodoItemList';
import MyPageButton from '../MyPage/MyPageButton';


class TodoListMain extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: '@.@', checked: false },
      { id: 1, text: '-3-', checked: true },
      { id: 2, text: '^_^', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;

    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    /**
     * 객체들이 들어있는 배열들을 업데이트 할 때마다 복사한다면 오버헤드가 발생하지 않을까? 라는 의문이 들 수도 있습니다. 
     * 전개연산자를 통하여 배열을 복사하는것은 deepCopy 가 아닌 shallowClone 이기 때문에, 내부의 객체 안에있는 내용들은 기존의 것들을 재사용합니다. 
     * 즉 n개의 원소가 들어있다면 O(n) 정도의 복잡도라는 것이죠. 
     * 따라서, 내부의 객체를 바꿔야 할 때는 바꿀 객체를 새로 지정하고 내부의 값을 복사해줘야합니다.
     */
    const {todos} = this.state;

    const index = todos.findIndex(todo=>todo.id === id);
    
    const selected = todos[index];
    // const nextTodos = [...todos];

    // nextTodos[index] = {
    //   ...selected,
    //   checked: !selected.checked
    // };

    // this.setState({
    //   todos: nextTodos
    // });
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index+1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id != id)
    });
  }

  render() {
    const { input, todos } = this.state;
    // const {
    //   handleChange,
    //   handleCreate,
    //   handleKeyPress
    // } = this;

    return (
      <TodoListTemplate 
      mypage={(<MyPageButton></MyPageButton>)}
      form={(
      <Form
        value={input}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        onCreate={this.handleCreate}
      />
      )}>

        <TodoItemList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove}></TodoItemList>
      </TodoListTemplate>
    );
  }
}

export default TodoListMain;
