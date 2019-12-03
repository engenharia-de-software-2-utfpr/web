import React from "react";
import { Modal, Form, Input } from "antd";

const ModalFormComponent = ({ visible, onCancel, onCreate, form }) => {
  const { getFieldDecorator } = form;

  return (
    <Modal
      visible={visible}
      title="Registrar novo Fomulário"
      okText="Cadastrar"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <Form.Item label="Nome">
          {getFieldDecorator("title", {
            rules: [
              {
                required: true,
                message: "Por favor, insira o nome do formulário!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Link">
        {getFieldDecorator("url", {
            rules: [
              {
                required: true,
                message: "Por favor, insira o link do formulário!"
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalForm = Form.create({ name: "modal_form" })(ModalFormComponent);

export default ModalForm;
