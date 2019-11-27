import React from 'react'
import { Image, View, ScrollView, TouchableHighlight, Text } from 'react-native'
import { Container, ImageLibro, ContImage} from './styled'
import { withNavigation } from 'react-navigation';


const CardTres = (props) => {

    const {navigate} = props.navigation
    const {imageLinks} = props.data.volumeInfo
    const {thumbnail} = imageLinks
    const item  = props.data

    return (
        <Container>
            <TouchableHighlight
                //Envian la data
                onPress={() => navigate('Details', { item })}
            >
                <ImageLibro
                    source={{ uri: thumbnail }}
                    
                />
            </TouchableHighlight>
        </Container>
    )
}

export default withNavigation(CardTres)