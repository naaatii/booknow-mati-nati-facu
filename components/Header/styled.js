import styled from 'styled-components'
import {View} from 'react-native'

const Container = styled.View `
    display:flex;
    background-color: #1A1A1A;
    height: 250px;
    width: 100%;
    margin: 0 auto;
`

const ImageBackground = styled.ImageBackground `
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
    
`

export {Container, ImageBackground}