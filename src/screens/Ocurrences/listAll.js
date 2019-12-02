import React, { useState, useEffect } from "react";
import { Layout, Divider, Table, Typography, Icon } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import styles from './Occurrences.module.scss';
import { getAllOccurrences } from '../../services/occurrences';
import MainLayout from "../../layout/MainLayout";

const { Content } = Layout;
const { Title } = Typography;

// Colunas da tabela
// Começam ordenadas crescente pelo campo Nome 
const columns = [
  {
    title: 'Descrição',
    dataIndex: 'description',
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
    render: categoria => {
      const categorias = {
        solid_waste: 'Dejeito sólido',
        dengue: 'Foco de dengue',
        fire: 'Queimada',
        waste: 'Esgoto',
      }

      return categorias[categoria];
    }
  },
  {
    title: 'Situação',
    dataIndex: 'status',
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => ("" + a.status).localeCompare(b.status),
    sortDirections: ['ascend', 'descend'],
    render: situation => {
      const situations = {
        approved: 'Aprovada',
        rejected: 'Reprovada',
        waiting: 'Em arguardo',
      }

      return situations[situation];
    }
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    render: (id) => <span> <Link to="/ocorrencia"><Icon type = "eye" theme = "twoTone" twoToneColor = "#5d7f28" className = {styles.iconAcaoLista} /> </Link></span>,
  },
];

export default function OcorrenciasPage(props) {
  const [ocorrencias, setOcorrencias] = useState([]);

  const getOccurrences = () => {
    return getAllOccurrences().then(response => setOcorrencias(response))
  }

  // componentDidMount()
  useEffect(() => {
    getOccurrences();
  }, []);

  return (
    <MainLayout>
      <Content className = "contentLayoutForm" style = {{ padding: "30px 20px 0px 20px" }} >
        <Title className = "titleForm" level={3}> Ocorrências</Title>
        <Divider />

        <Table rowKey="id" columns={columns} dataSource={ocorrencias} />
    </Content>
  </MainLayout>
  );
}