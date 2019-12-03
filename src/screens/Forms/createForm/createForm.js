import React, { useState, useCallback } from "react";
import { Button, Row } from "antd";

import ModalFormComponent from "./ModalForm";
import { createForm } from "../../../services/forms";

export default function CreateForm(props) {
  const [visible, setVisible] = useState(false);
  const [formRef, setFormRef] = useState(null);

  const handleCreate = () => {
    formRef.validateFields((err, values) => {
      if (err) {
        return;
      }

      createForm(values)

      props.handlePageUpdate();

      formRef.resetFields();
      setVisible(false);

    });
  };

  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

  return (
    <>
        <Button type="primary" onClick={() => setVisible(true)}>
          Registrar novo Formulário
        </Button>
      <ModalFormComponent
        ref={saveFormRef}
        visible={visible}
        onCancel={() => setVisible(false)}
        onCreate={() => handleCreate()}
      />
    </>
  );
}
