import React from 'react'
import { Link } from 'react-router-dom'

import classes from "./HomePage.module.css"

function HomePage() {
  return (
    <div className= {classes.home}>
        <p>Fruit is Nature's Candy</p>
        <p>Choose a variety of colorful fruits to fulfill your body's needs</p>
        <Link to = "/products">Products</Link>
    </div>
  )
}

export default HomePage