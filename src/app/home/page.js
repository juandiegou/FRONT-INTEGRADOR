
"use client"
import Header from '../components/header';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState, useEffect } from 'react';
import makeRequest from '../api/request';

export default function Home () {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [dataDiscount, setDataDiscount] = useState([]);
  const [typesDiscount, setTypesDiscount] = useState([]);

  useEffect(() => {
    makeRequest.get('/Expense').then((response) => {

      const totales = [];
      const tags = [];

      response.data.forEach((expense) => {

        expense.forEach(individual => {
          totales.push(individual.total);
          tags.push(individual?.typeCost);
        })
       
      })
      setData(totales);
      setTypes(tags);
    });

    makeRequest.get('/Discount').then((response) => {

      const Descuentos = [];
      const tg = [];
      
      response.data.forEach((discount) => {
          
        Descuentos.push(discount.cost);
        tg.push(discount?.type);
      })
      
      
      setDataDiscount(Descuentos);
      setTypesDiscount(tg);
    });



  }, []);

  const options = {
    title: {
      text: 'Gastos',
      textAlign: 'center'
    },
    series: [{
      data: data, 
      type: 'column',
    }],
    xAxis: {
      categories: types
    },
  };

  const optionsDiscounts = {
    title: {
      text: 'Descuentos',
      textAlign: 'center'
    },
    series: [{
      data: dataDiscount, 
      type: 'column',
    }],
    xAxis: {
      categories: typesDiscount
    },
  };

    return (
      <>
        <Header />
          
          
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />

        <HighchartsReact
          highcharts={Highcharts}
          options={optionsDiscounts}
        />  
      </>

    );
  };
