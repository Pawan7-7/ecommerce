import React from 'react'
import { useParams } from 'react-router-dom'
export const Cart = () => {
    let params = useParams();
    let id = params.id;
    
  return (
    <div>{id}</div>
  )
}
