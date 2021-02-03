/*
 * @Author: hhhhhq
 * @Date: 2021-01-29 15:10:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-03 12:25:14
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

const Navbar = ({ toggle, navBackgroundColor }) => {
  return (
    <>
      <Nav navBackgroundColor={navBackgroundColor}>
        <NavbarContainer>
          <NavLogo to="/">酣客</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="jingdian">经典版</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="base">标准版</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="banyuetan">半月坛</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="jiacang">家藏</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="otherCatalog">其它</NavLinks>
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
