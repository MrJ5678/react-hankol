/*
 * @Author: hhhhhq
 * @Date: 2021-02-03 12:06:11
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-03 15:46:53
 * @Description: file content
 */
import React from "react"
import { FaWeixin, FaPhone } from "react-icons/fa"
import {
  FooterContainer,
  FooterInfoTitle,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterInfoTitle>欢迎咨询</FooterInfoTitle>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FaWeixin />
            </FooterLinkItems>
            <FooterLinkItems href="tel:13136758989">
              <FaPhone />
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">酣客</SocialLogo>
            <WebsiteRights>&#169; 2021 All right reserved</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
