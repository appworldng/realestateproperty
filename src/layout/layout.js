import React from "react"
import Header from "../layout/header"
import "../styles/global.css"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
