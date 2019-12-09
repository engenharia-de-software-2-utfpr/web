import React, { useState, useEffect } from "react";
import { Layout, Typography, Divider, Table, Row } from 'antd';

import { getForms } from "../../../services/forms";
import CreateForm from "../createForm/createForm";

const { Content } = Layout;
const { Title } = Typography;

const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => ("" + a.name).localeCompare(b.name),
      defaultSortOrder: 'ascend',
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Link',
      dataIndex: 'url',
      onFilter: (value, record) => record.category_id.indexOf(value) === 0,
      sorter: (a, b) => ("" + a.category_id).localeCompare(b.category_id),
      sortDirections: ['ascend', 'descend'],
    },
  ];

export default function ListForms() {
    const [forms, setForms] = useState([]);
    const [pageUpdate, setPageUpdate] = useState(false);

    const handlePageUpdate = () => {
        setPageUpdate(!pageUpdate)
    }

    const getAllForms = () => {
        return getForms().then(response => setForms(response))
    }

    // componentDidMount()
    useEffect(() => {
        getAllForms();
    }, [pageUpdate]);

    return (
        <Content className = "contentLayoutForm" style = {{ padding: "30px 20px 0px 20px" }} >
            <Row type="flex" justify="space-between" style={{marginBottom:0}}>
                <Title className = "titleForm" level={3}> Formulários</Title>
                <CreateForm handlePageUpdate={handlePageUpdate} />
            </Row>
            
            <Divider style={{marginTop: 0}}/>

            <Table rowKey="id" columns={columns} dataSource={forms} />
        </Content>
    );
};
