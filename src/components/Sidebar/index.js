/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 16:24:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-07 13:50:16
 * @Description: file content
 */
import React from "react"
import { animateScroll as scroll } from "react-scroll"
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements"
const Sidebar = ({ isOpen, toggle, toggleIcon }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIcon}>
      <Icon onClick={toggleIcon}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="jingdian" onClick={() => toggle("jingdian")}>
            经典版
          </SidebarLink>
          <SidebarLink to="base" onClick={() => toggle("base")}>
            标准版
          </SidebarLink>
          <SidebarLink to="banyuetan" onClick={() => toggle("banyuetan")}>
            半月坛
          </SidebarLink>
          <SidebarLink to="jiacang" onClick={() => toggle("jiacang")}>
            家藏
          </SidebarLink>
          <SidebarLink to="chinesered" onClick={() => toggle("chinesered")}>
            中国红
          </SidebarLink>
          <SidebarLink to="contact" onClick={() => toggle("contact")}>
            联系我们
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap onClick={() => toggle("home")}>
          <SidebarRoute to="/" onClick={toggleHome}>
            回到首页
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
