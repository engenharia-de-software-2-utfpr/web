import React, { useState, useEffect } from "react";
import { Layout, Divider, Table, Typography, Icon, Popconfirm, notification } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import styles from './ListasOcorrencias.module.scss';
import { getPendentes, aprovaPendente } from '../../services/listasOcorrencias';
import MainLayout from "../../layout/MainLayout";

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
    dataIndex: 'category_id',
    onFilter: (value, record) => record.category_id.indexOf(value) === 0,
    sorter: (a, b) => ("" + a.category_id).localeCompare(b.category_id),
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    render: (text, record) => <span> <Link to="/ocorrencia"><Icon type = "eye" theme = "twoTone" twoToneColor = "#5d7f28" className = {[styles.iconAcaoLista, styles.iconOlhoAcaoLista]} /></Link> 
                    <Popconfirm
                      title="Tem certeza que quer aprovar a ocorrência?"
                      onConfirm={async() => {try {
                                  const res = await aprovaPendente(record.id, {status: "approved"});
                                  // console.log("resp");
                                  // console.log(record.id);
                                  // console.log(res);
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
                      onCancel={()=>{}}
                      okText="Sim"
                      cancelText="Não"
                    ><Icon type = "like"  className = {styles.iconAcaoLista} /></Popconfirm> </span>,
  },
];

export default function PendenciasPage(props) {
  const [pendencias, setPendencias] = useState([]);

  // componentDidMount()
  useEffect(async() => {
    // console.log("entrou effect");
    if(pendencias.length === 0) {
      const listaPendentes = await getPendentes();
      // console.log(listaPendentes);
    
      setPendencias(listaPendentes);
    }
  }, []);

  return (
    <MainLayout>
      <Content className = {styles.contentLista} >
        <Title className = "titleLista" level={3}> Ocorrências - Pendências</Title>
        <Divider />

        <Table rowKey="id" columns={columns} dataSource={pendencias} className={styles.tableOcorrencias} />
    </Content>
  </MainLayout>
  );
}