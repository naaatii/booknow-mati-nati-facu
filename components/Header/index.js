import React from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, ImageBackground } from 'react-native'
import { Container} from './styled'

const Header =  () => {
    
    return(
        <Container>
        
            <ImageBackground source={{ uri: 'https://i.imgur.com/lVa6R5s.png' }} style={{width: '100%', height: '100%'}}>
            </ImageBackground>
        
                    
        </Container>
    )
}

export default Header