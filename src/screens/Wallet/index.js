import React, {useState} from 'react';
import {
    Container
    , ScrollView
    , WalletPay
    , Header
    , Text
    , Payment
    , DescriptionWallet
    , ValueWallet
    , DescriptionCDI
    , ContainerHeader
    , BodyPayment
    , TitlePayment
    , DescriptionPayment
    , Img
    , SvgIcon
    , WalletContainer
    , Actions
    , Action
    , ActionLabel
    , AddCard
    , DescriptionAdd
    , CardBody
    , ContainerTicket
    , Ticket
    , TicketLabel
} from './styled';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import creditcard from '../../assets/images/credit-card.png'
import { Switch } from 'react-native';

export default function Wallet() {

    const [visible, setVisible] = useState('true');
    const [isswitch, setSwicth] = useState('true');

    function enableVision(){
        setVisible((event) => !event)
    }

    function enableSwitch() {
        setSwicth((event) => !event)
    }

    return (
        <Container>
            <ScrollView>
            <WalletPay colors={
                    isswitch    ?  ['#52e78c', '#1ab563']
                                :  ['#D3D3D3', '#868686']
                }
            >
                <DescriptionWallet>Saldo PicPay</DescriptionWallet>

                <WalletContainer>
                    <ValueWallet>R$ {visible ? '0,00' : '----'}</ValueWallet>
                    <SvgIcon onPress={enableVision}>
                        <Ionicons name={visible ? 'ios-eye' : 'ios-eye-off'} size={28} color='#fff' />
                    </SvgIcon>
                </WalletContainer>

                <DescriptionCDI>Seu saldo está rendendo 100% da CDI</DescriptionCDI>

                <Actions>
                    <Action>
                        <MaterialCommunityIcons name='cash-multiple' size={28} color='#fff' />
                        <ActionLabel>Adicionar</ActionLabel>
                    </Action>

                    <Action>
                        <FontAwesome name='bank' size={28} color='#fff' />
                        <ActionLabel>Retirar</ActionLabel>
                    </Action>
                </Actions>
            </WalletPay>

            <Header>
                <Text>Usar saldo ao pagar</Text>
                <Switch 
                    value={isswitch}
                    onValueChange={enableSwitch}
                />
            </Header>

            <ContainerHeader> FORMAS DE PAGAMENTO </ContainerHeader>
            <Payment>
                <CardBody>
                    <BodyPayment>
                        <TitlePayment>Cadastre seu cartão de crédito</TitlePayment>
                        <DescriptionPayment>
                            Cadastre um cartao de crédito para poder fazer pagamentos mesmo quando não tiver saído do seu PicPay.
                        </DescriptionPayment>
                    </BodyPayment>
                    <Img source={creditcard} resizeMode='contain' />
                </CardBody>

                <AddCard>
                    <Ionicons name='md-add-circle-outline' size={28} color='#27B458'/>
                    <DescriptionAdd>Adicionar cartão de crédito</DescriptionAdd>
                </AddCard>
            </Payment>

            <ContainerTicket>
                <Ticket>
                    <FontAwesome name='ticket' size={20} color='#27B458' />
                    <TicketLabel>
                        Usar código promocional
                    </TicketLabel>
                </Ticket>
            </ContainerTicket>
            </ScrollView>
        </Container>
    );
}
