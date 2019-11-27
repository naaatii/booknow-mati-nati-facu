import React from 'react'
import { Image, View, ScrollView, TouchableHighlight, Text } from 'react-native'
import { Container, Titulo, ImageLibro, Subtitulo, Texto, ContImage, ContTexto } from './styled'
import { withNavigation } from 'react-navigation';


const Card = props => {

    const {navigate} = props.navigation
    const {title, imageLinks, authors, description} = props.data.volumeInfo
    const {thumbnail} = imageLinks
    const item  = props.data

    return (

        <TouchableHighlight onPress={() => navigate('Details', { item })}
    >
        <Container style={{ flex: 1, flexDirection: 'row' }}>

           
            <ContImage>
            <ImageLibro
                source={{ uri: thumbnail }}
            />
             </ContImage>

            <ContTexto>
                <Titulo>
                 {title.substring(0,20)}
            </Titulo>

                <Subtitulo>
                {authors}
            </Subtitulo>

                <Texto>
                {description.substring(0,135) + '...'}
                </Texto>
            </ContTexto>

        </Container>
        </TouchableHighlight>
    )
}

export default withNavigation(Card)