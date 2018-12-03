import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children, mypage}) => {
    return (
        <main className='todo-list-template'>
            <div className='title'>
            <div className='mypage-button'>
            {mypage}
            </div>
            <span className='title-text'>오늘 할 일</span>
            </div>
                
            <section className='form-wrapper'>
            {form}
            </section>

            <section className='todos-wrapper'>
            {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;