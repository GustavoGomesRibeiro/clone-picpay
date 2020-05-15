import React from 'react';
import avatar from '../../assets/images/avatarcopy.png'
import { Ionicons } from '@expo/vector-icons'; 
import OptionSettings from '../../components/OptionsSettings';

import { Container 
        , ScrollView
        , Header
        , HeaderTitle
        , Avatar
        , Img
        , Body
        , UserBody
        , User
        , BodyProfile
        , Profile
} from './styled';


export default function Settings(){

    return (
        <Container>
            <ScrollView>
                <Header>
                    <HeaderTitle>Settings</HeaderTitle>
                </Header>

                <Avatar>
                    <Img source={avatar}/>
                </Avatar>

                <Body>
                    <UserBody>@GustavoGomes</UserBody>
                    <User>Gustavo Gomes</User>
                    <BodyProfile>
                        <Profile>See the profile</Profile>
                        <Ionicons name='ios-arrow-forward' size={25} color='#17AE60'/>
                    </BodyProfile>
                </Body>
                <OptionSettings/>
            </ScrollView>
        </Container>
    )
}