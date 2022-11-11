import React, {useEffect, useState} from 'react'
import FoodItem from '../../components/FoodItem/FoodItem'
import axios from "axios"
import classes from "./HomePage.module.css"

function HomePage() {
  
  const [fruits,setFruits] = useState([]);

  const getData = async () => {
    try {
      
      const res = await axios.get("https://fruit-basket-data-ca307-default-rtdb.firebaseio.com/fruits.json");
      // const res = await axios.get("https://www.fruityvice.com/api/fruit/all");

      console.log(res.data);
      setFruits(res.data)

    } catch (error) {

      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className = {classes.home}>
      {(fruits.length === 0) && (<h1>Loading ...</h1>)}
      {fruits.map((frt) => {
        return (
          <FoodItem obj = {frt}/>
        )
      })}
    </div>
  )
}

export default HomePage