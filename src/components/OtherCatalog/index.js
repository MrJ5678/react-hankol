/*
 * @Author: hhhhhq
 * @Date: 2021-02-03 09:21:27
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-03 10:56:32
 * @Description: file content
 */
import React from "react"
import Icon1 from "../../images/hankejingdianzuhe.png"
import Icon2 from "../../images/biaozhunban.png"
import Icon3 from "../../images/biaozhunban.png"
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
    <OtherCatalogContainer id="otherCatalog">
      <OtherCatalogH1>其它</OtherCatalogH1>
      <OtherCatalogWrapper>
        <OtherCatalogCard>
          <OtherCatalogIcon src={Icon1} />
          <OtherCatalogH2>中国红</OtherCatalogH2>
          <OtherCatalogP>中国红中国红中国红中国红中国红</OtherCatalogP>
        </OtherCatalogCard>
        <OtherCatalogCard>
          <OtherCatalogIcon src={Icon2} />
          <OtherCatalogH2>艺术半月坛</OtherCatalogH2>
          <OtherCatalogP>
            艺术半月坛艺术半月坛艺术半月坛艺术半月坛
          </OtherCatalogP>
        </OtherCatalogCard>
        <OtherCatalogCard>
          <OtherCatalogIcon src={Icon3} />
          <OtherCatalogH2>留香</OtherCatalogH2>
          <OtherCatalogP>留香留香留香留香留香留香留香留香</OtherCatalogP>
        </OtherCatalogCard>
      </OtherCatalogWrapper>
    </OtherCatalogContainer>
  )
}

export default OtherCatalog
