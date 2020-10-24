import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';


const mockData  = [
 {
  date: 0,
  expenses: 300,
  income: 800
},
 {
  date: 1,
  expenses: 200,
  income: 1200
},
 {
  date: 2,
  expenses: 500,
  income: 1000
},
 {
  date: 3,
  expenses: 1300,
  income: 800
},
 {
  date: 4,
  expenses: 300,
  income: 800
},
 {
  date: 5,
  expenses: 300,
  income: 800
},
 {
  date: 6,
  expenses: 300,
  income: 800
},
 {
  date: 7,
  expenses: 300,
  income: 1800
},
 {
  date: 8,
  expenses: 300,
  income: 800
},
 {
  date: 9,
  expenses: 300,
  income: 800
},
 {
  date: 10,
  expenses: 300,
  income: 800
},
 {
  date: 11,
  expenses: 300,
  income: 800
},
]

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundColor: 'grey',  display: 'flex', justifyContent: "space-around" ,height: "300px"}}>
    
    <App  allYear={mockData} size={300}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
