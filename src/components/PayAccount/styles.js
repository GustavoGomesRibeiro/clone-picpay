import styled from "styled-components/native";


export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,   
    },
}))`
    margin-top: 20px;
`;

export const Card = styled.TouchableOpacity`
    width: 150px;
    height: 230px;
    background: ${({bgColor}) => bgColor};
    border-radius: 10px;
    align-items: center;
    margin-right: 16px;
    justify-content: space-between;
`;
export const Text = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 15px
`;
export const Img = styled.Image`
    align-self: center;
    margin-bottom: 20px; 
`;