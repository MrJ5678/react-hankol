/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 16:24:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-31 17:03:38
 * @Description: file content
 */
import React from "react"
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
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="base" onClick={toggle}>
            标准版
          </SidebarLink>
          <SidebarLink to="jingdian" onClick={toggle}>
            经典版
          </SidebarLink>
          <SidebarLink to="chinesered" onClick={toggle}>
            喜庆酒
          </SidebarLink>
          <SidebarLink to="banyuetan" onClick={toggle}>
            半月坛
          </SidebarLink>
          <SidebarLink to="yishu" onClick={toggle}>
            半月坛(艺术版)
          </SidebarLink>
          <SidebarLink to="jiacang" onClick={toggle}>
            家藏
          </SidebarLink>
          <SidebarLink to="liuxiang" onClick={toggle}>
            留香
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap onClick={toggle}>
          <SidebarRoute>回到首页</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
