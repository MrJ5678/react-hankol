/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 20:31:48
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-31 11:59:21
 * @Description: file content
 */
import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSections"
import InfoSection from "../components/InfoSection"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  )
}

export default Home
