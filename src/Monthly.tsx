import React from "react";
import styled from 'styled-components'

interface DateProps {
  date: number;
};

interface IncomeProps {
  income: number;
  max: number;
};

interface ExpensesProps {
  expenses: number;
  max: number;
};
interface columnProps {
  expenses: number, income: number, max: number, month: number;
}

const ExpensesColumn = styled.div<ExpensesProps>`
 background-color: #ff5151;
 width: 32%;
 display: flex;
 color:  #ff5151;
 align-self: flex-end;
 border-radius:  5px 5px 1px 1px;
 height: ${props => props.expenses / props.max * 100}%;
`;

const IncomeColumn = styled.div<IncomeProps>`
 background-color: #65ff65;
 width: 32%;
 color:  #65ff65;
 display: flex;
 align-self: flex-end;
 border-radius: 8px 8px 1px 1px;
  height:${props => props.income / props.max * 100}%;
`;
const Date = styled.div`
 background-color: white;
 width: 100%;
 color:  black;
 display: flex;
 align-self: flex-end;
 justify-content: center;
`;


const Month: React.FC<columnProps> = ({ expenses, income, max, month }) => {
  return (
    <div >
      <div style={{ height: max, display: 'flex', flexDirection: 'row', justifyContent: "space-around", backgroundColor: 'white' }}>
        <ExpensesColumn expenses={expenses} max={max}>hello</ExpensesColumn>
        <IncomeColumn income={income} max={max}>hello</IncomeColumn>
      </div>
      <Date>{month}</Date>
    </div>
  );
}

export default Month;
