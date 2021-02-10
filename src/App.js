/*
 * @Author: hhhhhq
 * @Date: 2021-01-28 22:34:26
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-09 18:13:07
 * @Description: file content
 */
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"
import Home from "./pages"
import ProductionsDetail from "./pages/productionsDetail"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = anchor => {
    if (window.location.pathname.includes("production")) {
      // console.log("detail page")
      window.location.replace(`/#${anchor}`)
      setIsOpen(!isOpen)
      return false
    } else {
      if (document.body.clientWidth <= 768) {
        setIsOpen(!isOpen)
      }
    }
  }

  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const [scrollNav, setScrollNav] = useState(false)
  const [transitionStatus, setTransitionStatus] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
      setTransitionStatus(true)
    } else {
      setScrollNav(false)
      setTransitionStatus(true)
    }
  }

  useEffect(() => {
    if (window.location.pathname.includes("production")) {
      setScrollNav(true)
      setTransitionStatus(false)
      return false
    } else {
      window.addEventListener("scroll", changeNav)
    }
  }, [scrollNav])

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} toggleIcon={toggleIcon} />
      <Navbar
        scrollNav={scrollNav}
        transitionStatus={transitionStatus}
        toggle={toggle}
        toggleIcon={toggleIcon}
      />
      <Route path="/" component={Home} exact></Route>
      <Route path="/production/:id" component={ProductionsDetail} exact></Route>
      <Footer />
    </Router>
  )
}

export default App
