import React from 'react';
import { FontAwesome5, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons'
import avatar from '../../assets/images/avatar.png'
import { Container
    , ScrollView
    , Header 
    , Img
    , HeaderTitle
    , Card
    , Avatar
    , BodyCard
    , UserTitle
    , DescriptionTitle
    , Footer
    , Price
    , Divider
    , Date
    , Actions
    , Action
    , Label
} from './styled';


export default function Notification(){

    return (
        <Container>
            <ScrollView>
                <Header>
                        <HeaderTitle>Atividades</HeaderTitle>
                </Header>

                <Card>
                    <Avatar>
                        <Img source={avatar}/>
                        <UserTitle>@Gustavo Gomes pagou a você</UserTitle>
                    </Avatar>
                    <BodyCard>
                        <DescriptionTitle>Hoje o almoço é por minha conta!!!</DescriptionTitle>
                    </BodyCard>

                    <Footer>
                        <Price>R$ 15,00</Price>
                        <Divider/>
                            <FontAwesome5 name='users' size={15} color="#fff"/>    
                        <Date>
                            5 minutos atrás 
                        </Date>

                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name='comment-outline' size={15} color='#fff'/>
                                <Label>5</Label>
                            </Action>

                            <Action>
                                <AntDesign name='hearto' size={15} color='#17AE60'/>
                                <Label>3</Label>
                            </Action>
                        </Actions>                    
                    </Footer>
                </Card>
            </ScrollView>
        </Container>
    )
}