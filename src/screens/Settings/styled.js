import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;

export const ScrollView = styled.ScrollView``;

export const Header = styled.View`
    margin-top: 25px;
    flex-direction: row;
    justify-content: center;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
    font-size: 16px
    font-weight: bold;
`;

export const Avatar = styled.View`
    align-items: center;
`;

export const Img = styled.Image`
    margin-top: 50px;
`;

export const Body = styled.View`
    align-items: center;
    margin: 20px 0;
`;

export const UserBody = styled.Text`
    color: #fff;
    font-size: 22px
    font-weight: bold;
`;

export const User = styled.Text`
    color: #ccc;
    font-size: 14px
    font-weight: bold;
    margin: 15px 0;
`;
export const BodyProfile = styled.View`
    flex-direction: row;
    align-items: center;
    `;
    export const Profile = styled.Text`
    color: #17AE60;
    font-size: 14px
    font-weight: bold;
    margin: 0 10px;
`;

