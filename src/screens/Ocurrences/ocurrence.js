import React, { useState, useEffect } from "react";
import { Layout, Divider, Typography, Tag, Carousel } from 'antd';
import 'antd/dist/antd.css';
import styles from './Occurrences.module.scss';
import MainLayout from "../../layout/MainLayout";

const { Content } = Layout;
const { Title } = Typography;


export default function OccorrencePage(props) {
  const [occurrenceId, setOccurrenceId] = useState([]);
  const [occurrenceDescription, setOccurrenceDescription] = useState([]);
  const [occurrenceCriticity, setOccurrenceCriticity] = useState([]);
  const [occurrenceCategoryId, setOccurrenceCategoryId] = useState([]);
  const [categoryName, setCategoryName] = useState([]);

  // componentDidMount()
  useEffect(async() => {
    var id_occurrence = props.match.params.id;
    // axios.get('/occurrence/' + id_occurrence)
    //   .then(response => {
        // coloca dados
        // setOccurrenceId(response.data._id);
        // setOccurrenceDescription(response.data.description);
        // setOccurrenceCriticity(response.data.criticity_level);
        // setOccurrenceCategoryId(response.data.category_id);
        // axios.get('/categories/')
        // .then(response2 => {
        //     console.log("categoria: " + xxx)
        //     setCategoryName(response2.data.name);
        //   })
        //})
  }, []);

  const onChange = e => {
    console.log("a, b, c");
  };

  return (
    <MainLayout>
      <Content className = "contentLayoutForm" style = {{ padding: "30px 20px 0px 20px" }} >
        <Title className = {[styles.firstTitle]} level={3}> Ocorrência - </Title>
        <Title className = {[styles.secondTitle]} level={4}> #ID </Title>
        <div className = {[styles.tagCriticity]}><Tag color="gold" > criticidade </Tag></div>
        <Divider />

        <div className = {[styles.occurrenceContent]}>
          <div className = {[styles.textContent]}>
            <div className = {[styles.textDescription]}> 
              ##Descrição##
              <div> teste </div>
              <br/>
              <div> teste </div>
            </div>
            
            <div className = {[styles.textCategory]}> ##categoria## </div>
          </div>

          <div className = {[styles.mediasContent]}>
            sncscnksndckjn
          </div>
        </div>
        
        
        
    </Content>
  </MainLayout>
  );
}