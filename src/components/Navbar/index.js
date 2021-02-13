/*
 * @Author: hhhhhq
 * @Date: 2021-01-29 15:10:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-13 16:19:13
 * @Description: file content
 */
import React from "react"
import { CgMenuRight } from "react-icons/cg"
import { IconContext } from "react-icons/lib"
import { animateScroll as scroll } from "react-scroll"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from "./NavbarElements"

const Navbar = ({ scrollNav, transitionStatus, toggle, toggleIcon }) => {
  const toggleHome = () => {
    if (window.location.pathname.includes("production")) {
      console.log("detail page")
      window.location.replace("/react-hankol")
      return false
    }
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav} transitionStatus={transitionStatus}>
          <NavbarContainer>
            <NavLogo to="/react-hankol" onClick={toggleHome}>
              酣客
            </NavLogo>
            <MobileIcon onClick={toggleIcon}>
              <CgMenuRight />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  onClick={() => toggle("jingdian")}
                  to="jingdian"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  经典版
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => toggle("base")}
                  to="base"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  标准版
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => toggle("banyuetan")}
                  to="banyuetan"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  半月坛
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => toggle("jiacang")}
                  to="jiacang"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  家藏
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => toggle("chinesered")}
                  to="chinesered"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  中国红
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => toggle("contact")}
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  联系我们
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
