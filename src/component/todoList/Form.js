import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress})=> {
    return (
        <div className='form'>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className='create-button' onClick={onCreate}>추가</div>
        </div>
    );
};

export default Form;

/**
 * value 인풋의 내용
 * onChange 인풋 내용이 변경될 때 실행되는 함수
 * onCreate 버튼이 클릴 될 때 실행될 함수
 * onKeyPress 인풋에서 키를 입력할 때 실행되는 함수 -> 엔터키:onCreate작업
 */