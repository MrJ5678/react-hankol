/*
 * @Author: hhhhhq
 * @Date: 2021-02-03 09:21:57
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-05 23:31:40
 * @Description: file content
 */
import styled from "styled-components"
import myImage from "../../images/bg-vineyard-2.jpg"

export const OtherCatalogContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: relative;
  background-position: 50% 0;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #101522;
  background-image: url(${myImage});
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 48px) {
    height: 1300px;
  }
`

export const OtherCatalogWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 100px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const OtherCatalogCard = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const OtherCatalogIcon = styled.div`
  width: 2rem;
  margin-bottom: 16px;
  transition: 0.2s ease-in-out;
  color: #fff;

  &:hover {
    color: #784737;
  }
`

export const OtherCatalogH1 = styled.h1`
  position: relative;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  &:before {
    content: "";
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 60px solid #784737;
    height: 3px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const OtherCatalogH2 = styled.h2`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10px;
`

export const OtherCatalogP = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`
