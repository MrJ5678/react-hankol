/*
 * @Author: hhhhhq
 * @Date: 2021-02-06 15:35:09
 * @LastEditors: hhhhhq
<<<<<<< HEAD
 * @LastEditTime: 2021-02-14 12:16:52
=======
 * @LastEditTime: 2021-02-14 12:00:57
>>>>>>> 6a1d98be74002b94bbd11d519f00e2ca875c3c67
 * @Description: file content
 */
import React from "react"
import Collapse from "rc-collapse"
import {
  ProductionDescWrapper,
  ProductionDetailsContainer,
  ProductionH1,
  ProductionImage,
  ProductionImageWrapper,
  ProductionInfo,
  ProductionInfoWrapper,
  ProductionWrapper,
} from "./ProductionDetailsElements"
import ProductionArray from "./ProductionsDetails"
import "rc-collapse/assets/index.css"

const ProductionDetails = ({ productId }) => {
  const currentProduction = ProductionArray.filter(
    production => production.id === productId
  )[0]

  const Panel = Collapse.Panel
  return (
    <>
      <ProductionDetailsContainer>
        <ProductionWrapper>
          <ProductionInfoWrapper>
            <ProductionImageWrapper>
              <ProductionImage alt={currentProduction.id} />
            </ProductionImageWrapper>
            <ProductionInfo>
              <ProductionH1>{currentProduction.name}</ProductionH1>
              <ProductionDescWrapper>
                <Collapse accordion={true}>
                  <Panel header="香型">酱香型</Panel>
                  <Panel header="配料表">红缨糯高粱、小麦、水</Panel>
                  <Panel header="净含量">{currentProduction.vol}</Panel>
                  <Panel header="酿造工艺">固态发酵酿造法</Panel>
                  <Panel header="窖藏时间">{currentProduction.time}</Panel>
                  <Panel header="特点">{currentProduction.desc}</Panel>
                </Collapse>
              </ProductionDescWrapper>
            </ProductionInfo>
          </ProductionInfoWrapper>
        </ProductionWrapper>
      </ProductionDetailsContainer>
    </>
  )
}

export default ProductionDetails
