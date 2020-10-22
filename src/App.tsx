import React from "react";
import styled from 'styled-components'
import Monthly from "./Monthly"

interface Months {
  date: number;
};

interface Month {
  expenses: number, income: number;
}

const ColumnTable = styled.div`
 background-color: white;
 width: 80%;
 display: flex;
 border-radius: 30px 30px 1px 1px;
 flex-direction: row;
  justify-content: space-around;
`;


const X = styled.div`
 background-color: white;
 width: 5%;
 display: flex;
 height: 90%; 
 align-self: center;
 flex-direction: column;
 align-self: space-around;
 justify-content: space-between;
 align-self: flex-end;
`;

const Money = styled.div`
 background-color: white;
 width: 100%;
 display: flex;
 height: 50px; 
 align-self: flex-end;

`;

const Month: React.FC<Month> = () => {
  return (

    <ColumnTable >
      <Monthly income={800} max={1000} expenses={300} month={1}></Monthly>
      <Monthly income={800} max={1000} expenses={350} month={2}></Monthly>
      <Monthly income={900} max={1000} expenses={290} month={3}></Monthly>
      <Monthly income={800} max={1000} expenses={325} month={4}></Monthly>
      <Monthly income={800} max={1000} expenses={500} month={5}></Monthly>
      <Monthly income={800} max={1000} expenses={490} month={6}></Monthly>
      <Monthly income={580} max={1000} expenses={500} month={7}></Monthly>
      <Monthly income={780} max={1000} expenses={400} month={8}></Monthly>
      <Monthly income={800} max={1000} expenses={435} month={9}></Monthly>
      <Monthly income={800} max={1000} expenses={252} month={10}></Monthly>
      <Monthly income={800} max={1000} expenses={300} month={11}></Monthly>
      <Monthly income={800} max={1000} expenses={300} month={12}></Monthly>
      <X>
        <Money> - 15000</Money>
        <Money> - 14000</Money>
        <Money> - 13000</Money>
        <Money> - 12000</Money>
        <Money> - 11000</Money>
        <Money> - 10000</Money>
        <Money> - 9000</Money>
        <Money> - 8000</Money>
        <Money> - 7000</Money>
        <Money> - 6000</Money>
        <Money> - 5000</Money>
        <Money> - 4000</Money>
        <Money> - 3000</Money>
        <Money> - 2000</Money>
        <Money> - 1000</Money>
      </X>
      
    </ColumnTable>
  );
}

export default Month;
