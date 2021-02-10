/*
 * @Author: hhhhhq
 * @Date: 2021-02-03 12:06:26
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-06 20:30:53
 * @Description: file content
 */
import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: #101522;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  // display: flex;
  // justify-content: center;

  // @media screen and (max-width: 820px) {
  //   padding-top: 32px;
  // }
`
export const FooterInfoTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
`

export const FooterLinksWrapper = styled.div`
  display: flex;
`

export const FooterLinkItems = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  box-sizing: border-box;
  margin: 1rem;

  &:hover {
    color: grey;
    transition: 0.3s ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`

export const SocialLogo = styled.div`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 16px;
`
