/*
 * @Author: hhhhhq
 * @Date: 2021-02-03 09:21:27
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-05 17:14:16
 * @Description: file content
 */
import React from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { FaWeixin } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import {
  OtherCatalogCard,
  OtherCatalogContainer,
  OtherCatalogWrapper,
  OtherCatalogH1,
  OtherCatalogH2,
  OtherCatalogIcon,
  OtherCatalogP,
} from "./OtherCatalogElements"

const OtherCatalog = () => {
  return (
    <OtherCatalogContainer id="contact">
      <OtherCatalogH1>联系我们</OtherCatalogH1>
      <OtherCatalogWrapper>
        <OtherCatalogCard>
          <OtherCatalogIcon>
            <FaPhoneAlt size="2rem" />
          </OtherCatalogIcon>
          <OtherCatalogH2>电话</OtherCatalogH2>
          <OtherCatalogP>131-3675-8989</OtherCatalogP>
        </OtherCatalogCard>
        <OtherCatalogCard>
          <OtherCatalogIcon>
            <FaWeixin size="2rem" />
          </OtherCatalogIcon>
          <OtherCatalogH2>微信</OtherCatalogH2>
          <OtherCatalogP>13136758989</OtherCatalogP>
        </OtherCatalogCard>
        <OtherCatalogCard>
          <OtherCatalogIcon>
            <ImLocation size="2rem" />
          </OtherCatalogIcon>
          <OtherCatalogH2>地址</OtherCatalogH2>
          <OtherCatalogP>哈药路270号</OtherCatalogP>
        </OtherCatalogCard>
      </OtherCatalogWrapper>
    </OtherCatalogContainer>
  )
}

export default OtherCatalog
