/*
 * @Author: hhhhhq
 * @Date: 2021-02-03 12:06:26
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-03 15:12:09
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
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
`

export const FooterLinkItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
