/*
 * @Author: hhhhhq
 * @Date: 2021-02-06 15:35:09
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-10 09:23:05
 * @Description: file content
 */
import React from "react"
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

const ProductionDetails = ({ productId }) => {
  const currentProduction = ProductionArray.filter(
    production => production.id === productId
  )[0]
  return (
    <>
      <ProductionDetailsContainer>
        <ProductionWrapper>
          <ProductionImageWrapper>
            <ProductionImage
              src={currentProduction.img}
              alt={currentProduction.id}
            />
          </ProductionImageWrapper>
          <ProductionInfoWrapper>
            <ProductionInfo>
              <ProductionH1>{currentProduction.name}</ProductionH1>
              <ProductionDescWrapper></ProductionDescWrapper>
            </ProductionInfo>
          </ProductionInfoWrapper>
        </ProductionWrapper>
      </ProductionDetailsContainer>
    </>
  )
}

export default ProductionDetails
