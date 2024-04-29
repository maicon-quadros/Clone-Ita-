import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80px;
    background-color: #ec7000;
`

export const Container = styled.div`
    width: 100%;
`

export const ContainerItens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1240px;
    padding: 0 15px;
    margin: 0 auto;
`

export const Img = styled.img`
   display: flex;
   align-items: center;
   margin: 0 20px;
   cursor: pointer;
`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 0 20px 0 0;
`

export const Li = styled.li`
    list-style: none;
`

export const ButtonItemMenu = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #ffffff;
    gap: 5px;
    font-weight: bold;
    cursor: pointer;
`

export const DivButtonAccess = styled.div`
    display: flex;
    align-items: center;
    height: 70%;
    padding: 0 20px;
    background-color: #106ec0;
    cursor: pointer;
    border-radius: 10px;
`

export const ButtonAccess = styled.button`
   display: flex;
   align-items: center;
   background-color: transparent;
   border: none;
   color: white;
   gap: 5px;
   cursor: pointer;
   font-weight: bold;
   height: 100%;
`