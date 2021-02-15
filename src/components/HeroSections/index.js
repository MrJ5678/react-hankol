/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 22:02:10
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-15 16:23:34
 * @Description: file content
 */
import React, { useState } from "react"
import Video from "../../images/heroBg.png"
import { Button } from "../ButtonElements"
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements"

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>酣客酱酒 · 盲品更牛</HeroH1>
        <HeroP>专注酣客, 品牌直供</HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="jingdian"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            了解更多 {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
