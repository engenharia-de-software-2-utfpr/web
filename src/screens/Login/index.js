import React from "react";
import { Card, Form, Input, Icon, Layout, Row, Button, Typography, notification } from 'antd';
import 'antd/dist/antd.css';
import styles from './Login.module.scss';
import { login } from '../../services/auth';

const { Content, Footer } = Layout;
// const { Title } = Typography;

function LoginPage(props) {
  const handleSubmit = (e) => {

    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("e2");
        fazLogin(values);
      };
    });
    
  };

  async function fazLogin(values) {
    console.log("e1");
    var resp = await login(values);
    console.log("final");

    if (resp === 200) {
      notification['success']({
        message: 'Usuário logado.',
        description: 'Login realizado com sucesso!'
      });
    } else if (resp === 401) {
      notification['error']({
        message: 'Não foi possível realizar o login.',
        description: 'E-mail ou senha inválido!'
      });
    }
  }

  const { getFieldDecorator } = props.form;

  return (
    <Layout className="layout" style={{ height: '100%' }}>
    <Content className={styles.content}>
            <Card bordered={false} style={{ width: 400  }} >
            <Row className = {styles.contentLogoLogin}>
              <img
                className = {styles.imgLogoLogin}
                width={100}
                alt="Logo do sistema"
                src="logo_retangular.jpg"
              />
              
            </Row>
            {/* <Divider /> */}
            {/* <Title level={2}>Login</Title> */}

            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('email', { rules: [{ required: true, message: 'Coloque seu email!' }], })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type="email" placeholder="Email" /> )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('password', { rules: [{ required: true, message: 'Coloque sua senha!' }], })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" placeholder="Senha" /> )}
              </Form.Item>

              <Button type="primary" htmlType="submit" className="login-form-button" block>Entrar</Button>
            </Form>
            </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Rio do Campo Limpo ©2019</Footer>
    </Layout>
  );
}

export default Form.create({ name: 'normal_login' })(LoginPage);

// style={{backgroundColor: '#ECECEC'}}