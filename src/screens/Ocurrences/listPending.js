import React, { useState, useEffect } from "react";
import { Layout, Divider, Table, Typography, Icon, Popconfirm, notification } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import styles from './Occurrences.module.scss';
import { getOccurrences, mudaStatusOcorrencia } from '../../services/occurrences';
import MainLayout from "../../layout/MainLayout";

const { Content } = Layout;
const { Title } = Typography;
const { Column } = Table;

const renderActions = (record, refresh) => {
  return (
    <span>
      <Link to="/ocorrencia/">
        <Icon
          type="eye"
          theme="twoTone"
          twoToneColor="#5d7f28"
          className={[
            styles.iconAcaoLista, styles.iconOlhoAcaoLista, styles.iconDislike
          ]}
        />
      </Link> 
        <Popconfirm
          title="Tem certeza que deseja aprovar a ocorrência?"
          onConfirm={async() => {
            try {
              await mudaStatusOcorrencia(record.id, {status: "approved"});
              notification['success']({
                message: 'Ocorrência aprovada!',
                description: 'A ocorrência foi aprovada com sucessso.'
              });

              refresh();

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

              refresh();

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
      </span>
  )
}

export default function PendingPage() {
  const [pendencias, setPendencias] = useState([]);

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

        <Table rowKey="id" dataSource={pendencias} className={styles.tableOcorrencias}>
          <Column
            title='Descrição'
            dataIndex='description'
          />

          <Column
            title='Categoria'
            dataIndex='category_id'
            sorter={(a, b) => ("" + a.category_id).localeCompare(b.category_id)}
            sortDirections={['ascend', 'descend']}
            render={categoria => {
              const categorias = {
                solid_waste: 'Dejeito sólido',
                dengue: 'Foco de dengue',
                fire: 'Queimada',
                waste: 'Esgoto',
              }
      
              return categorias[categoria];
            }}
          />

          <Column 
            title='Ações'
            key= 'x'
            render={(record) => renderActions(record, getPendingOccurences)}
          />
        </Table>
    </Content>
  </MainLayout>
  );
}