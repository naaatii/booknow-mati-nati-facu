import React, { useState, useEffect } from 'react';
import { Image, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation';
import Header from '../components/Header';
import Card from '../components/Card';
import styled from 'styled-components';

const Home = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

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
                   
                <ScrollView>
                    {data.map((dataItem)=><Card key={dataItem.etag} data={dataItem}/>)}
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

export default withNavigation(Home) //me da la funcionalidad de ruteo