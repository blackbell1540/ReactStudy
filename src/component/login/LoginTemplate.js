import React, { Component } from 'react';
import './LoginTemplate.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LoginTemplate extends Component {

    //최초의 state 는 빈칸
    state = {
        id: '',
        password: ''
    }

    login = async () => {
        const response = await this.tryLogin();

        const loginResult = response.data.login;
        if(loginResult === "success") {
            alert('로그인 성공');
        } else {
            console.log(response);
            alert(response.data.error);
        }
        console.log(response);
    }

    tryLogin = () => {
        return axios.post('', {
            id: this.state.id,
            passwd: this.state.password
        }).then(response => response);
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.login();
        }
    }

    onIdChange = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onChangeInputs = (e)=>{
        this.setState({
            //name이 변수 이름이랑 꼭 같아야겠네..
            [e.target.name] : e.target.value
        });
    }

    render() {
        const { id, password } = this.state;

        return (
            <main className='login-template'>
                <div className='app-title'>My Todo List!</div>

                <div className='login-area'>
                    <div className='id-area'>
                        <p className='text-id'> ID </p>
                        <input type='text' name='id' value={id} onChange={this.onChangeInputs}></input>
                    </div>

                    <div className='password-area'>
                        <p className='text-password'> password </p>
                        <input type='password' name='password' value={password} onChange={this.onChangeInputs}></input>
                    </div>
                </div>

                <center>
                    <div className='login-button' onClick={this.login} >
                        <Link to="TodoList">Login</Link>
                    </div>
                </center>
            </main>
        );
    };

}

export default LoginTemplate;