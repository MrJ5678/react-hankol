/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 22:02:10
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-02 22:19:34
 * @Description: file content
 */
import React, { useState } from "react"
import Video from "../../videos/jianji3.mp4"
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
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>酣客酱酒 · 盲品更牛</HeroH1>
        <HeroP>专注酣客, 品牌直供</HeroP>
        <HeroBtnWrapper>
          <Button
            to="jingdian"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            了解更多 {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
