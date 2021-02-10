/*
 * @Author: hhhhhq
 * @Date: 2021-02-06 15:35:48
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-10 11:31:09
 * @Description: file content
 */
import styled from "styled-components"

export const ProductionDetailsContainer = styled.div`
  margin-top: 80px;
  padding: 2rem 2rem;
  width: 100%;
  min-height: calc(100vh - 80px - 259px);
`

export const ProductionWrapper = styled.div`
  display: grid;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProductionImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ProductionImage = styled.img`
  width: 90%;
`

export const ProductionInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const ProductionInfo = styled.div`
  width: 100%;
`

export const ProductionH1 = styled.h1`
  color: #784734;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ProductionDescWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }
`
