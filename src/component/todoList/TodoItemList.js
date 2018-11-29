import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const { todos, onToggle, onRemove } = this.props;
        
        const todoList = todos.map(
            // ({id, text, checked}) => (
            //     <TodoItem
            //     id={id}
            //     text={text}
            //     checked={checked}
            //     onToggle={onToggle}
            //     onRemove={onRemove}
            //     key={id}>
            //     </TodoItem>
            // )
            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                ></TodoItem>
            )
            //주의 : () => () 의 형태임 {}와 헷갈리지 말것.
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;