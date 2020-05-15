import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;

export const ScrollView = styled.ScrollView``;

export const  Header = styled.View`
    color: #fff;
    font-size: 18px
    font-weight: bold;
    align-items: center;
    height: 60px;
    background: #17AE60;
    justify-content: center;
`; 
export const  HeaderTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;


export const Img = styled.Image`
    margin-top: 20px;
    margin-left: 10px;
`;

export const  Card = styled.View`
    background: #54689F;
    width: auto;
    height: 150px;
    border-radius: 10px;
    margin-top: 25px;
`;
export const  Avatar = styled.View`
    flex-direction: row;
`;
export const  BodyCard = styled.View`
    flex-direction: row;
`;
export const  UserTitle = styled.Text`
    color: #fff;
    font-size: 16px
    font-weight: bold
    margin-top: 35px;
    margin-left: 10px
`;
export const  DescriptionTitle = styled.Text`
    color: #fff;
    font-size: 16px
    margin-left: 65px;
`;
export const  Footer = styled.View`
    flex-direction: row;
    margin-top: 35px;
    margin-left: 15px;
`;
export const  Price = styled.Text`
    color: #17AE60;
    font-size: 16px;
    font-weight: bold
`;
export const  Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255,255,255,0.4);
    margin: 3px 5px;
`;
export const  Date = styled.Text`
    color: #fff;
    font-size: 16px
    margin: 0 10px;
`;
export const  Actions = styled.View`
    flex-direction: row;
    `;
    export const  Action = styled.TouchableOpacity`
    margin-left: 15px
    flex-direction: row;
    `;
    export const  Label = styled.Text`
    color: #fff;
    font-size: 16px
    margin-left: 5px;
`;