/*
 * @Author: hhhhhq
 * @Date: 2021-02-05 23:44:22
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-08 16:16:44
 * @Description: file content
 */
import React from "react"
import ProductionDetails from "../components/ProductionDetails"

const productionsDetail = props => {
  const productId = props.match.params.id
  return (
    <>
      <ProductionDetails productId={productId}></ProductionDetails>
    </>
  )
}

export default productionsDetail
