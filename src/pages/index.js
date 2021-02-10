/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 20:31:48
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-06 15:31:13
 * @Description: file content
 */
import React from "react"
import HeroSection from "../components/HeroSections"
import InfoSection from "../components/InfoSection"
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "../components/InfoSection/Data"
import OtherCatalog from "../components/OtherCatalog"

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <OtherCatalog />
    </>
  )
}

export default Home
