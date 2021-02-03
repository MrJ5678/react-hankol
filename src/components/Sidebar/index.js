/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 16:24:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-03 12:26:07
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
          <SidebarLink to="jingdian" onClick={toggle}>
            经典版
          </SidebarLink>
          <SidebarLink to="base" onClick={toggle}>
            标准版
          </SidebarLink>
          <SidebarLink to="banyuetan" onClick={toggle}>
            半月坛
          </SidebarLink>
          <SidebarLink to="jiacang" onClick={toggle}>
            家藏
          </SidebarLink>
          <SidebarLink to="otherCatalog" onClick={toggle}>
            其它
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap onClick={toggle}>
          <SidebarRoute to="/">回到首页</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
