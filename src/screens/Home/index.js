import React from 'react';
import { Container, ScrollView, Header, HeaderContainer, ContainerTitle, ContainerPrice } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Suggestion from '../../components/Suggestion';
import Activite from '../../components/Activite';
import PayAccount from '../../components/PayAccount';
import Banner from '../../components/Banner';

function Home () {
    return(
        <Container>
            <ScrollView>
                <Header>
                    <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e'/>
                    <HeaderContainer>
                        <ContainerTitle>My Balance</ContainerTitle>
                        <ContainerPrice> R$ 0,00</ContainerPrice>
                    </HeaderContainer>
                    <MaterialCommunityIcons name='gift-outline' size={30} color='#10c86e'/>
                    <MaterialCommunityIcons name='ticket-percent' size={30} color='#10c86e'/>
                </Header>
                <Suggestion/>
                <Activite/>
                <PayAccount/>
                <Banner/>
            </ScrollView>
        </Container>
    );

}

export default Home;