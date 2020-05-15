import React from 'react';
import { Container, ContainerBanner, Title, Text, Img, TextCobrar } from './styles';
import qrcode from '../../assets/images/12.png'

export default function Banner() {

    return (
        <Container>
            <ContainerBanner>
                <Title>Cobre um amigo</Title>
                <Text>Mantenha suas parcerias em dia, use o PicPay para fazer uma cobraça.</Text>
                <Img source={qrcode}/>
                <TextCobrar>Cobrar agora</TextCobrar>
            </ContainerBanner>
        </Container>
    )
}