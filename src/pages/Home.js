import React from 'react'
import Products from '../components/Products'
export const Home = (props) => {
  console.log("reached at home", props.data)
  return (
    <div><Products data={props.data}/></div>
  )
}
