/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 20:31:48
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-03 12:31:00
 * @Description: file content
 */
import React, { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSections"
import InfoSection from "../components/InfoSection"
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data"
import OtherCatalog from "../components/OtherCatalog"
import Footer from "../components/Footer"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navBackgroundColor, setNavBackgroundColor] = useState("transparent")

  const listenScrollEvent = () => {
    if (window.scrollY > 80) {
      setNavBackgroundColor("black")
    } else {
      setNavBackgroundColor("transparent")
    }
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} navBackgroundColor={navBackgroundColor} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <OtherCatalog />
      <Footer />
    </>
  )
}

export default Home
