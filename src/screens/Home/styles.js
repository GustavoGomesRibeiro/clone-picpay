import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background: #000;
    flex:1;
`;

export const ScrollView = styled.ScrollView``;


export const Header = styled.View`
    height: 50px;
    padding: 0px 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`; 

export const HeaderContainer = styled.View`

`;

export const ContainerTitle = styled.Text`
    color: #ccc;
    text-align: center;
    margin-left: 60px;
`; 

export const ContainerPrice = styled.Text`
    font-size: 20px
    color: #fff;
    text-align: center;
    font-weight: bold
    margin-left: 60px;
`;
