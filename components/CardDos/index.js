import React from 'react'
import { Image, View, ScrollView, TouchableHighlight, Text } from 'react-native'
import { Container, ImageLibro, ContImage} from './styled'
import { withNavigation } from 'react-navigation';


const CardDos = props => {

    const {navigate} = props.navigation
    const {imageLinks} = props.data.volumeInfo
    const {thumbnail} = imageLinks
    const item  = props.data

    return (

        <TouchableHighlight
        onPress={() => navigate('Details', { item })}
    >
        <Container >


            <ImageLibro
                source={{ uri: thumbnail  }}
            />


        </Container>
        </TouchableHighlight>
    )
}

export default withNavigation(CardDos)