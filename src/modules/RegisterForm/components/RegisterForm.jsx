import React, { useState } from 'react';
import { Button, Block } from '../../../components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [success, setSuccess] = useState(false);

  const onFinish = values => {
    console.log('Success:', values);
    setSuccess(!success);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="auth__content">
      <div className="auth__header">
        <h2 className="auth__title">Регистрация</h2>
        <p className="auth__descr">Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {success ? (
          <div className="auth__success-block block-success">
            <InfoCircleTwoTone style={{ fontSize: '48px' }} />
            <h3 className="block-success__title">Подтвердите свой аккаунт</h3>
            <p className="block-success__text">На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
          </div>
        ) : (
          <Form
            name="auth"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFieldsChange={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Пожалуйста, введите вашу почту' }]}
              hasFeedback
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" size="large" />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
              hasFeedback
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваше имя" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password2"
              rules={[{ required: true, message: 'Пожалуйста, повторите пароль' }]}

              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторить пароль"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="auth__button">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link to="/login" className="auth__link">Войти в аккаунт</Link>
          </Form>
        )}
      </Block>
    </div>
  )
}

export default RegisterForm;
