import React from 'react'; 
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Container,
     Header,
     ContainerActivite,
     Avatar,
     TextBold,
     Title,
     Description,
     ContainerHeader,
     Body,
     Username,
     Footer,
     Price,
     Divider,
     Details,
     Date,
     Actions,
     Option,
     OptionLabel
     } 
    from './styles';
import avatar from '../../assets/images/avatar.png';

export default function Activite() {
    return (
        <Container>
            <Header>
                <Title>Activite</Title>
            </Header>
            <ContainerActivite>
                <ContainerHeader>
                    <Avatar source={avatar}/>
                    <Description>
                        <TextBold> Você pagou a Gustavo</TextBold> 
                    </Description>
                </ContainerHeader>
                <Body>
                    <Username> Gustavo Gomes</Username>
                </Body>
                <Footer>
                    <Details>
                        <Price>R$ 20,00</Price>
                        <Divider/>

                        <Date>
                            <MaterialCommunityIcons name='lock' size={15} color='#fff'/>
                                1 semana atrás
                        </Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name='comment-outline' size={15} color='#fff'/>
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name='hearto' size={15} color='#fff'/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </Footer>
            </ContainerActivite>
        </Container>
    )
}