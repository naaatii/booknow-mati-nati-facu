import React from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight, BackHandler, TouchableOpacity, Button, Linking } from 'react-native'
import styled from 'styled-components'
import { withNavigation } from 'react-navigation';


const SingleBook = props => {

    const {goBack} = props.navigation
    const { getParam } = props.navigation
    const item = getParam('item', 'NO-name');
    const {title, imageLinks, authors, description, publisher, publishedDate, pageCount, categories} = item.volumeInfo
    const {thumbnail} = imageLinks
    const {buyLink} = item.saleInfo
   
    

    return (
        <ScrollView style={{ backgroundColor: '#1A1A1A'}}>

            <View>
            <Image
                style={{ width: '25%', height: 150, position: 'absolute' , marginLeft: 245, marginTop: 130, borderRadius: 5,}}
                source={{
                    uri: thumbnail
                }}
            >
            </Image>

            <BotonCerrar
                //Envian la data
                onPress={() => goBack(null)}
            >
            <Cerrar>Volver</Cerrar>
            </BotonCerrar>
           
            

                <Contenedor>
                <Titulo>{title} </Titulo>
                <Subtitulo>{authors}</Subtitulo>
                <Gen>Genero: {categories}</Gen>
                <Texto>Cantidad de Paginas: {pageCount}</Texto>
                <Texto>{publisher}</Texto>
                <Texto>{publishedDate}</Texto>
                <Desc>{description}</Desc>
                </Contenedor>

                <View style={{ flex: 1, padding: 30}}>

                <Button title='Comprar' onPress={ ()=> Linking.openURL(buyLink) } />

                </View>

            </View>
        </ScrollView>
    )
}


const Titulo = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-top: 20px;

`

const Desc = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: white;
    margin-top: 20px;
`

const Gen = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: white;
    margin-top: 10px;
`

const Subtitulo = styled.Text`
    font-size: 16px
    color: gray;
    margin-top: 10px;
`

const Texto = styled.Text`
    font-size: 14px
    color: white
    margin-top: 10px;
`

const Contenedor = styled.View`
    padding-left: 35px
    width: 90%
    margin-top: 80px;
`

const Cerrar = styled.Text`
    color: white
    font-size: 16;
    font-weight: 500;
`

const BotonCerrar = styled.TouchableHighlight`
    position: absolute;
    top: 25;
    left: 30;
    background-color: black;
    border-radius: 50;
    padding-left: 20
    padding-right: 20
    padding-top: 14
    padding-bottom: 14

`
export default withNavigation(SingleBook)