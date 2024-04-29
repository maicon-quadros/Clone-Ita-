import styled from "styled-components";

import imgBackground from "../../assets/bg-hero.jpg"

export const Section = styled.section`
   background-image: url(${imgBackground});
    width: 100%;
    height: 704px;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1246px;
    padding: 0 50px;
    margin: 0 auto;
`

export const DivLeft = styled.div`
    flex: 1;
    max-width: 500px;
`

export const H1 = styled.h1`
    color: #ffffff;
    font-size: 72px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const P = styled.p`
    color: #ffffff;
    font-size: 20px;
    max-height: 408px;
    margin-bottom: 32px;
`

export const DivButtons = styled.div`
    margin-bottom: 96px;
    display: flex;
    gap: 10px;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const ButtonExplorer = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: 12px;
    cursor: pointer;
`

export const Span = styled.span`
    color: #ffffff;
    font-weight: bold;
    font-size: 15px;
`

export const ImgWoman = styled.img`
    margin-right: -41px;
`