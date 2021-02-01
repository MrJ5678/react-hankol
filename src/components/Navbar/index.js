/*
 * @Author: hhhhhq
 * @Date: 2021-01-29 15:10:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-31 21:31:36
 * @Description: file content
 */
import React from "react"
import { FaBars } from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from "./NavbarElements"

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">酣客</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="base">标准版</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="jingdian">经典版</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="chinesered">中国红</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="banyuetan">半月坛</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="yishu">半月坛艺术版</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="jiacang">家藏</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="liuxiang">留香</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">联系我们</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
