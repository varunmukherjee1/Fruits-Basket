import React from 'react'
import { Link } from 'react-router-dom'

import classes from "./NotFound.module.css"

function NotFound() {
  return (
    <div className= {classes.notFound}>
        <div className = {classes.notif}>
            <p>Looking for something ?</p>
            <p>currently our website doesn't have a page for you 😅</p>
            <p><strong>Go back to homepage : <Link to = "/">here</Link> 👈🏻</strong></p>
        <div className = {classes.line}></div>
      </div>
    </div>
  )
}

export default NotFound