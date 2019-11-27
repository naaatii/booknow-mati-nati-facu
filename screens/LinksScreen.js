import React, { useState, useEffect } from 'react';
import { Image, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation';
import Header from '../components/Header';
import CardDos from '../components/CardDos';
import styled from 'styled-components'


const Links = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch( `https://www.googleapis.com/books/v1/volumes?q=inauthor:Stephen%20King`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const tempArray = json.items
            setData(tempArray);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const { navigate } = props.navigation
    return (

        <Wrapper>
        {!isLoading ?
                <ScrollView>
                    <Header />

                    <View>
                    <Titulo>Mas de Stephen King</Titulo>
                    <ScrollView horizontal>
                    {data.map((dataItem)=><CardDos key={dataItem.etag} data={dataItem}/>)}
                      
                    </ScrollView>
                    </View>

                    <View>
                    <Titulo>Para no dormir esta noche</Titulo>
                    <ScrollView horizontal>
                    {data.map((dataItem)=><CardDos key={dataItem.etag} data={dataItem}/>)}
                    </ScrollView>
                    </View>

                    <View style={{ marginBottom: 20}}>
                    <Titulo>Porque leiste 1984</Titulo>
                    <ScrollView horizontal>
                    {data.map((dataItem)=><CardDos key={dataItem.etag} data={dataItem}/>)}
                    </ScrollView>
                    </View>
                    
            </ScrollView>
            :
            <Text>Loading...</Text>
        }
        </Wrapper>
    )
}

const Wrapper = styled.View`
    height:100%;
    background-color: #1A1A1A;
`
const Titulo = styled.Text`
    font-size: 16px;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
`

export default withNavigation(Links) //me da la funcionalidad de ruteo