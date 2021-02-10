/*
 * @Author: hhhhhq
 * @Date: 2021-01-30 22:46:42
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-02-09 17:08:23
 * @Description: file content
 */
import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"

export const Button = styled(LinkS)`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? "#784737" : "#784737")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  z-index: 100;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "#582c1d" : "#582c1d")};
  }
`

export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? "#784737" : "#784737")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  z-index: 100;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "#582c1d" : "#582c1d")};
  }
`
