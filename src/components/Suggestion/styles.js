import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,   
    },
}))`
background:#1e222b;
height: 130px;
`;


export const Option = styled.TouchableOpacity`
    align-items: center;
    width: 80px;
    margin-right: 16px
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 8px
    font-weight: bold;
`;
