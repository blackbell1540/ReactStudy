import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        console.log(this.props);
        return (
            /**
 * onToggle과 onRemove 는 id 를 파라미터로 넣으면 해당 id 를 가진 데이터를 업데이트합니다. 
 * 파라미터를 넣어줘야 하기 때문에, 이 과정에서 우리는 onClick={() => onToggle(id)} 와 같은 형식으로 작성을 했는데요, 
 * onClick={onToggle{id}} 와 같은 형식으로 하고 싶다면.. 절대 안됩니다!! 리액트가 초심자가 한번 쯤 할 수 있는 실수입니다. 
 * 이렇게 하면 해당 함수가 렌더링 될 때 호출이 됩니다. 
 * 해당 함수가 호출되면 데이터가 변경 될 것이고, 데이터가 변경되면 또 리렌더링이 되겠죠? 그러면 또 이 함수가 호출되고.. 무한 반복입니다.
 */
            <div className='todo-item' onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}>&times;</div>

                <div className={`todo-text ${ checked ? 'checked' : '' }`}>
                    <div>{text}</div>
                </div>

                {
                    checked && (<div className="check-mark"> ◎ </div>)
                }
            </div>


        );
    }
}



export default TodoItem;