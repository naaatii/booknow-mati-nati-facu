import styled from 'styled-components'

const Container = styled.View `
    width: 90%;
    margin: 0 auto;
    background-color: #232323;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 10px 5px 5px black;
`

const Titulo = styled.Text `
    font-size: 18px;
    font-weight: 800;
    color: white;
    
`

const Subtitulo = styled.Text `
    margin-top: 5px;
    font-size: 14px;
    color: grey;
    
`

const Texto = styled.Text `
    margin-top: 5px;
    font-size: 13px;
    color: white;
    
`

const ImageLibro = styled.Image `
    width: 85%;
    height: 135;
    margin: 0 auto;

`
const ContImage = styled.View `
    width: 35%;


`

const ContTexto = styled.View `
    width: 65%;
    padding-left: 20px;

`

export {Container, Titulo, ImageLibro, Subtitulo, Texto, ContImage, ContTexto}