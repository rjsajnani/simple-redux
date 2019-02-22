import React from 'react';
import styled from 'styled-components'

const TotalValue = styled.h3`
  color: #000;
`

const showTotal = ({total}) =>{
  if(total){
    let value =  total.map(function (item){
      if(item.amount){
        return item.amount;        
      }else{
        return 0;
      }
    }) 
    let formatNumber = new Intl.NumberFormat();
    let totalValue = formatNumber.format(value.reduce((accumulator, sum) => (accumulator + sum)));
   return totalValue;
  }
}

const Total= (props) =>{
  return(
    <TotalValue>
       Total  <span>$</span> {showTotal(props)} 
      </TotalValue>
  )
} 

export default Total;