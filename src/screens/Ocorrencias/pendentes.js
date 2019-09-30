import React, { useState, useEffect } from "react";
import { Layout, Divider, Table, Typography, Icon, Popconfirm, message, notification } from 'antd';
// import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import styles from './ListasOcorrencias.module.scss';
import { getPendentes, aprovaPendente } from '../../services/listasOcorrencias';

const { Content } = Layout;
const { Title } = Typography;

// Colunas da tabela
// Começam ordenadas crescente pelo campo Nome
const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => ("" + a.name).localeCompare(b.name),
    defaultSortOrder: 'ascend',
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    onFilter: (value, record) => record.category.indexOf(value) === 0,
    sorter: (a, b) => ("" + a.category).localeCompare(b.category),
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    // render: (id) => <span> <Link to="/"><Icon type = "eye" theme = "twoTone" twoToneColor = "#5d7f28" /></Link>  <Icon type = "like" theme = "twoTone" twoToneColor = "#5d7f28" /> </span>,
    render: (text, record) => <span> <a href="ocorrencia" ><Icon type = "eye" theme = "twoTone" twoToneColor = "#5d7f28" className = {[styles.iconAcaoLista, styles.iconOlhoAcaoLista]} /></a>  
                    <Popconfirm
                      title="Tem certeza que quer aprovar a ocorrência?"
                      onConfirm={() => {try {
                                  aprovaPendente('111', {status: "approved"});
                                  notification['success']({
                                    message: 'Ocorrência aprovada!',
                                    description: 'A ocorrência foi aprovada com sucessso. '
                                  });
                                } catch(ex) {
                                  notification['error']({
                                    message: 'Ocorrência não aprovada!',
                                    description: 'Problemas ocorreram ao aprovar a ocorrência. '
                                  });
                                }}
                              }
                      onCancel={cancelaAprovacao}
                      okText="Sim"
                      cancelText="Não"
                    ><Icon type = "like"  className = {styles.iconAcaoLista} /></Popconfirm> </span>,
  },
];

// Dados para teste
// Pode apagar quando a rota estiver funcionando
const data = [
  {
    _id: 1,
    name: 'John Brown',
    age: 32,
    category: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    _id: 2,
    name: 'Jim Green',
    age: 42,
    category: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    _id: 3,
    name: 'Joe Black',
    age: 32,
    category: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

// Funções do Popconfirm
// function confirmaAprovacao(e, id) {
//   console.log(e);
//   aprovaPendente('111', {status: "approved"});
//   message.success('Ocorrência aprovada.');
// }

function cancelaAprovacao(e) {
  console.log(e);
  message.error('Click on No');
}

export default function PendenciasPage(props) {
  const [pendencias, setPendencias] = useState({});

  // componentDidMount()
  useEffect(() => {
    const listaPendentes = getPendentes();
    setPendencias(listaPendentes);
  }, []);

  return (
    <Content className = {styles.contentLista} >

      <Title className = "titleLista" level={3}> Ocorrências - Pendências</Title>
      <Divider />

      <Table rowKey="_id" columns={columns} dataSource={data} className={styles.tableOcorrencias} />
      

  </Content>
  );
}