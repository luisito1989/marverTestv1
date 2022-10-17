import styled from 'styled-components'
import { Props } from '../interfaces/interfaces'


export const Flex = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerInfo = styled.div<Props>`
    height: calc(${props => props.height}vh);
    width: 100%;
    color: #fff;
    background: #000;
`

export const Container = styled.div<Props>`
    margin-top: 50px;
    height: calc(${props => props.height}vh - 50px);
    width: 90%;
    border-radius: 10px 10px 0 0;
    background: url(${props => props.src}) no-repeat;
    background-size: contain;
    backgroun-position: center;
    opacity: 0.5;
`

export const AvatarContainer = styled.div<Props>`
    width: 100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    margin: auto;
`

export const MiniAvatar = styled.div<Props>`
    width: 50px;
    height: 50px;
    background: url(${props => props.src}) no-repeat;
    background-size: cover;
    backgroun-position: center;
    border-radius: 50%;
    border: 2px solid #fff;
`

export const Degrade = styled.div<Props>`
    width: 100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    z-index: 2;
    background: linear-gradient(transparent 0, #000 90%);
`

export const Avatar = styled.div<Props>`
    width: auto;
    height: ${props => props.height}vh;
    background: url(${props => props.src}) no-repeat;
    background-position: top;
    background-size: cover;
`

export const ButtonBuy = styled.button<Props>`
    width: 80%;
    margin: auto;
    background: red;
    border: none;
    color: #fff;
    padding: 5px;
    margin-top: 15px;
    border-radius: 5px;
    cursor: pointer;
`