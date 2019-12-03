import React, { useState, useEffect } from "react";
import { Layout, Divider, Typography, Tag, Card, Button, Drawer } from 'antd';
import 'antd/dist/antd.css';
import styles from './Occurrences.module.scss';
import MainLayout from "../../layout/MainLayout";
import { getOccurrence } from '../../services/occurrences';

const { Content } = Layout;
const { Title } = Typography;


export default function OccorrencePage(props) {
  const [occurrenceId, setOccurrenceId] = useState([]);
  const [occurrenceDescription, setOccurrenceDescription] = useState([]);
  const [occurrenceCriticity, setOccurrenceCriticity] = useState([]);
  const [occurrenceCategoryId, setOccurrenceCategoryId] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [curentImage, setCurentImage] = useState([]);

  const [drawerVisible, setDrawerVisible] = useState();

  // De acordo com o nível de criticidade, a tag assume uma cor
  const criticity_colors = ["gold", "orange", "volcano", "red", "magenta"];

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const showDrawer = (image) => {
    setCurentImage(image);
    setDrawerVisible(true);
  };

  // Cria o card para exibição das mídias
  const createCardGrid = () => {
    let card = [];

    // Itera pelas mídias
    for (let i = 0; i < 7; i++) {
      var imagem = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
      card.push(
        <Card.Grid className = {[styles.cardGridStyle]} key = "mudar quando tiver rota - unique">
          <Button type = "link" ghost onClick = {() => showDrawer(imagem)}>
            <img src = {imagem} alt = "Foto da ocorrência." className = {[styles.cardImage]}/>
          </Button>
        </Card.Grid>
      );
    }
    return card;
  }

  // const getTheOccurrence = async() => {
  //   var id_occurrence = props.match.params.id;
  //   console.log("id: " + id_occurrence);

  //   const ocorrencia = await getOccurrence(id_occurrence);
  //   console.log(ocorrencia);
  //   // coloca dados
  //   setOccurrenceId(id_occurrence);
  //   setOccurrenceDescription(ocorrencia.data.description);
  //   setOccurrenceCriticity(ocorrencia.data.criticity_level);
  //   setOccurrenceCategoryId(ocorrencia.data.category_id);
  //   setDrawerVisible(false);

  //   // axios.get('/categories/')
  //   // .then(response2 => {
  //   //     console.log("categoria: " + xxx)
  //   //     setCategoryName(response2.data.name);
  //   //   })
  // }

  // useEffect(async() => {
  //   getTheOccurrence();
  //   const response = await MyAPI.getData(someId);
  // }, []);

  useEffect(() => {
    var ocorrenciaX = [];
    var id_occurrence = props.match.params.id;
    console.log("id: " + id_occurrence);
    async function fetchData() {
      ocorrenciaX = await getOccurrence(id_occurrence);

      console.log(ocorrenciaX);
      // coloca dados
      setOccurrenceId(id_occurrence);
      setOccurrenceDescription(ocorrenciaX.data.description);
      setOccurrenceCriticity(ocorrenciaX.data.criticity_level);
      setOccurrenceCategoryId(ocorrenciaX.data.category_id);
      setDrawerVisible(false);
    }
    fetchData();

  }, []); // Or [] if effect doesn't need props or state


  return (
    <div>
    <MainLayout>
      <Content className = "contentLayoutForm" style = {{ padding: "30px 20px 0px 20px" }} >
        <Title className = {[styles.firstTitle]} level = {3}> Ocorrência - </Title>
        <Title className = {[styles.secondTitle]} level = {4}> #{occurrenceId} </Title>
        <div className = {[styles.tagCriticity]}><Tag color = {criticity_colors[occurrenceCriticity-1]} > criticidade {occurrenceCriticity}</Tag></div>
        <Divider />

        <div className = {[styles.occurrenceContent]}>
          <div className = {[styles.textContent]}>
            <div className = {[styles.textDescription]}> 
              <p className = {[styles.subTitle]}> Descrição: </p>
              <div> {occurrenceDescription} </div>
            </div>
            
            <div className = {[styles.textCategory]}>
              <p className = {[styles.subTitle]}> Categoria: </p>
              <div> {occurrenceCategoryId} </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className = {[styles.mediasContent]}>
            <Card title = "Mídias">
              <Card.Grid className = {[styles.cardGridStyle]}>
                <Button type = "link" ghost onClick = {() => showDrawer("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKH1XcPAR8cVxKyNvTiKDVP5KQCKFnIIBxpQG2PFT48BnLKCCs")}>
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKH1XcPAR8cVxKyNvTiKDVP5KQCKFnIIBxpQG2PFT48BnLKCCs" alt = "Foto da ocorrência." className = {[styles.cardImage]}/>
                </Button>
              </Card.Grid>
              {createCardGrid()}
            </Card>
          </div>
        </div>
 
      </Content>
    </MainLayout>

  <Drawer
    title="Imagem"
    placement="right"
    closable={true}
    onClose={onCloseDrawer}
    visible={drawerVisible}
    width={700}
    >
    <img src = {curentImage} alt = "Foto da ocorrência." className = {[styles.drawerImage]} />
  </Drawer>

  </div>
  );
}