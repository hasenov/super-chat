import React from 'react';
import { Button, Block } from '../../../components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="auth__content">
      <div className="auth__header">
        <h2 className="auth__title">Войти в аккаунт</h2>
        <p className="auth__descr">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="auth"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFieldsChange={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш email' }]}
            hasFeedback
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваш email" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Ваш пароль"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" className="auth__button">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link to="/register" className="auth__link">Зарегистрироваться</Link>
        </Form>
      </Block>
    </div>
  )
}

export default LoginForm;
