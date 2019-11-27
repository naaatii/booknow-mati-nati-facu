import React, { useState, useEffect } from 'react';
import { Image, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation';
import Header from '../components/Header';
import CardTres from '../components/CardTres';
import styled from 'styled-components'


const Settings = (props) => {

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
                <ScrollView >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent:"flex-start", flexWrap: "wrap", width: '100%'}}>
                    {data.map((dataItem)=><CardTres key={dataItem.etag} data={dataItem}/>)}  
                    </View>
                </ScrollView>
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


export default withNavigation(Settings) //me da la funcionalidad de ruteo