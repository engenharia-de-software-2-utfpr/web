import React, { useState, useEffect } from "react";
import { Layout, Divider, Table, Typography, Icon, Popconfirm, notification } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import styles from './Occurrences.module.scss';
import { getOccurrences, mudaStatusOcorrencia } from '../../services/occurrences';
import MainLayout from "../../layout/MainLayout";

const { Content } = Layout;
const { Title } = Typography;

export default function PendenciasPage() {
  const [pendencias, setPendencias] = useState([]);

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
      title: 'Ações',
      dataIndex: 'id',
      key: 'x',
      render: (text, record) => 
      <span>
        <Link to={"/ocorrencia/" + record.id}>
        <Icon type = "eye" theme = "twoTone" twoToneColor = "#5d7f28" className = {[styles.iconAcaoLista, styles.iconOlhoAcaoLista, styles.iconDislike]} /></Link> 
          <Popconfirm
            title="Tem certeza que deseja aprovar a ocorrência?"
            onConfirm={async() => {
              try {
                await mudaStatusOcorrencia(record.id, {status: "approved"});
                notification['success']({
                  message: 'Ocorrência aprovada!',
                  description: 'A ocorrência foi aprovada com sucessso.'
                });
    
                getPendingOccurences();
    
              } catch(ex) {
                notification['error']({
                  message: 'Ocorrência não aprovada com sucesso!',
                  description: 'Problemas ocorreram ao aprovar a ocorrência.'
                });
              }}
                    }
            onCancel={()=>{}}
            okText="Sim"
            cancelText="Não"
          >
            <Icon type = "like"  className = {styles.iconAcaoLista} />
          </Popconfirm>

          <Popconfirm
            title="Tem certeza que deseja reprovar a ocorrência?"
            onConfirm={async() => {
              try {
                await mudaStatusOcorrencia(record.id, {status: "rejected"});
                notification['success']({
                  message: 'Ocorrência reprovada!',
                  description: 'A ocorrência foi reprovada com sucessso.'
                });
    
                getPendingOccurences();
    
              } catch(ex) {
                notification['error']({
                  message: 'Ocorrência não reprovada!',
                  description: 'Problemas ocorreram ao reprovar a ocorrência.'
                });
              }}
                    }
            onCancel={()=>{}}
            okText="Sim"
            cancelText="Não"
          >
            <Icon type = "dislike"  className = {styles.iconDislike} />
          </Popconfirm>
        </span>,
    },
  ];

// Colunas da tabela
// Começam ordenadas crescente pelo campo Nome
  const getPendingOccurences = () => {
    return getOccurrences('waiting').then(response => setPendencias(response.data.data));
  }

  useEffect(() => {
    getPendingOccurences(); 
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