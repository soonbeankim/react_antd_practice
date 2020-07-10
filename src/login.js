import React, { Component, useState } from 'react';
import './App.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import {} from 'jquery.cookie';
import mainPage from './App';

class Login extends Component {

    render() {

        function loginPressed() {
            console.log('login pressed')
        }

        return (
            <Form
            //   name="normal_login"
            //   className="login-form"
            //   initialValues={{ remember: true }}
            //   onFinish={onFinish}

            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                    
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
            </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={loginPressed}>
                        Log in
            </Button>
            Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}



export default Login;